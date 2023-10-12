import { HttpStatus } from '../http/http.enum';
import { CnpjaExceptionResponse } from './cnpja.interface';

export class CnpjaException extends Error {

  public constructor(
    public response: CnpjaExceptionResponse,
  ) {
    const { code, message } = response;
    super(`${HttpStatus[code]} - ${message}`);
  }

}
