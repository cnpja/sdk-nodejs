import { RfbCertificateDto, RfbDto, RfbReadDto } from '../cnpja/cnpja.dto';
import { HttpService } from '../http/http.service';

export class RfbService {
	public constructor(private httpService: HttpService) {}

	/**
	 * ### Consulta Receita Federal
	 * Adquire informações do registro na Receita Federal.
	 * @param params
	 */
	public read(params: RfbReadDto): Promise<RfbDto> {
		return this.httpService.get('rfb', {
			query: params,
		});
	}

	/**
	 * ### Comprovante RFB
	 * Emite o comprovante em PDF do registro na Receita Federal.
	 * @param params
	 */
	public certificate(params: RfbCertificateDto): Promise<Buffer> {
		return this.httpService.get('rfb/certificate', {
			query: params,
		});
	}
}
