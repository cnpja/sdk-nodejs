import { HttpService } from '../http/http.service';
import { OpenOfficeService } from './office/open.office.service';

export class CnpjaOpen {

  /** Operações relacionadas a API de Estabelecimentos. */
  public office: OpenOfficeService;

  public constructor() {
    this.setup();
  }

  /**
   * Resolve dependency tree and inject providers.
   */
  private setup(): void {
    const httpService = new HttpService({
      baseUrl: 'https://open.cnpja.com',
    });

    this.office = new OpenOfficeService(httpService);
  }

}
