import { CreditoDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class CreditService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Créditos Restantes
   * Consulta a quantidade de créditos restantes em sua conta.
   */
  public read(): Promise<CreditoDto> {
    return this.httpService.get('credit');
  }

}
