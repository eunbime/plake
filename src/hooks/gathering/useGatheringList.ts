import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import GatheringService from "@/services/gathering/GatheringService";
import { IGathering } from "@/types/gathering";

const gatheringQueryOption = () => ({
  queryKey: [QUERY_KEYS.GATHERING.list],
  queryFn: () => GatheringService.getGatheringList(),
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IGathering[], pages: IGathering[][]) => {
    return lastPage.length > 0 ? pages.length + 1 : undefined;
  },
});

export const useGatheringList = () => {
  return useInfiniteQuery(gatheringQueryOption());
};

export const useSuspenseGatheringList = () => {
  return useSuspenseInfiniteQuery(gatheringQueryOption());
};

export const prefetchGateringList = async (queryClient: QueryClient) => {
  return queryClient.prefetchInfiniteQuery(gatheringQueryOption());
};
