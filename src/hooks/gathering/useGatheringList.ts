import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { ONLINE } from "@/constants/gatheringFilterParams";
import { QUERY_KEYS } from "@/constants/queryKeys";
import GatheringService from "@/services/gathering/GatheringService";
import { IGathering } from "@/types/gathering";

const filterByValue = (data: {
  pages: IGathering[][];
  pageParams: number[];
}) => ({
  pages: data.pages.map(page =>
    page.filter((data: IGathering) => data.location !== ONLINE.location),
  ),
  pagesParams: data.pageParams,
});

const gatheringQueryOption = (type?: string, params?: string | undefined) => ({
  queryKey: [QUERY_KEYS.GATHERING.list, params],
  queryFn: ({ pageParam = 1 }) => {
    return GatheringService.getGatheringList(pageParam, params);
  },
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IGathering[], pages: IGathering[][]) => {
    const nextPage = pages.length + 1;

    return lastPage.length > 0 ? nextPage : undefined;
  },
  select: type === "offline" ? filterByValue : undefined,
});

export const useGatheringList = (type?: string, params?: string) => {
  return useInfiniteQuery(gatheringQueryOption(type, params));
};

export const useSuspenseGatheringList = (type?: string, params?: string) => {
  const { data, hasNextPage, fetchNextPage, status } = useSuspenseInfiniteQuery(
    gatheringQueryOption(type, params),
  );

  return { data, hasNextPage, fetchNextPage, status };
};

export const prefetchGateringList = async (
  queryClient: QueryClient,
  type?: string,
  params?: string,
) => {
  return queryClient.prefetchInfiniteQuery(gatheringQueryOption(type, params));
};
