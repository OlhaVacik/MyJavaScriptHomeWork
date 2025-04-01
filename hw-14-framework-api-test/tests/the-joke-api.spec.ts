import { beforeAll, describe, expect, test } from 'vitest';
import { world } from 'src/hooks/vitest-global-setup';
import { JokesApi } from '../src/apis/the-jokes-api/jokes.api';

describe('The Jokes API tests', () => {
    let jokesApi: JokesApi;

    beforeAll(() => {
        jokesApi = world.theJokeApi;
    });

    describe('Add, Update, Get, Delete joke', () => {

        test('Get - Response contains exactly 10 jokes', async () => {
            const [res, data] = await jokesApi.getTenRandomJokes();

            expect(res.status).toBe(200);
            expect(data.length).toBe(10);
        });

        test('Post - should add a new dad joke', async () => {
            const [res, data] = await jokesApi.AddDadJoke(
                'dad',
                'My boss said: dress for the job you want, not for the job you have',
                'So I went in as Batman.'
            );

            expect(res.status).toBe(201);
            expect(data.message).toBe('Joke added successfully!');
            expect(data.joke).toHaveProperty('id');

            world.testContext.jokeId = data.joke.id;
        });

        test('GET /jokes/:id — should fetch the created joke', async () => {
            const id = world.testContext.jokeId as number;

            const [res, data] = await jokesApi.searchJokesById(id);

            expect(res.status).toBe(200);

            if ('setup' in data && 'punchline' in data) {
                expect(data.setup).toBe('My boss said: dress for the job you want, not for the job you have');
                expect(data.punchline).toBe('So I went in as Batman.');
            } else {
                throw new Error(`Expected JokeDto but got error response: ${data.message}`);
            }
        });

        test('DELETE /jokes/:id — should delete the joke', async () => {
            const id = world.testContext.jokeId as number;

            const [res, data] = await jokesApi.deleteJokeById(id);

            expect(res.status).toBe(200);
            expect(data.message).toBe('Joke deleted successfully!');
        });

        test('GET /jokes/:id — after deletion should return 404', async () => {
            const id = world.testContext.jokeId as number;

            const [res, data] = await jokesApi.searchJokesById(id);

            expect(res.status).toBe(404);
            if ('message' in data) {
                expect(data.message).toBe('joke not found');
            }
        });
    });
});
