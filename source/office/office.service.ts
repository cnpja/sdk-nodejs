import { OfficeDto, OfficeMapDto, OfficeReadDto, OfficeSearchDto, OfficeStreetDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class OfficeService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta CNPJ
	 * Adquire de forma centralizada múltiplas informações de um estabelecimento,
	 * incluindo Receita Federal, Simples Nacional e Cadastro de Contribuintes.
	 * @param params
	 */
	public read(params: OfficeReadDto): Promise<OfficeDto> {
		const { taxId, ...query } = params;

		return this.httpService.get('office/:taxId', {
			replacements: { taxId },
			query,
		});
	}

	/**
	 * ### Pesquisa CNPJ
	 * Lista todos os estabelecimentos que correspondem aos filtros configurados.
	 * @param params
	 */
	public async *search(params: OfficeSearchDto): AsyncIterable<OfficeDto[]> {
		yield* this.httpService.getPage('office', {
			query: params,
		});
	}

	/**
	 * ### Mapa Aéreo
	 * Gera o mapa aéreo referente ao endereço do estabelecimento.
	 * @param params
	 */
	public map(params: OfficeMapDto): Promise<Buffer> {
		const { taxId, ...query } = params;

		return this.httpService.get('office/:taxId/map', {
			replacements: { taxId },
			query,
		});
	}

	/**
	 * ### Visão da Rua
	 * Gera a visão da rua referente ao endereço do estabelecimento.
	 * @param params
	 */
	public street(params: OfficeStreetDto): Promise<Buffer> {
		const { taxId, ...query } = params;

		return this.httpService.get('office/:taxId/street', {
			replacements: { taxId },
			query,
		});
	}
}
