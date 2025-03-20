import Rating from "@/components/common/Rating";

const MainReviewItem = () => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-5 rounded-lg bg-white">
      <p className="text-2xl text-gray-900">{"context"}</p>
      <Rating rating={4} />
    </div>
  );
};

export default MainReviewItem;
