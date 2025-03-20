import MainCarouselItem from "./MainCarouselItem";

interface IMainCarouselProps {
  type: "popular" | "deadline";
}

const MainCarousel = ({ type }: IMainCarouselProps) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl font-bold text-gray-900">
        {type === "popular" ? "현재 인기 많은 모임" : "마감 임박한 모임"}
      </p>
      <div className="flex h-[350px] gap-5">
        <MainCarouselItem />
        <MainCarouselItem />
        <MainCarouselItem />
        <MainCarouselItem />
      </div>
    </div>
  );
};

export default MainCarousel;
