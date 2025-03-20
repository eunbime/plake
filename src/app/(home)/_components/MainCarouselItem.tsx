import dayjs from "dayjs";
import Image from "next/image";

import DateTimeTag from "@/components/common/DateTimeTag";

const MainCarouselItem = () => {
  return (
    <div className="flex w-[250px] flex-col gap-2">
      <div className="relative h-[250px] overflow-hidden rounded-lg bg-gray-200">
        <Image src="" alt="carousel-item" fill objectFit="cover" />
      </div>
      <p className="font-medium text-gray-900">{"title"}</p>
      <p className="text-sm text-gray-500">{"location"}</p>
      <DateTimeTag date={dayjs("2025-03-20")} />
    </div>
  );
};

export default MainCarouselItem;
