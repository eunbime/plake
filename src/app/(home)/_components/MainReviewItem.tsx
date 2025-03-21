import Rating from "@/components/common/Rating";
import { IMainReview } from "@/constants/review";

interface IMainReviewItemProps {
  review: IMainReview;
}

const MainReviewItem = ({ review }: IMainReviewItemProps) => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-5 rounded-lg bg-white">
      <p className="whitespace-pre-wrap text-center text-2xl text-gray-900">
        {review.content}
      </p>
      <Rating rating={review.rating} />
    </div>
  );
};

export default MainReviewItem;
