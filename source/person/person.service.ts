import { PersonDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class PersonService {

  public constructor(
    private httpService: HttpService,
  ) { }

  /**
   * ### Consulta Pessoa
   * Adquire os dados de uma pessoa incluindo todos os quadros societários que faz parte.
   * @param params
   */
  public read(params: Pick<PersonDto, 'id'>): Promise<PersonDto> {
    const { id } = params;

    return this.httpService.get('person/:id', {
      replacements: { id },
    });
  }

}
