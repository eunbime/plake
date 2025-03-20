import MainPromotion from "./MainPromotion";

const MainPromotionContainer = () => {
  return (
    <div className="flex flex-col gap-20">
      <MainPromotion type="offline" />
      <MainPromotion type="online" />
    </div>
  );
};

export default MainPromotionContainer;
