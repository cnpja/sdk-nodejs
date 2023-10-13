import { OfficeDto, OfficeMapReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';
import { OfficeReadDto } from './office.dto';

export class OfficeService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta CNPJ
   * [ 1 ₪ ] Adquire de forma centralizada múltiplas informações de um estabelecimento,
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
   * ### Mapa Aéreo
   * [ 3 ₪ ] Gera o mapa aéreo referente ao endereço do estabelecimento.
   * @param params
   */
  public map(params: OfficeMapReadDto): Promise<Buffer> {
    const { taxId, ...query } = params;

    return this.httpService.get('office/:taxId/map', {
      replacements: { taxId },
      query,
    });
  }

  /**
   * ### Visão da Rua
   * [ 10 ₪ ] Gera a visão da rua referente ao endereço do estabelecimento.
   * @param params
   */
  public street(params: OfficeMapReadDto): Promise<Buffer> {
    const { taxId, ...query } = params;

    return this.httpService.get('office/:taxId/street', {
      replacements: { taxId },
      query,
    });
  }

}
