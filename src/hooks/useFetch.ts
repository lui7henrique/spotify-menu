import { AxiosRequestConfig } from "axios";
import { api } from "services/api";
import useSWR from "swr";

export function useFetch<Data = any, Error = any>(
  endpoint: string,
  config?: AxiosRequestConfig
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    endpoint,
    async (endpoint) => {
      const { data } = await api.get(endpoint, config);

      return data;
    }
  );

  return { data, error, mutate };
}
