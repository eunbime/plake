import { Button } from "../ui/button";

const FloatingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex min-h-[84px] items-center border-t-2 border-gray-200 bg-white py-5">
      <div className="base-wrap flex h-full w-full items-start justify-between gap-5">
        <div className="flex h-full flex-col gap-2">
          <p className="text-base font-semibold">
            {"더 건강한 나와 팀을 위한 프로그램 🏃‍️️"}
          </p>
          <p className="text-xs font-medium">
            {
              "국내 최고 웰니스 전문가와 프로그램을 통해 지친 몸과 마음을 회복해봐요"
            }
          </p>
        </div>
        <Button variant={"purple"}>참여하기</Button>
      </div>
    </div>
  );
};

export default FloatingBar;
