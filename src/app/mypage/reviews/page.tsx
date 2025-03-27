import { Suspense } from "react";

import MyReviewCardList from "@/app/mypage/_components/my-card-list/MyReviewCardList";
import ReviewTab from "@/app/mypage/_components/ReviewTab";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";

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
        <div className="p-4 text-lg font-semibold">작성 예정</div>
      )}
    </>
  );
};

export default Page;
