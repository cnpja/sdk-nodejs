import { RfbDto, RfbReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';
import { RfbCertificateReadDto } from './rfb.dto';

export class RfbService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta Receita Federal
   * [ 1 ₪ ] Adquire informações do registro na Receita Federal.
   * @param params
   */
  public read(params: RfbReadDto): Promise<RfbDto> {
    return this.httpService.get('rfb', {
      query: params,
    });
  }

  /**
   * ### Comprovante RFB
   * [ 1 ₪ ] Emite o comprovante em PDF do registro na Receita Federal.
   * @param params
   */
  public certificate(params: RfbCertificateReadDto): Promise<Buffer> {
    return this.httpService.get('rfb/certificate', {
      query: params,
    });
  }

}
