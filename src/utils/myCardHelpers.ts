import { DirectionType, IMyGathering } from "@/types/gathering";

export const getStatusProps = (
  gathering: IMyGathering,
  direction: DirectionType,
) => {
  if (direction !== "mypage") return null;

  if (gathering.isCompleted) {
    return [{ label: "이용 완료", className: "bg-gray-100 text-gray-500" }];
  }

  if (gathering.participantCount >= 5) {
    return [
      { label: "이용 예정", className: "bg-purple-100 text-purple-600" },
      {
        label: "개설 확정",
        className: "border border-purple-200 text-purple-500",
      },
    ];
  }

  return [
    { label: "이용 예정", className: "bg-purple-100 text-purple-600" },
    {
      label: "개설 대기",
      className: "border border-gray-200 text-gray-500",
    },
  ];
};

export const getButtonProps = (
  gathering: IMyGathering,
  direction: DirectionType,
) => {
  if (direction === "gathering") return null;

  if (!gathering.isCompleted) {
    return {
      label: "예약 취소하기",
      variant: "purple-outline" as const,
      onClick: () => console.log(`예약 취소 요청: ${gathering.id}`),
    };
  }

  return gathering.isReviewed
    ? {
        label: "내가 쓴 리뷰 보기",
        variant: "purple" as const,
        onClick: () => console.log(`내가 쓴 리뷰 보기: ${gathering.id}`),
      }
    : {
        label: "리뷰 작성하기",
        variant: "purple" as const,
        onClick: () => console.log(`리뷰 작성하기: ${gathering.id}`),
      };
};
