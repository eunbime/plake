import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import GatheringService from "@/services/gathering/GatheringService";
import { IGathering } from "@/types/gathering";

export const useGateringList = () => {
  return useInfiniteQuery<IGathering[]>({
    queryKey: [QUERY_KEYS.GATHERING.list],
    queryFn: () => GatheringService.getGatheringList(),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
    select: data => ({
      pages: data.pages,
      pageParams: data.pageParams,
    }),
    throwOnError: true,
    retry: false,
  });
};

export const prefetchGateringList = async (queryClient: QueryClient) => {
  return queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEYS.GATHERING.list],
    queryFn: () => GatheringService.getGatheringList(),
    initialPageParam: 1,
    retry: false,
  });
};
