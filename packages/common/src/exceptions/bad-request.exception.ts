import { HttpBaseException } from './http-base.exception';

export class BadRequestException extends HttpBaseException {
  constructor(message: string) {
    super(400, message);
  }
}
