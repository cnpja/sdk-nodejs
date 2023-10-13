import { HttpStatus } from '../http/http.enum';

export class CnpjaException extends Error {

  public constructor(
    public code: HttpStatus,
    public message: string,
    public constraints: string[],
  ) {
    super(message);
  }

}
