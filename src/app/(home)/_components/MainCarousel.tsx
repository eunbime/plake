"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselArrowButton from "@/components/ui/CarouselArrowButton";

import MainCarouselItem from "./MainCarouselItem";

interface IMainCarouselProps {
  type: "popular" | "deadline";
}

const MainCarousel = ({ type }: IMainCarouselProps) => {
  return (
    <div className="flex w-full flex-col gap-10">
      <p className="text-2xl font-bold text-gray-900">
        {type === "popular" ? "현재 인기 많은 모임" : "마감 임박한 모임"}
      </p>
      <div className="flex h-[350px]">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={2.5}
          spaceBetween={5}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          className="relative"
        >
          <CarouselArrowButton direction="prev" />
          <CarouselArrowButton direction="next" />
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <MainCarouselItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainCarousel;
