/* eslint-disable @typescript-eslint/naming-convention */
import { PersonDto } from '../cnpja/cnpja.dto';
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
   * Lista todas as pessoas que correspondem aos filtros configurados.
   * @param params
   */
  public async *search(params: PersonSearchReadDto): AsyncIterable<PersonDto[]> {
    yield* this.httpService.getPage('person', { query: params });
  }

}
