import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { reviewService } from "@/services/review/ReviewService";

const reviewScoreQueryOption = () => ({
  queryKey: [QUERY_KEYS.REVIEW.score],
  queryFn: () => reviewService.getReviewScore(),
});

export const useSuspenseReviewScore = () => {
  return useSuspenseQuery(reviewScoreQueryOption());
};

export const prefetchReviewScore = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(reviewScoreQueryOption());
};
