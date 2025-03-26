"use client";

import ReviewCardList from "@/components/layout/ReviewCardList";
import { useSuspenseReviewList } from "@/hooks/review/useReviewList";

const ReviewListParent = () => {
  const { data } = useSuspenseReviewList();

  const flatData = data?.pages.flatMap(page => page.data);

  return (
    <>
      {flatData.length > 0 ? (
        <ReviewCardList reviews={flatData} />
      ) : (
        <div className="flex min-h-40 w-full items-center justify-center">
          <p className="text-sm font-medium text-gray-500">
            아직 리뷰가 없어요
          </p>
        </div>
      )}
    </>
  );
};

export default ReviewListParent;
