import { PactV3, Verifier } from '@pact-foundation/pact';
import { UserService } from '../src/services/user.service';
import { UserDto } from '../src/models/user.dto';
import { expect } from 'chai';
import * as path from 'path';
import {describe, it} from 'mocha';
import { like } from '@pact-foundation/pact/src/dsl/matchers';
import { UserResponseDto } from '../src/models/user.response.dto';

describe('Pact V3 User service contract tests', () => {
    let userService: UserService;

    const provider = new PactV3({
        consumer: 'user-consumer-v3',
        provider: 'user-provider-v3'
    });

    const userRequestExample: UserDto = {
        id: 0,
        username: 'string',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
        userStatus: 0
    };
    const expectedBody = like(userRequestExample);

    const userResponseExample: UserResponseDto = {
        code: 200,
        type: 'unknown',
        message: 'ok'
    };

    describe('Consumer tests using Pact V3', () => {
        it('Should create user', async () => {
            provider
                .given('user interaction')
                .uponReceiving('A request to create a new user')
                .withRequest({
                    method: 'POST',
                    path: '/v2/user/createWithList',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: [userRequestExample]
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: userResponseExample
                });

            return provider.executeTest(async (mockUserService) => {

                userService = new UserService(mockUserService.url);

                const responsePost = await userService.createUser([userRequestExample]);

                expect(responsePost.data).to.deep.eq(userResponseExample);
            });
        });
    });

    it('should retrieve the user by username', async () => {
        provider
            .given('User \'user1\' exists')
            .uponReceiving('A request to get user details')
            .withRequest({
                method: 'GET',
                path: '/v2/user/user1'
            })
            .willRespondWith({
                status: 200,
                headers: { 'content-type': 'application/json' },
                body: expectedBody
            });

        return provider.executeTest(async(mockUserService) => {

            userService = new UserService(mockUserService.url);

            const user = await userService.getUserName('user1');


            expect(user.data).to.deep.eq(userRequestExample);

        });
    });
});

describe('Pact V3 verification', () => {
    it('verify provider', async () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/user-consumer-v3-user-provider-v3.json')]

        })
            .verifyProvider()
            .then(() => {
                console.log('Pact Verification Complete!');
            });
    });
});
