import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export type CreateAxiosInstanceOptions = Readonly<{
  baseURL: string;
  timeout?: number;
  /**
   * Optional hook before the request is sent (auth headers, tracing, etc.).
   */
  onRequest?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  /**
   * Optional hook when the response is successful.
   */
  onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  /**
   * Optional hook when the response is an error; default rethrows.
   */
  onResponseError?: (error: AxiosError) => unknown;
}>;

const DEFAULT_TIMEOUT_MS = 10_000;

/**
 * Builds a configured Axios instance (template-method style: fixed pipeline + optional hooks).
 */
export function createAxiosInstance(
  options: CreateAxiosInstanceOptions,
): AxiosInstance {
  const {
    baseURL,
    timeout = DEFAULT_TIMEOUT_MS,
    onRequest,
    onResponse,
    onResponseError,
  } = options;
  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout,
  });
  instance.interceptors.request.use(
    (config) => (onRequest ? onRequest(config) : config),
    (error: AxiosError) => Promise.reject(error),
  );
  instance.interceptors.response.use(
    (response) => (onResponse ? onResponse(response) : response),
    (error: AxiosError) => {
      if (onResponseError) {
        return Promise.reject(onResponseError(error));
      }
      return Promise.reject(error);
    },
  );
  return instance;
}
