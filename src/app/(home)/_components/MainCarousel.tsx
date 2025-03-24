"use client";

import "swiper/css";
import "swiper/css/navigation";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselArrowButton from "@/components/ui/CarouselArrowButton";
import { IGathering } from "@/types/gathering";

import MainCarouselItem from "./MainCarouselItem";

interface IMainCarouselProps {
  type: "popular" | "deadline";
  data: IGathering[];
}

const MainCarousel = ({ type, data }: IMainCarouselProps) => {
  return (
    <section className="flex w-full flex-col gap-5">
      <p className="text-2xl font-bold text-gray-900">
        {type === "popular" ? "현재 인기 많은 모임" : "마감 임박한 모임"}
      </p>
      <div className="flex">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={2}
          spaceBetween={2}
          breakpoints={{
            500: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="relative"
        >
          <CarouselArrowButton direction="prev" />
          <CarouselArrowButton direction="next" />
          {data.map(gathering => (
            <SwiperSlide
              key={gathering.id}
              className="!ml-[15px] !w-[150px] first:!ml-0 md:!w-[240px] lg:!w-[260px]"
            >
              <MainCarouselItem gathering={gathering} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainCarousel;
