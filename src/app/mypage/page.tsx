import MyCardList from "@/app/mypage/_components/my-card-list/MyCardList";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import { getCookieOfToken } from "@/utils/cookieToken";

const Page = async () => {
  // 삭제될 코드 |  route handler 도입 예정
  const token = await getCookieOfToken();
  if (!token) return null;

  return (
    // TODO: MyCardSkeleton Component 제작 및 적용
    <FetchBoundary fallback={<LoadingDots />}>
      <MyCardList
        direction="mypage"
        token={token}
        emptyMessage="신청한 모임이 아직 없어요"
      />
    </FetchBoundary>
  );
};

export default Page;
