import {
  infiniteQueryOptions,
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonReviewService from "@/services/review/AnonReviewService";
import { IReviewResponse } from "@/types/review";

const reviewListQueryOption = () =>
  infiniteQueryOptions({
    queryKey: [QUERY_KEYS.REVIEW.list],
    queryFn: anonReviewService.getReviewList,
    initialPageParam: 1,
    throwOnError: true,
    retry: false,
    getNextPageParam: (lastPage: IReviewResponse) => {
      return lastPage.data.length === 0 ? undefined : lastPage.data.length + 1;
    },
  });

export const useReviewList = () => {
  return useInfiniteQuery(reviewListQueryOption());
};

export const useSuspenseReviewList = () => {
  return useSuspenseInfiniteQuery(reviewListQueryOption());
};

export const prefetchReviewList = (queryClient: QueryClient) => {
  return queryClient.prefetchInfiniteQuery(reviewListQueryOption());
};
