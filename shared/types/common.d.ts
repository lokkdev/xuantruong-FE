import { AxiosResponse } from "axios";

export type Future<T> = Promise<AxiosResponse<T>>