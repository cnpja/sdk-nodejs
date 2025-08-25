import { PersonDto, PersonSearchDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class PersonService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta Pessoa
	 * Adquire os dados de uma pessoa incluindo todos os quadros societários que faz parte.
	 * @param params
	 * @param params.personId
	 */
	public read(params: { personId: string }): Promise<PersonDto> {
		const { personId } = params;

		return this.httpService.get('person/:personId', {
			replacements: { personId },
		});
	}

	/**
	 * ### Pesquisa Pessoas
	 * Lista todas as pessoas que correspondem aos filtros configurados.
	 * @param params
	 */
	public async *search(params: PersonSearchDto): AsyncIterable<PersonDto[]> {
		yield* this.httpService.getPage('person', {
			query: params,
		});
	}
}
