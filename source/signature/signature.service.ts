import { SignatureCreateDto, SignatureDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class SignatureService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Assina URL
   * Assina a URL alvo eliminando a necessidade de fornecer autenticação ao acessá-la.
   * @param params
   */
  public create(params: SignatureCreateDto): Promise<SignatureDto> {
    return this.httpService.post('signature', {
      json: params,
    });
  }

}
