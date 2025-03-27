"use client";

import { useParams, useSearchParams } from "next/navigation";

import ReviewCardList from "@/components/layout/ReviewCardList";
import { SERVICE_LIST } from "@/constants/gathering";
import { useSuspenseReviewList } from "@/hooks/review/useReviewList";
import { TReviewQueryParams } from "@/types/review";

const ReviewListParent = () => {
  const tabParam = useParams();
  // URL 쿼리 파라미터 (예: ?type=MINDFULNESS&sort=latest)
  const searchParams = useSearchParams();

  // 모든 쿼리 파라미터를 객체로 변환
  const getAllQueryParams = () => {
    const queryParams: Record<string, string> = {};

    // searchParams를 순회하면서 객체로 변환
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    return queryParams;
  };

  // 모든 쿼리 파라미터를 배열로 변환
  const queryParamsArray = Array.from(searchParams.entries());

  console.log("Path Params:", tabParam); // { tab: 'offline' }
  console.log("Query Params Object:", getAllQueryParams()); // { type: 'MINDFULNESS', ... }
  console.log("Query Params Array:", queryParamsArray); // [['type', 'MINDFULNESS'], ...]

  // 개별 파라미터에 직접 접근
  const type =
    tabParam.tab === SERVICE_LIST.ONLINE.value
      ? SERVICE_LIST.ONLINE.type
      : searchParams.get("type"); // 'MINDFULNESS' 또는 null
  const sort = searchParams.get("sort"); // 값이 있으면 해당 값, 없으면 null

  console.log("Type param:", type);
  console.log("Sort param:", sort);

  // API 요청에 필요한 파라미터 구성
  const reviewQueryParams: TReviewQueryParams = {
    ...(type && { type }),
    ...(sort && { sort }),
  };

  const { data } = useSuspenseReviewList(reviewQueryParams);

  const flatData = data?.pages.flatMap(page => page.data);

  // console.log("data", data);
  // console.log("flatData", flatData);
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
