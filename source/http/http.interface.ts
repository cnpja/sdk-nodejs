import { HttpMethod } from './http.enum';

export interface HttpRequestParams {
  /** Request method. */
  method?: HttpMethod;
  /** Object containing replacement string for path variables. */
  replacements?: Record<string, string | number>;
  /** Request query params with array joining support. */
  query?: Record<string, unknown>;
  /** Request body to be sent as JSON. */
  json?: unknown;
}
