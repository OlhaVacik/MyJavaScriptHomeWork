import { IApiService } from './interfaces/i-api.service';

export class FetchApiService implements IApiService {
    public constructor(private baseUrl: string, private secret?: {apiKey?: string, basicToken?: string, bearerToken?: string}) {}

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...this.getAuthHeaders(),
            ...{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            ...headers
        };

        const queries = params ? `?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}` : '';
        return fetch(`${this.baseUrl}${uri}${queries}`, {
            method: 'GET',
            headers: defaultHeaders
        });
    }

    public async post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...this.getAuthHeaders(),
            ...{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            ...headers
        };

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(body)
        });
    }

    private getAuthHeaders(): Record<string, string> {
        const headers: Record<string, string> = {};
        if (this.secret?.apiKey) {
            headers['x-api-key'] = this.secret.apiKey;
        } else if (this.secret?.basicToken) {
            headers['Authorization'] = `Basic ${this.secret.basicToken}`;
        } else if (this.secret?.bearerToken) {
            headers['Authorization'] = `Bearer ${this.secret.bearerToken}`;
        }

        return headers;
    }

    public async delete(uri: string, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...this.getAuthHeaders(),
            ...{
                'Accept': 'application/json'
            },
            ...headers
        };

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'DELETE',
            headers: defaultHeaders
        });
    }
}
