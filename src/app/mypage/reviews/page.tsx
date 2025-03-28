import { Suspense } from "react";

import MyReviewCardList from "@/app/mypage/_components/my-card-list/MyReviewCardList";
import MyWrittenCardList from "@/app/mypage/_components/my-card-list/MyWrittenCardList";
import ReviewTab from "@/app/mypage/_components/ReviewTab";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import ReviewCardItemSkeleton from "@/components/skeletons/ReviewCardItemSkeleton";

interface PageProps {
  searchParams: {
    type?: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const isRoot = !searchParams.type;

  return (
    <>
      <Suspense>
        <ReviewTab />
      </Suspense>

      {isRoot ? (
        <FetchBoundary fallback={<LoadingDots />}>
          <MyReviewCardList />
        </FetchBoundary>
      ) : (
        <FetchBoundary fallback={<ReviewCardItemSkeleton />}>
          <Suspense>
            <MyWrittenCardList />
          </Suspense>
        </FetchBoundary>
      )}
    </>
  );
};

export default Page;
