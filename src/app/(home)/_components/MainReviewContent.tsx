import Image from "next/image";

import { reviewList } from "@/constants/review";

import MainReviewItem from "./MainReviewItem";

const MainReviewContent = () => {
  return (
    <div className="flex flex-col justify-center gap-12">
      <div className="flex items-center justify-center gap-5">
        <Image src="/images/logo.png" alt="logo" width={130} height={60} />
        <p className="gap-2 text-center text-3xl font-bold">
          {"회원들의 생생한 후기"}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {reviewList.map(review => (
          <MainReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MainReviewContent;
