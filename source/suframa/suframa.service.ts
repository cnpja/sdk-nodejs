import { SuframaCertificateDto, SuframaDto, SuframaReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class SuframaService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta Suframa
   * [ 1 ₪ ] Adquire informações do registro na Suframa.
   * @param params
   */
  public read(params: SuframaReadDto): Promise<SuframaDto> {
    return this.httpService.get('suframa', {
      query: params,
    });
  }

  /**
   * ### Comprovante Suframa
   * [ 1 ₪ ] Emite o comprovante em PDF do registro na Suframa.
   * @param params
   */
  public certificate(params: SuframaCertificateDto): Promise<Buffer> {
    return this.httpService.get('suframa/certificate', {
      query: params,
    });
  }

}
