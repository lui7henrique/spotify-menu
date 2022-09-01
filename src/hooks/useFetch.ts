import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { spotify } from "services/spotify";
import { api as nextApi } from "services/api";

export const useFetch = <T = any>(
  keys: string[],
  api: "spotify" | "next",
  endpoint: string,
  config?: AxiosRequestConfig
) => {
  const query = useQuery(keys, async () => {
    if (api === "next") {
      const { data } = await nextApi.get<T>(endpoint, config);
      return data;
    }

    const { data } = await spotify.get<T>(endpoint, config);

    return data;
  });

  return { ...query };
};
