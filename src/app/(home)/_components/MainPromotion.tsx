import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

interface IMainPromotionProps {
  type: "offline" | "online";
}

const MainPromotion = ({ type }: IMainPromotionProps) => {
  return (
    <div
      className={clsx(
        "flex h-[450px] w-full",
        type === "offline" ? "flex-row" : "flex-row-reverse",
      )}
    >
      <div className="relative flex-1 overflow-hidden rounded-2xl bg-gray-200">
        <Image src="" alt="promotion" fill objectFit="cover" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-14 text-center text-4xl font-extrabold leading-[60px]">
        {type === "offline" ? (
          <p>
            {"많은 사람들과 모여"} <br /> {"시간을 보내고 싶으신가요?"}
          </p>
        ) : (
          <p>
            {"원하는 주제의 모임을"} <br /> {"집에서 편하게 즐겨보세요"}
          </p>
        )}
        <Link href="/gathering">
          <Button variant="purple" className="px-12 py-8 text-2xl font-bold">
            {type === "offline"
              ? "오프라인 모임 찾아보기"
              : "온라인 모임 찾아보기"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainPromotion;
