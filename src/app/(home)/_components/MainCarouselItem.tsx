import dayjs from "dayjs";
import Image from "next/image";

import DateTimeTag from "@/components/common/DateTimeTag";
import { IGathering } from "@/types/gathering";

interface IMainCarouselItemProps {
  gathering: IGathering;
}

const MainCarouselItem = ({ gathering }: IMainCarouselItemProps) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative h-[150px] overflow-hidden rounded-lg bg-gray-200 md:h-[200px] lg:h-[250px]">
        <Image
          src={gathering.image}
          alt="carousel-item"
          fill
          objectFit="cover"
        />
      </div>
      <p className="line-clamp-1 font-medium text-gray-900">{gathering.name}</p>
      <p className="text-sm text-gray-500">{gathering.location}</p>
      <DateTimeTag date={dayjs(gathering.dateTime)} />
    </article>
  );
};

export default MainCarouselItem;
