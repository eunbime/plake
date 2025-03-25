import MyCardList from "@/app/mypage/_components/MyCardList";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";
import { getCookieOfToken } from "@/utils/cookieToken";

const Page = async () => {
  const token = await getCookieOfToken();

  // TODO: 로그인 alert 띄우기
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
