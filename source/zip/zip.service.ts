import { ZipDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class ZipService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta CEP
   * Busca um Código de Endereçamento Postal nos Correios e o enriquece com o município no IBGE.
   * @param params
   */
  public read(params: Pick<ZipDto, 'zip'>): Promise<ZipDto> {
    const { zip } = params;

    return this.httpService.get('zip/:zip', {
      replacements: { zip },
    });
  }

}
