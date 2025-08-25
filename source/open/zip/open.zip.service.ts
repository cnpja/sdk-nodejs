import { ZipDto } from '../../cnpja/cnpja.dto';
import { HttpService } from '../../http/http.service';

export class OpenZipService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta CEP
	 * Adquire os dados de um código de endereçamento postal, incluindo município IBGE.
	 * @param params
	 */
	public read(params: Pick<ZipDto, 'code'>): Promise<ZipDto> {
		const { code } = params;

		return this.httpService.get('zip/:code', {
			replacements: { code },
		});
	}
}
