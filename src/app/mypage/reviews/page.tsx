import { Suspense } from "react";

import MyReviewCardList from "@/app/mypage/_components/my-card-list/MyReviewCardList";
import ReviewTab from "@/app/mypage/_components/ReviewTab";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import { EMPTY_MESSAGE } from "@/constants/emptyMessage";

// 삭제될 예정
import EmptyState from "../_components/EmptyState";

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
        // TODO: 작성한 리뷰 목록 가져오기
        <EmptyState message={EMPTY_MESSAGE.mypage.written} />
      )}
    </>
  );
};

export default Page;
