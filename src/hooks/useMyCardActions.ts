import { useRouter } from "next/navigation";

import { ButtonProps, IMyGathering } from "@/types/gathering";

const useMyCardActions = () => {
  const router = useRouter();

  const getButtonProps = (gathering: IMyGathering): ButtonProps => {
    if (!gathering.isCompleted) {
      return {
        label: "예약 취소하기",
        variant: "purple-outline",
        onClick: () => {
          console.log("예약 취소 요청:", gathering.id);
        },
      };
    }

    return gathering.isReviewed
      ? {
          label: "내가 쓴 리뷰 보기",
          variant: "purple",
          onClick: () => router.push(`/mypage/review/${gathering.id}`),
        }
      : {
          label: "리뷰 작성하기",
          variant: "purple",
          onClick: () => router.push(`/mypage/review/${gathering.id}/new`),
        };
  };

  return { getButtonProps };
};

export default useMyCardActions;
