"use client";

import EmptyState from "@/app/mypage/_components/EmptyState";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ReviewCardList from "@/components/layout/ReviewCardList";
import { EMPTY_MESSAGE } from "@/constants/emptyMessage";
import { useSuspenseReviewList } from "@/hooks/review/useReviewList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useUserStore from "@/stores/useUserStore";
import { TReviewQueryParams } from "@/types/review";

const MyWrittenCardList = () => {
  const user = useUserStore(state => state.user);

  const reviewQueryParams: TReviewQueryParams = {
    userId: user?.id.toString(),
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseReviewList(reviewQueryParams);

  const list = data?.pages.flatMap(page => page.data);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  if (!list.length) {
    return <EmptyState message={EMPTY_MESSAGE.mypage.written} />;
  }

  return (
    <div className="my-6">
      <ReviewCardList reviews={list} />
      <div ref={setTarget} className="h-10 w-full">
        {isFetchingNextPage && (
          <div className="flex justify-center p-4">
            <LoadingSpinner size="lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWrittenCardList;
