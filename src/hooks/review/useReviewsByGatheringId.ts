import { QueryClient, useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { reviewService } from "@/services/review/ReviewService";
import { IReviewResponse } from "@/types/review";

const reviewsByGatheringIdQueryOption = (gatheringId: string) => ({
  queryKey: [QUERY_KEYS.REVIEW.listByGatheringId(gatheringId)],
  queryFn: () => reviewService.getReviewsByGatheringId(gatheringId),
  initialPageParam: 1,
  throwOnError: true,
  retry: false,
  getNextPageParam: (lastPage: IReviewResponse) => {
    return lastPage.currentPage < lastPage.totalPages
      ? lastPage.currentPage + 1
      : undefined;
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
