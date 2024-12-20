import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponseObj } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponseObj<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1 * 60 * 60 * 1000, //1h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
