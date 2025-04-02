import { JokeDto } from './joke.dto';

export interface AddJokeResponseDto {
    message: string;
    joke: JokeDto;
}
