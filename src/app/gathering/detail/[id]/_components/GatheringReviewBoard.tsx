import FetchBoundary from "@/components/boundary/FetchBoundary";
import GatheringReviewSkeleton from "@/components/skeletons/gathering-detail/GatheringReviewSkeleton";

import GatheringReviewList from "./GatheringReviewList";

const GatheringReviewBoard = async () => {
  return (
    <FetchBoundary fallback={<GatheringReviewSkeleton />}>
      <GatheringReviewList />
    </FetchBoundary>
  );
};

export default GatheringReviewBoard;
