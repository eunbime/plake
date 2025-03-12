import Rating from "../common/Rating";

const GatheringReviewItem = () => {
  return (
    <article className="flex flex-col gap-4">
      <Rating rating={4.5} />
      <p className="text-sm font-medium">
        {
          "따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요."
        }
      </p>
      <div className="flex gap-2">
        <div>avatar</div>
        <p className="flex gap-3">
          <span>닉네임</span>
          <span className="h-5 border-l border-gray-200" />
          <time>날짜</time>
        </p>
      </div>
      <hr className="border-b-2 border-dashed border-gray-200" />
    </article>
  );
};

export default GatheringReviewItem;
