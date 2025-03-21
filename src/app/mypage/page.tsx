import EmptyState from "./_components/EmptyState";
import MyCardList from "./_components/MyCardList";

const Page = () => {
  return (
    <>
      <MyCardList direction="mypage" />
      <EmptyState message="신청한 모임이 아직 없어요" />
    </>
  );
};

export default Page;
