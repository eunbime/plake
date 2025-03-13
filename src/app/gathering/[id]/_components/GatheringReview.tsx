import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import GatheringReviewList from "@/components/gathering-detail/GatheringReviewList";
import { prefetchReviewList } from "@/hooks/review/useReviewList";

const GatheringReview = async () => {
  const queryClient = new QueryClient();

  await prefetchReviewList(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GatheringReviewList />
    </HydrationBoundary>
  );
};

export default GatheringReview;
