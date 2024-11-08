import { SimplesCertificateDto, SimplesDto, SimplesReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class SimplesService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta Simples e MEI
   * Adquire informações do registro no Simples Nacional e MEI.
   * @param params
   */
  public read(params: SimplesReadDto): Promise<SimplesDto> {
    return this.httpService.get('simples', {
      query: params,
    });
  }

  /**
   * ### Comprovante Simples e MEI
   * Emite o comprovante em PDF do registro no Simples Nacional.
   * @param params
   */
  public certificate(params: SimplesCertificateDto): Promise<Buffer> {
    return this.httpService.get('simples/certificate', {
      query: params,
    });
  }

}
