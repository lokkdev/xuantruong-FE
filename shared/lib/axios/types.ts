import type { Future } from "@/shared/types/common";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Application-level HTTP contract, independent of Axios surface details.
 */
export interface HttpClient {
  readonly instance: AxiosInstance;
  get<ResponseBody>(
    url: string,
    options?: AxiosRequestConfig,
  ): Future<ResponseBody>;
  post<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    options?: AxiosRequestConfig,
  ): Future<ResponseBody>;
  put<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    options?: AxiosRequestConfig,
  ): Future<ResponseBody>;
  patch<RequestBody, ResponseBody>(
    url: string,
    data?: RequestBody,
    options?: AxiosRequestConfig,
  ): Future<ResponseBody>;
  delete<ResponseBody>(
    url: string,
    options?: AxiosRequestConfig,
  ): Future<ResponseBody>;
}
