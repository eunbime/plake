import MainCarousel from "./MainCarousel";

const MainCarouselContainer = () => {
  return (
    <section className="flex flex-col gap-20">
      <MainCarousel type="popular" />
      <MainCarousel type="deadline" />
    </section>
  );
};

export default MainCarouselContainer;
