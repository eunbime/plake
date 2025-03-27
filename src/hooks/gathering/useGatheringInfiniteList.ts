import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { ONLINE } from "@/constants/gatheringFilterParams";
import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";
import { IGathering, IGatheringFilterParams } from "@/types/gathering";

const filterByValue = (data: {
  pages: IGathering[][];
  pageParams: number[];
}) => ({
  pages: data.pages.map(page =>
    page.filter((data: IGathering) => data.location !== ONLINE.location),
  ),
  pagesParams: data.pageParams,
});

const gatheringInfiniteListQueryOption = (
  type?: string,
  params?: IGatheringFilterParams,
) => ({
  queryKey: [QUERY_KEYS.GATHERING.listByParams(params)],
  queryFn: ({ pageParam = 1 }) => {
    return anonGatheringService.getGatheringInfiniteList(pageParam, params);
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

export const useGatheringInfiniteList = (
  type?: string,
  params?: IGatheringFilterParams,
) => {
  return useInfiniteQuery(gatheringInfiniteListQueryOption(type, params));
};

export const useSuspenseGatheringInfiniteList = (
  type?: string,
  params?: IGatheringFilterParams,
) => {
  const { data, hasNextPage, fetchNextPage, status } = useSuspenseInfiniteQuery(
    gatheringInfiniteListQueryOption(type, params),
  );

  return { data, hasNextPage, fetchNextPage, status };
};

export const prefetchGateringInfiniteList = async (
  queryClient: QueryClient,
  type?: string,
  params?: IGatheringFilterParams,
) => {
  return queryClient.prefetchInfiniteQuery(
    gatheringInfiniteListQueryOption(type, params),
  );
};
