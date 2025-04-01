import { safeJson } from './safe-json';
import {
    JokeDto,
    TypeJokeDto,
    AddJokeResponseDto,
    DeleteJokeResponseDto,
    ErrorResponseDto
} from 'src/dtos/the-joke-api';

export const parseJoke = (res: Response): Promise<JokeDto> => safeJson(res);
export const parseJokeList = (res: Response): Promise<JokeDto[]> => safeJson(res);
export const parseTypes = (res: Response): Promise<TypeJokeDto[]> => safeJson(res);
export const parseAddJokeResponse = (res: Response): Promise<AddJokeResponseDto> => safeJson(res);
export const parseDeleteJokeResponse = (res: Response): Promise<DeleteJokeResponseDto> => safeJson(res);
export const parseError = (res: Response): Promise<ErrorResponseDto> => safeJson(res);
