import { Suspense } from "react";

import MyCardList from "@/app/mypage/_components/MyCardList";
import ReviewTab from "@/app/mypage/_components/ReviewTab";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import { getCookieOfToken } from "@/utils/cookieToken";

interface PageProps {
  searchParams: {
    type?: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const token = await getCookieOfToken();

  if (!token) return null;

  const isRoot = !searchParams.type;

  return (
    <>
      <Suspense>
        <ReviewTab />
      </Suspense>

      {isRoot ? (
        <FetchBoundary fallback={<LoadingDots />}>
          <MyCardList
            direction="reviews"
            token={token}
            emptyMessage="아직 작성 가능한 리뷰가 없어요"
          />
        </FetchBoundary>
      ) : (
        <div className="p-4 text-lg font-semibold">작성 예정</div>
      )}
    </>
  );
};

export default Page;
