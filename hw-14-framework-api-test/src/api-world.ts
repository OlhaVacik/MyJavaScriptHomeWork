
import { JokesApi } from './apis/the-jokes-api/jokes.api';
import { ConfigService } from './services/config.service';
import { FetchApiService } from './services/fetch-api.service';
import { IApiService } from './services/interfaces/i-api.service';

export class ApiWorld {
    public testContext: Record<string, unknown> = {};

    public get theJokeApi(): JokesApi {
        if (!this._jokesApi) {
            this._jokesApi = new JokesApi(this._theJokeFetchApiService);
        }
        return this._jokesApi;
    }

    public get configService(): ConfigService {
        return this._configService;
    }

    private _jokesApi?: JokesApi;
    private _theJokeFetchApiService: IApiService;
    private _configService: ConfigService;

    public constructor() {
        this._configService = new ConfigService();
        const config = this._configService.getConfig();

        this._theJokeFetchApiService = new FetchApiService(config.api.theJokeApi.baseUrl, { apiKey: config.auth.theJokeApi.apiKey });
    }
}
