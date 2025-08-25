import { HttpStatus } from '../http/http.enum';

export interface CnpjaOptions {
	/**
	 * Chave de autenticação disponível em:
	 * https://cnpja.com/me.
	 */
	apiKey: string;
	/**
	 * Endereço da API, padrão:
	 * https://api.cnpja.com.
	 */
	baseUrl?: string;
}

export interface CnpjaExceptionResponse {
	code: HttpStatus;
	message: string;
	traceId: string;
	constraints?: string[];
}
