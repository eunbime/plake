"use client";

import ReviewCardList from "@/components/layout/ReviewCardList";
import { useSuspenseReviewList } from "@/hooks/review/useReviewList";

const ReviewListParent = () => {
  const { data } = useSuspenseReviewList();

  return <ReviewCardList reviews={data?.pages.flatMap(page => page.data)} />;
};

export default ReviewListParent;
