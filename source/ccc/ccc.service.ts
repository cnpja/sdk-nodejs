import { CccCertificateDto, CccDto, CccReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class CccService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta CCC
   * Adquire informações do registro no Cadastro de Contribuintes.
   * @param params
   */
  public read(params: CccReadDto): Promise<CccDto> {
    return this.httpService.get('ccc', {
      query: params,
    });
  }

  /**
   * ### Comprovante CCC
   * Emite o comprovante em PDF do registro no Cadastro de Contribuintes.
   * @param params
   */
  public certificate(params: CccCertificateDto): Promise<Buffer> {
    return this.httpService.get('ccc/certificate', {
      query: params,
    });
  }

}
