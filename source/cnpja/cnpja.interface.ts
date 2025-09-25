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
	/**
	 * Headers adicionais a serem enviados na consulta.
	 */
	headers?: Record<string, string>;
	/**
	 * Quantidade máxima de tentativas por consulta.
	 * Padrão: `3`.
	 */
	retryLimit?: number;
	/**
	 * Atraso entre tentativas por consulta em milissegundos.
	 * Padrão: `(r) => 2 ** (r - 1) * 1000`.
	 */
	retryDelay?: (retries: number) => number;
}

export interface CnpjaExceptionResponse {
	code: HttpStatus;
	message: string;
	traceId: string;
	constraints?: string[];
}
