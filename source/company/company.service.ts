import { CompanyDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class CompanyService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta Empresa
   * Adquire os dados de uma empresa includindo todos os sócios e estabelecimentos.
   * @param params
   */
  public read(params: Pick<CompanyDto, 'id'>): Promise<CompanyDto> {
    const { id } = params;

    return this.httpService.get('company/:id', {
      replacements: { id },
    });
  }

}
