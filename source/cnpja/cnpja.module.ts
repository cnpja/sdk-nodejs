import { HttpService } from '../http/http.service';
import { ZipService } from '../zip/zip.service';
import { CnpjaOptions } from './cnpja.interface';

export class Cnpja {

  /** Operações relacionadas a API de Estabelecimentos. */
  public office: unknown;
  /** Operações relacionadas a API de Empresas. */
  public company: unknown;
  /** Operações relacionadas a API de Pessoas. */
  public person: unknown;

  /** Operações relacionadas a API da Receita Federal. */
  public rfb: unknown;
  /** Operações relacionadas a API do Simples Nacional. */
  public simples: unknown;
  /** Operações relacionadas a API do Cadastro Centralizado de Contribuintes. */
  public ccc: unknown;
  /** Operações relacionadas a API do SUFRAMA. */
  public suframa: unknown;
  /** Operações relacionadas a API dos Correios. */
  public zip: ZipService;

  /** Operações relacionadas a API de Assinaturas. */
  public signature: unknown;
  /** Operações relacionadas a API de Créditos. */
  public credit: unknown;

  public constructor(
    private options: CnpjaOptions,
  ) {
    this.setup();
  }

  /**
   * Resolve dependency tree and inject providers.
   */
  private setup(): void {
    const { apiKey } = this.options;

    const httpService = new HttpService({
      baseUrl: 'https://api.cnpja.com',
      authorization: apiKey,
    });

    this.zip = new ZipService(httpService);
  }

}
