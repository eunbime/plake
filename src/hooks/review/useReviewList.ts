import {
  QueryClient,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { APIError } from "@/types/error";
import { IReview } from "@/types/review";

const getReviewList = async (): Promise<IReview[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data.data;
};

const reviewListQueryOption = () => ({
  queryKey: [QUERY_KEYS.REVIEW.list],
  queryFn: getReviewList,
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IReview[], pages: IReview[][]) => {
    return lastPage.length > 0 ? pages.length + 1 : undefined;
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
