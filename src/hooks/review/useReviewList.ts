import {
  infiniteQueryOptions,
  QueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonReviewService from "@/services/review/AnonReviewService";
import { IReviewResponse, TReviewQueryParams } from "@/types/review";

const reviewListQueryOption = (searchParams?: TReviewQueryParams) =>
  infiniteQueryOptions({
    queryKey: [QUERY_KEYS.REVIEW.listByQueryParams(searchParams)],
    queryFn: () => anonReviewService.getReviewList(searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IReviewResponse) => {
      if (
        lastPage.data.length === 0 ||
        lastPage.currentPage >= lastPage.totalPages
      ) {
        return undefined;
      }
    },
  });

export const useSuspenseReviewList = (searchParams?: TReviewQueryParams) => {
  return useSuspenseInfiniteQuery(reviewListQueryOption(searchParams));
};

export const prefetchReviewList = (
  queryClient: QueryClient,
  searchParams?: TReviewQueryParams,
) => {
  return queryClient.prefetchInfiniteQuery(reviewListQueryOption(searchParams));
};
