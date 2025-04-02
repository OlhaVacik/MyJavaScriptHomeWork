import * as dotenv from 'dotenv-safe';
import { AuthConfigDto, ConfigDto, ApiConfigDto } from '../dtos/config.dto';
import * as fs from 'fs';

export class ConfigService {
    private _token: string;

    public constructor() {
        dotenv.config({
            allowEmptyValues: true
        });
        this._token = '';
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    private getAuthConfig(): AuthConfigDto {
        if (fs.existsSync('token.txt')) {
            this._token = fs.readFileSync('token.txt', 'utf8');
        }

        return {
            theJokeApi: {
                apiKey: process.env.THE_JOKE_API_KEY || '',
                userName: process.env.THE_JOKE_API_USER || '',
                password: process.env.THE_JOKE_API_PASSWORD || '',
                token: this._token
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theJokeApi: {
                baseUrl: process.env.THE_JOKE_API_BASE_URL || 'http://localhost:3005'
            }
        };
    }

    public updateJwtToken(token: string): void {
        fs.writeFileSync('token.txt', token);
    }
}
