import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { IMyGathering } from "@/types/gathering";

interface MyCardItemProps {
  gathering: IMyGathering;
  direction?: "mypage" | "reviews" | "gathering";
  buttonProps: {
    label: string;
    variant: "purple" | "purple-outline";
    onClick: () => void;
  };
}

const MyCardItem = ({
  gathering,
  direction = "reviews",
  buttonProps,
}: MyCardItemProps) => {
  return (
    <Link
      href={"/mypage"}
      className="flex w-full flex-col gap-4 border sm:flex-row"
    >
      <div className="relative h-[156px] w-full min-w-[280px] sm:w-[280px]">
        <Image
          src={gathering.image}
          alt={gathering.name}
          className="h-full w-full rounded-3xl object-cover"
          fill
          sizes="(max-width: 640px) 100%"
        />
      </div>

      <div
        className={clsx(
          "flex min-w-0 flex-col justify-between sm:h-auto sm:flex-1",
          direction === "mypage" && "h-[172px]",
          direction === "reviews" && "h-[144px]",
        )}
      >
        <div>
          {/* 여기에 "나의 모임(/myage)" 페이지의 태그를 작성합니다 */}

          <div
            className={clsx(
              "mb-1.5 flex flex-wrap truncate",
              direction === "mypage" ? "items-center" : "flex-col gap-2",
            )}
          >
            <p
              className={clsx(
                "truncate text-lg font-semibold text-gray-900",
                direction === "mypage" && "after:px-2 after:content-['|']",
              )}
            >
              {gathering.name}
            </p>
            <p className="text-sm text-gray-700">{gathering.location}</p>
          </div>
          <div className="flex gap-3 text-sm font-medium text-gray-700">
            <p>{dayjs(gathering.dateTime).format("M월 DD일 · HH:mm")}</p>
            <div className="flex items-center">
              <FaUser size={12} />
              <p>
                {gathering.participantCount}/{gathering.capacity}
              </p>
            </div>
          </div>
        </div>

        {direction !== "gathering" && (
          <Button
            variant={buttonProps.variant}
            className="h-10 w-[120px]"
            onClick={buttonProps.onClick}
          >
            {buttonProps.label}
          </Button>
        )}
      </div>
    </Link>
  );
};

export default MyCardItem;
