import { AxiosHttpAdapter } from "@/shared/lib/axios/adapter";
import {
  createAxiosInstance,
  type CreateAxiosInstanceOptions,
} from "@/shared/lib/axios/instance";
import type { HttpClient } from "@/shared/lib/axios/types";

export type CreateHttpClientOptions = CreateAxiosInstanceOptions;

/**
 * Factory: creates a {@link HttpClient} backed by Axios with a single configuration entry point.
 */
export class HttpClientFactory {
  /**
   * Builds an application HTTP client (Adapter + configured Axios instance).
   */
  public static create(options: CreateHttpClientOptions): HttpClient {
    const axiosInstance = createAxiosInstance(options);
    return new AxiosHttpAdapter(axiosInstance);
  }
}
