/* eslint-disable @typescript-eslint/naming-convention */
import { PersonDto, PersonSearchBaseDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';
import { PersonSearchReadDto } from './person.dto';

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

  /**
   * ### Pesquisa Pessoas
   * [ 1 ₪ ] Lista todos as pessoas que correspondem aos filtros configurados.
   * @param params
   */
  public async *search(params: PersonSearchReadDto): AsyncIterable<PersonDto[]> {
    const { type, name, taxId, age, country } = params;

    yield* this.httpService.getPage('person', {
      query: {
        'type.in': type?.in,
        'name.in': name?.in,
        'name.nin': name?.nin,
        'taxId.in': taxId?.in,
        'age.in': age?.in,
        'country.id.in': country?.id?.in,
        'country.id.nin': country?.id?.nin,
      } as PersonSearchBaseDto,
    });
  }

}
