import { CccDto, CccReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class CccService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta CCC
   * [ 1 ₪ ] Adquire informações do registro no Cadastro de Contribuintes.
   * @param params
   */
  public read(params: CccReadDto): Promise<CccDto> {
    return this.httpService.get('ccc', {
      query: params,
    });
  }

}
