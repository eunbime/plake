import MyCreateCardList from "@/app/mypage/_components/my-card-list/MyCreateCardList";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";

const Page = () => {
  return (
    <FetchBoundary fallback={<LoadingDots />}>
      <MyCreateCardList />
    </FetchBoundary>
  );
};

export default Page;
