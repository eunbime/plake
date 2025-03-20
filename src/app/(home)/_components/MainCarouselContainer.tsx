import MainCarousel from "./MainCarousel";

const MainCarouselContainer = () => {
  return (
    <div className="flex flex-col gap-20">
      <MainCarousel type="popular" />
      <MainCarousel type="deadline" />
    </div>
  );
};

export default MainCarouselContainer;
