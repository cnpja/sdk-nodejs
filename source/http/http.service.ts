import { CnpjaException } from '../cnpja/cnpja.exception';
import { CnpjaExceptionResponse } from '../cnpja/cnpja.interface';
import { HttpMethod, HttpOptions, HttpStatus } from './http.enum';
import { HttpRequestParams } from './http.interface';

export class HttpService {

  public constructor(
    private readonly options: HttpOptions,
  ) { }

  /**
   * Executes configure HTTP request using native fetch().
   * @param url
   * @param params
   */
  public async request<T>(url: string, params: HttpRequestParams): Promise<T> {
    const { method, replacements, query, json } = params;
    const { baseUrl, authorization } = this.options;

    const replaceUrl = this.replaceUrlPlaceholders(`${baseUrl}/${url}`, replacements);
    const strQuery = new URLSearchParams(query as Record<string, string>).toString();
    const finalUrl = `${replaceUrl}${strQuery ? `?${strQuery}` : ''}`;

    const headers: Record<string, string> = { authorization };
    const body = JSON.stringify(json);

    if (json) {
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(finalUrl, { method, headers, body });

    if (res.status >= Number(HttpStatus.BAD_REQUEST)) {
      const resJson: CnpjaExceptionResponse = await res.json();
      throw new CnpjaException(resJson);
    }

    const resContentType = res.headers.get('content-type');

    if (resContentType.startsWith('application/json')) {
      return res.json();
    }
    else {
      const arrayBuffer = await res.arrayBuffer();
      return Buffer.from(arrayBuffer) as T;
    }
  }

  /**
   * Replace url placeholder in the format :param_name
   * which its equivalent target value.
   * @param url
   * @param replacements
   */
  private replaceUrlPlaceholders(url: string, replacements: Record<string, string | number>): string {
    if (!replacements) return url;
    let replacedUrl = url;

    for (const key in replacements) {
      const replacement = replacements[key]?.toString?.();

      if (!replacement || typeof replacement !== 'string') {
        throw new Error(`Path replacement ${key} must be a defined string`);
      }

      const replaceRegex = new RegExp(`:${key}`, 'g');
      replacedUrl = replacedUrl.replace(replaceRegex, replacement);
    }

    return replacedUrl;
  }

  /**
   * Sends a GET request.
   * @param url
   * @param params
   */
  public get<T>(url: string, params: HttpRequestParams = { }): Promise<T> {
    return this.request(url, { ...params, method: HttpMethod.GET });
  }

  /**
   * Sends a POST request.
   * @param url
   * @param params
   */
  public post<T>(url: string, params: HttpRequestParams = { }): Promise<T> {
    return this.request(url, { ...params, method: HttpMethod.POST });
  }

  /**
   * Sends a PUT request.
   * @param url
   * @param params
   */
  public put<T>(url: string, params: HttpRequestParams = { }): Promise<T> {
    return this.request(url, { ...params, method: HttpMethod.PUT });
  }

  /**
   * Sends a PATCH request.
   * @param url
   * @param params
   */
  public patch<T>(url: string, params: HttpRequestParams = { }): Promise<T> {
    return this.request(url, { ...params, method: HttpMethod.PATCH });
  }

  /**
   * Sends a DELETE request.
   * @param url
   * @param params
   */
  public delete<T>(url: string, params: HttpRequestParams = { }): Promise<T> {
    return this.request(url, { ...params, method: HttpMethod.DELETE });
  }

}
