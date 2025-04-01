export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theJokeApi: TheJokeApiAuthConfigDto;
}

export interface TheJokeApiAuthConfigDto {
    apiKey: string;
    userName: string;
    password: string;
    token: string;
}

export interface ApiConfigDto {
    theJokeApi: TheJokeApiConfigDto;
}

export interface TheJokeApiConfigDto {
    baseUrl: string;
}
