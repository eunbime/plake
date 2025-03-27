import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";
import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";

const myGatheringQueryOptions = (params: IMyGatheringFilterParams = {}) => ({
  queryKey: [QUERY_KEYS.GATHERING.myList, params],
  queryFn: async ({ pageParam = 1 }) => {
    const limit = 10;
    const offset = (pageParam - 1) * limit;

    const queryParams: IMyGatheringFilterParams = {
      ...params,
      limit: String(limit),
      offset: String(offset),
    };

    return gatheringService.getMyGatheringList(queryParams);
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage: IMyGathering[], pages: IMyGathering[][]) => {
    const nextPage = pages.length + 1;

    return lastPage.length > 0 ? nextPage : undefined;
  },
  throwOnError: true,
  retry: false,
});

export const useSuspenseMyGatheringList = (
  params: IMyGatheringFilterParams = {},
) => {
  const { data, hasNextPage, fetchNextPage, status } = useSuspenseInfiniteQuery(
    myGatheringQueryOptions(params),
  );

  return { data, hasNextPage, fetchNextPage, status };
};
