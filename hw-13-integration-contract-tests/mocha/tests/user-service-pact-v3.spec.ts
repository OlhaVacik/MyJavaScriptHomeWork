import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { UserService } from '../src/services/user.service';
import { UserDto } from '../src/models/user.dto';
import { expect } from 'chai';
import * as path from 'path';
import {describe, it} from 'mocha';

describe('Pact V3 Image service contract tests', () => {
    let userService: UserService;
    const xApiKey = '<you api key>';

    const provider = new PactV3({
        consumer: 'user-consumer-v3',
        provider: 'user-provider-v3'
    });

    const userResponseExample:  Partial<UserDto[]> = [
        {
            'id': 12345,
            'username': 'TestName',
            'firstName': 'John',
            'lastName': 'Doe',
            'email': 'forexampel@gmail.com',
            'password': 'Password123!',
            'phone': '123456789',
            'userStatus': 1
        } as unknown as UserDto
    ];

    const expectedBody = MatchersV3.like(userResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('Should create user', () => {
            provider
                .given('User \'TestName\' does not exists')
                .uponReceiving('A request to create a new user')
                .withRequest({
                    method: 'Post',
                    path: '/user/createWithList',
                    headers: {
                        accept: 'application/json'
                    },
                    body: userResponseExample
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        code: 200,
                        type: 'unknown',
                        message: 'ok'
                    }
                });

            it('User service return expected response', () => {
                provider
                    .given('User \'TestName\' exists')
                    .uponReceiving('A request to get user details')
                    .withRequest({
                        method: 'GET',
                        path: '/user/TestName',
                        headers: {
                            accept: 'application/json'
                        }
                    })
                    .willRespondWith({
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: expectedBody
                    });

                return provider.executeTest(async (mockUserService) => {
                    userService = new UserService(
                        mockUserService.url,
                        xApiKey
                    );

                    const createUserResponse = await fetch(`${mockUserService.url}/user/createWithList`, {
                        method: 'Post',
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userResponseExample)

                    });

                    expect(createUserResponse.status).to.equal(200);
                    const createUserData = await createUserResponse.json();
                    expect(createUserData.message).to.equal('User created');

                    const user = await userService.getUserName('TestName');

                    expect(user).to.contain.keys(
                        'id',
                        'username',
                        'firstName',
                        'lastName',
                        'email',
                        'password',
                        'phone',
                        'userStatus'
                    );
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.a('string');
                    expect(user.firstName).to.be.a('string');
                    expect(user.lastName).to.be.a('string');
                    expect(user.email).to.be.a('string');
                    expect(user.password).to.be.a('string');
                    expect(user.phone).to.be.a('string');
                    expect(user.userStatus).to.be.a('number');
                });
            });
        });

        describe('Pact V3 verification', () => {
            it('verify provider', () => {
                return new Verifier({
                    providerBaseUrl: 'https://petstore.swagger.io/v2',
                    pactUrls: [path.resolve(process.cwd(), './pacts/user-consumer-v3-user-provider-v3.json')]
                })
                    .verifyProvider()
                    .then(() => {
                        console.log('Pact Verification Complete!');
                    });
            });
        });
    });
});
