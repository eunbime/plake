import GatheringReviewItem from "@/components/gathering-detail/GatheringReviewItem";

const GatheringReviewList = () => {
  return (
    <section className="flex h-full min-h-[80vh] flex-col gap-6 border-t-2 border-gray-200 bg-white p-6 pb-20">
      <p className="text-lg font-semibold">
        {"이용자들은 이 프로그램을 이렇게 느꼈어요!"}
      </p>
      <GatheringReviewItem />
      <GatheringReviewItem />
      <GatheringReviewItem />
      <GatheringReviewItem />
      <GatheringReviewItem />
      <GatheringReviewItem />
      <GatheringReviewItem />
    </section>
  );
};

export default GatheringReviewList;
