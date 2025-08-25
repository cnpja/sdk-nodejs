import {
	type ListCreateDto,
	ListDto,
	ListExportCreateDto,
	ListExportDto,
	ListExportIdDto,
	ListExportSearchDto,
	ListSearchDto,
	ListUpdateDto,
} from '../cnpja/cnpja.dto';
import type { HttpService } from '../http/http.service';

export class ListService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Cria Lista​
	 * Adiciona uma nova lista em sua conta, é possível criar até mil listas.
	 * @param params
	 */
	public create(params: ListCreateDto): Promise<ListDto> {
		return this.httpService.post('list', {
			json: params,
		});
	}

	/**
	 * ### Pesquisa Listas​
	 * Encontra as listas que correspondem aos filtros configurados.
	 * @param params
	 */
	public async *search(params: ListSearchDto): AsyncIterable<ListDto[]> {
		yield* this.httpService.getPage('list', {
			query: params,
		});
	}

	/**
	 * ### Consulta Lista
	 * Adquire informações de uma lista através de seu identificador único.
	 * @param params
	 */
	public async read(params: { listId: string }): Promise<ListDto> {
		const { listId } = params;

		return this.httpService.get('list/:listId', {
			replacements: { listId },
		});
	}

	/**
	 * ### Atualiza Lista​
	 * Modifica as informações de uma lista através de seu identificador único.
	 * @param params
	 */
	public async update(params: { listId: string } & ListUpdateDto): Promise<ListDto> {
		const { listId, ...json } = params;

		return this.httpService.patch('list/:listId', {
			replacements: { listId },
			json,
		});
	}

	/**
	 * ### Remove Lista
	 * Apaga uma lista através de seu identificador único.
	 * @param params
	 */
	public async delete(params: { listId: string }): Promise<void> {
		const { listId } = params;

		return this.httpService.delete('list/:listId', {
			replacements: { listId },
		});
	}

	/**
	 * ### Exporta Lista​
	 * Cria uma tarefa de exportação da lista em formatos ZIP e Excel, obedecendo aos parâmetros de consulta CNPJ.
	 * @param params
	 */
	public createExport(params: { listId: string } & ListExportCreateDto): Promise<ListExportIdDto> {
		const { listId, ...json } = params;

		return this.httpService.post('list/:listId/export', {
			replacements: { listId },
			json,
		});
	}

	/**
	 * ### Pesquisa Exportações
	 * Encontra as exportações de uma lista através de seu identificador único.
	 * @param params
	 */
	public async *searchExport(params: ListExportSearchDto): AsyncIterable<ListExportDto[]> {
		const { listId, ...query } = params;

		yield* this.httpService.getPage('list/:listId/export', {
			replacements: { listId },
			query,
		});
	}

	/**
	 * ### Consulta Exportação​
	 * Adquire as informações da exportação de uma lista através de seus identificadores únicos.
	 * @param params
	 */
	public readExport(params: { listId: string; exportId: string }): Promise<ListExportDto> {
		return this.httpService.post('list/:listId/export/:exportId', {
			replacements: params,
		});
	}
}
