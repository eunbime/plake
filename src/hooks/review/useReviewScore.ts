import { QueryClient, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { reviewService } from "@/services/review/ReviewService";

const reviewScoreQueryOption = () => ({
  queryKey: [QUERY_KEYS.REVIEW.score],
  queryFn: () => reviewService.getReviewScore(),
  throwOnError: true,
  retry: false,
});

export const useReviewScore = () => {
  return useQuery(reviewScoreQueryOption());
};

export const useSuspenseReviewScore = () => {
  return useSuspenseQuery(reviewScoreQueryOption());
};

export const prefetchReviewScore = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(reviewScoreQueryOption());
};
