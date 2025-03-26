import { UserResponseDto } from 'src/models/user.response.dto';
import { UserDto } from '../models/user.dto';
import axios, { AxiosPromise } from 'axios';

export class UserService {
    public constructor(private _baseUrl: string) {}

    public createUser = (user: UserDto[]): AxiosPromise<UserResponseDto> => {
        return axios.request<UserResponseDto>({
            baseURL: this._baseUrl,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/user/createWithList',
            data: user
        });
    };

    public getUserName = (userName: string): AxiosPromise => {
        return axios.request({
            baseURL: this._baseUrl,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `/v2/user/${userName}`
        });
    };
}
