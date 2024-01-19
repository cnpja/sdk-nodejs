import { HttpStatus } from '../http/http.enum';
import { CnpjaEnvironment } from './cnpja.enum';

export interface CnpjaOptions {
  /**
   * Chave de autenticação disponível em:
   * https://cnpja.com/me.
   */
  apiKey: string;
  environment?: CnpjaEnvironment;
}

export interface CnpjaExceptionResponse {
  code: HttpStatus;
  message: string;
  traceId: string;
  constraints?: string[];
}
