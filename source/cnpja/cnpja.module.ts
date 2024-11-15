import { CccService } from '../ccc/ccc.service';
import { CompanyService } from '../company/company.service';
import { CreditService } from '../credit/credit.service';
import { HttpService } from '../http/http.service';
import { OfficeService } from '../office/office.service';
import { PersonService } from '../person/person.service';
import { RfbService } from '../rfb/rfb.service';
import { SimplesService } from '../simples/simples.service';
import { SuframaService } from '../suframa/suframa.service';
import { ZipService } from '../zip/zip.service';
import { CnpjaOptions } from './cnpja.interface';

export class Cnpja {

  /** Operações relacionadas a API de Estabelecimentos. */
  public office: OfficeService;
  /** Operações relacionadas a API de Empresas. */
  public company: CompanyService;
  /** Operações relacionadas a API de Pessoas. */
  public person: PersonService;
  /** Operações relacionadas a API de Códigos Postais. */
  public zip: ZipService;
  /** Operações relacionadas a API da Receita Federal. */
  public rfb: RfbService;
  /** Operações relacionadas a API do Simples Nacional. */
  public simples: SimplesService;
  /** Operações relacionadas a API do Cadastro Centralizado de Contribuintes. */
  public ccc: CccService;
  /** Operações relacionadas a API do SUFRAMA. */
  public suframa: SuframaService;
  /** Operações relacionadas a API de Créditos. */
  public credit: CreditService;

  public constructor(
    private options: CnpjaOptions,
  ) {
    this.setup();
  }

  /**
   * Resolve dependency tree and inject providers.
   */
  private setup(): void {
    const { apiKey, baseUrl } = this.options;

    const httpService = new HttpService({
      baseUrl: baseUrl || 'https://api.cnpja.com',
      authorization: apiKey,
    });

    this.office = new OfficeService(httpService);
    this.company = new CompanyService(httpService);
    this.person = new PersonService(httpService);

    this.rfb = new RfbService(httpService);
    this.simples = new SimplesService(httpService);
    this.ccc = new CccService(httpService);
    this.suframa = new SuframaService(httpService);
    this.zip = new ZipService(httpService);

    this.credit = new CreditService(httpService);
  }

}
