export interface OpenOptions {
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
