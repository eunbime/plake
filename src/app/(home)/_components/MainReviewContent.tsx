import MainReviewItem from "./MainReviewItem";

const MainReviewContent = () => {
  return (
    <div className="flex flex-col justify-center gap-12">
      <p className="flex items-center justify-center gap-2 text-3xl font-bold">
        <span className="pr-2 text-[40px] font-black text-purple-600">
          {"PLAKE"}
        </span>
        {"회원들의 생생한 후기"}
      </p>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <MainReviewItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainReviewContent;
