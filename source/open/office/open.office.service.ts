import { OfficeDto, OfficeReadDto } from '../../cnpja/cnpja.dto';
import { HttpService } from '../../http/http.service';

export class OpenOfficeService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta CNPJ
	 * Adquire de forma centralizada múltiplas informações de um estabelecimento, incluindo Receita Federal,
	 * Simples Nacional, Cadastro de Contribuintes e SUFRAMA.
	 * @param params
	 */
	public read(params: Pick<OfficeReadDto, 'taxId'>): Promise<OfficeDto> {
		const { taxId } = params;

		return this.httpService.get('office/:taxId', {
			replacements: { taxId },
		});
	}
}
