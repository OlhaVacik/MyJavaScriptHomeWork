import { JokeAddRequestDto, JokeDto, TypeJokeDto, AddJokeResponseDto, DeleteJokeResponseDto, ErrorResponseDto } from 'src/dtos/the-joke-api';
import { IApiService } from 'src/services/interfaces/i-api.service';
import { parseAddJokeResponse, parseDeleteJokeResponse, parseJoke, parseJokeList, parseTypes } from 'src/utils/joke-response-parsers';

export class JokesApi {
    public constructor(private apiService: IApiService) {}

    public async getTenRandomJokes(): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get('/random_ten');
        const data = await parseJokeList(response);

        return [response, data];
    }

    public async getTypesJokes(): Promise<[Response, TypeJokeDto[]]> {
        const response = await this.apiService.get('/types');
        const data = await parseTypes(response);

        return [response, data];
    }

    public async AddDadJoke( type = 'dad', setup: string, punchline: string): Promise<[Response, AddJokeResponseDto]> {
        const body: JokeAddRequestDto = { type, setup, punchline };

        const response = await this.apiService.post('/jokes/add', body);
        const data = await parseAddJokeResponse(response);

        return [response, data];
    }

    public async searchJokesById(id: number): Promise<[Response, JokeDto | ErrorResponseDto]> {
        const response = await this.apiService.get(`/jokes/${id}`);
        const data = await parseJoke(response);

        return [response, data];
    }

    public async deleteJokeById(id: number): Promise<[Response, DeleteJokeResponseDto]> {
        const response = await this.apiService.delete(`/jokes/${id}`);
        const data = await parseDeleteJokeResponse(response);

        return [response, data];
    }
}
