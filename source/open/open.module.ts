import { HttpService } from '../http/http.service';
import { OpenOfficeService } from './office/open.office.service';
import { OpenOptions } from './open.interface';
import { OpenZipService } from './zip/open.zip.service';

export class CnpjaOpen {
	/** Operações relacionadas a API de Estabelecimentos. */
	public office: OpenOfficeService;
	/** Operações relacionadas a API de Códigos Postais. */
	public zip: OpenZipService;

	public constructor() {
		this.setup();
	}

	/**
	 * Resolve dependency tree and inject providers.
	 */
	private setup(options: OpenOptions = {}): void {
		const { headers, retryLimit, retryDelay } = options;

		const httpService = new HttpService({
			baseUrl: 'https://open.cnpja.com',
			headers: headers || {},
			retryLimit: retryLimit ?? 3,
			retryDelay: retryDelay || ((r) => 2 ** (r - 1) * 1000),
		});

		this.office = new OpenOfficeService(httpService);
		this.zip = new OpenZipService(httpService);
	}
}
