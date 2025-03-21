import dayjs from "dayjs";
import Image from "next/image";

import DateTimeTag from "@/components/common/DateTimeTag";

const MainCarouselItem = () => {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative h-[150px] overflow-hidden rounded-lg bg-gray-200 md:h-[200px] lg:h-[250px]">
        <Image src="" alt="carousel-item" fill objectFit="cover" />
      </div>
      <p className="font-medium text-gray-900">{"title"}</p>
      <p className="text-sm text-gray-500">{"location"}</p>
      <DateTimeTag date={dayjs("2025-03-20")} />
    </article>
  );
};

export default MainCarouselItem;
