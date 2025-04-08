import { MdWavingHand } from "react-icons/md";

const ClosedMainCardItem = () => {
  return (
    <>
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/80 text-sm text-white">
        <span>{"마감된 챌린지에요,"}</span>
        <span>{"다음 기회에 만나요 🙏"}</span>
      </div>
      <div className="absolute right-0 z-20 mr-6 mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <MdWavingHand className="scale-x-[-1] text-purple-600" />
      </div>
    </>
  );
};

export default ClosedMainCardItem;
