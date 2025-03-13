import dayjs from "dayjs";
import Image from "next/image";

import Avatar from "@/components/common/Avatar";
import Rating from "@/components/common/Rating";
import { IReview } from "@/types/review";

type TReviewCardItemProps = {
  review: IReview;
};

// 내 리뷰 확인용 - 추후 삭제
const tempUserId = "asdfdfer334";

const ReviewCardItem = ({ review }: TReviewCardItemProps) => {
  const { comment, createdAt, score, User, Gathering } = review;
  return (
    <article className="flex flex-col gap-6 md:flex-row">
      <div className="relative min-h-[156px] w-full max-w-[280px] overflow-hidden rounded-3xl">
        <Image
          src={Gathering.image ?? "https://picsum.photos/500/700"}
          alt={Gathering.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex min-h-[156px] flex-1 flex-col gap-[10px]">
        <Rating rating={score} />
        <p className="min-h-[56px] text-sm font-medium text-gray-700">
          {comment}
        </p>
        <div className="text-xs font-medium text-gray-700">
          <span className="mr-2">{Gathering.name}</span>
          <span>{Gathering.location}</span>
        </div>
        <div className="flex items-center gap-2">
          {User.id === tempUserId || (
            <Avatar type="default" size="small" imgPath={User.image ?? ""} />
          )}

          <p className="flex text-xs font-medium">
            {User.id === tempUserId || (
              <span className="text-gray-700 after:mx-[6px] after:text-gray-500 after:content-['|']">
                {User.name}
              </span>
            )}

            <time className="text-gray-500">
              {dayjs(createdAt).format("YYYY.MM.DD")}
            </time>
          </p>
        </div>
        <hr className="border-b-2 border-dashed border-gray-200" />
      </div>
    </article>
  );
};

export default ReviewCardItem;
