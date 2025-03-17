import { QueryClient, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";
import { IGathering } from "@/types/gathering";

export const getGathering = async (id: string): Promise<IGathering> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data;
};

const gatheringDetailQueryOption = (id: string) => ({
  queryKey: [QUERY_KEYS.GATHERING.detail(id)],
  queryFn: () => getGathering(id),
  throwOnError: true,
  retry: false,
});

export const useGatheringDetail = (id: string) => {
  return useQuery(gatheringDetailQueryOption(id));
};

export const useSuspenseGatheringDetail = (id: string) => {
  return useSuspenseQuery(gatheringDetailQueryOption(id));
};

export const prefetchGatheringDetail = async (
  id: string,
  queryClient: QueryClient,
) => {
  return queryClient.prefetchQuery(gatheringDetailQueryOption(id));
};
