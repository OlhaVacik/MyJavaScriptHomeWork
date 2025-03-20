import { UserDto } from '../models/user.dto';

export class UserService {
    private _headers: Record<string, string>;

    public constructor(private _baseUrl: string, private _token: string) {
        this._headers = {
            accept: 'application/json'
        };
    }

    public async getUserName(userName: string): Promise<UserDto> {
        const response = await fetch(`${this._baseUrl}/user/${userName}`, {
            headers: this._headers
        });

        console.log('Response Headers:', response.headers);
        console.log('Response Status:', response.status);

        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.status}`);
        }

        return await response.json();
    }
}
