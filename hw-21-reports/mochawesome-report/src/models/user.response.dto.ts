export class UserResponseDto {
    public code: number;
    public type: string;
    public message: string;

    public constructor (
        code: number,
        type: string,
        message: string
    ){
        this.code = code;
        this.type = type;
        this.message = message;
    }
}
