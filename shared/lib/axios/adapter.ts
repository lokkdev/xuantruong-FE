import type { Future } from "@/shared/types/common";
import type { HttpClient } from "@/shared/lib/axios/types";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Adapter: exposes {@link HttpClient} using an existing {@link AxiosInstance}.
 */
export class AxiosHttpAdapter implements HttpClient {
  public constructor(public readonly instance: AxiosInstance) {}

  public get<ResponseBody>(
    url: string,
    requestConfig?: AxiosRequestConfig,
  ): Future<ResponseBody> {
    return this.instance.get<ResponseBody>(url, requestConfig);
  }

  public post<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    requestConfig?: AxiosRequestConfig,
  ): Future<ResponseBody> {
    return this.instance.post<ResponseBody>(url, data, requestConfig);
  }

  public put<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    requestConfig?: AxiosRequestConfig,
  ): Future<ResponseBody> {
    return this.instance.put<ResponseBody>(url, data, requestConfig);
  }

  public patch<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    requestConfig?: AxiosRequestConfig,
  ): Future<ResponseBody> {
    return this.instance.patch<ResponseBody>(url, data, requestConfig);
  }

  public delete<ResponseBody>(
    url: string,
    requestConfig?: AxiosRequestConfig,
  ): Future<ResponseBody> {
    return this.instance.delete<ResponseBody>(url, requestConfig);
  }
}
