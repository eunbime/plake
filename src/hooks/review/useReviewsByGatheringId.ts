import { QueryClient, useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { ReviewResponse, reviewService } from "@/services/review/ReviewService";

const reviewsByGatheringIdQueryOption = (gatheringId: string) => ({
  queryKey: [QUERY_KEYS.REVIEW.listByGatheringId(gatheringId)],
  queryFn: () => reviewService.getReviewsByGatheringId(gatheringId),
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: ReviewResponse) => {
    return lastPage.data.length === 0 ? undefined : lastPage.data.length + 1;
  },
});

export const useSuspenseReviewsByGatheringId = (gatheringId: string) => {
  return useSuspenseInfiniteQuery(reviewsByGatheringIdQueryOption(gatheringId));
};

export const prefetchReviewsByGatheringId = (
  gatheringId: string,
  queryClient: QueryClient,
) => {
  return queryClient.prefetchInfiniteQuery(
    reviewsByGatheringIdQueryOption(gatheringId),
  );
};
