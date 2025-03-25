import Image from "next/image";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import Rating from "@/components/common/Rating";
import { TempParentComponent } from "@/components/layout/ReviewCardList";
import FilterTab from "@/components/navigations/FilterTab";

const Page = async () => {
  return (
    <div className="base-wrap bg-gray-50 py-10 xl:px-28">
      <section className="mb-8 flex items-center gap-2">
        <Image
          src="/images/review_head.png"
          alt="review-head"
          width={72}
          height={72}
        />
        <div>
          <h1 className="mb-2 text-lg font-semibold text-gray-900 md:text-2xl">
            모든 리뷰
          </h1>
          <p className="text-sm font-medium text-gray-700">
            플레이크를 이용한 분들은 이렇게 느꼈어요.
          </p>
        </div>
      </section>
      <FilterTab />
      <hr className="border-1 mb-7 border-gray-200" />
      <section className="mb-6 flex items-center justify-between border-b-2 border-t-2 border-gray-200 bg-white px-6 py-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <h1 className="text-xl font-semibold text-gray-400 md:text-2xl">
            <span className="text-gray-900">4.0</span> /5
          </h1>
          <Rating rating={4} />
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map(n => (
            <div key={n} className="flex items-center gap-2">
              <span className="text-sm text-gray-700">{n}점</span>
              <div className="mx-3 h-1 min-w-60 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gray-900"
                  style={{ width: `${(n / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">50</span>
            </div>
          ))}
        </div>
      </section>
      <GatheringFilterSort />
      <TempParentComponent />
    </div>
  );
};

export default Page;
