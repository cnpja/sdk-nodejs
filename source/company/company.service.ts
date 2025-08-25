import { CompanyDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class CompanyService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta Empresa
	 * Adquire os dados de uma empresa includindo todos os sócios e estabelecimentos.
	 * @param params
	 * @param params.companyId
	 */
	public read(params: { companyId: number }): Promise<CompanyDto> {
		const { companyId } = params;

		return this.httpService.get('company/:companyId', {
			replacements: { companyId },
		});
	}
}
