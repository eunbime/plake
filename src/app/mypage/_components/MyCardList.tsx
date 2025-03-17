"use client";

import { GatheringType, IMyGathering } from "@/types/gathering";

import MyCardItem from "./MyCardItem";

interface ButtonProps {
  label: string;
  variant: "purple" | "purple-outline";
  onClick: () => void;
}

const mockMyGatherings: IMyGathering[] = [
  {
    teamId: 3,
    id: 103,
    name: "주말 조깅 모임",
    type: GatheringType.DALLAEMFIT,
    dateTime: "2025-04-20T08:00:00Z",
    registrationEnd: "2025-04-18T23:59:59Z",
    location: "서울숲 공원",
    participantCount: 20,
    capacity: 25,
    image: "/images/profile-background.png",
    createdBy: 2,
    canceledAt: null,
    joinedAt: "2025-04-01T07:30:00Z",
    isCompleted: true,
    isReviewed: false,
  },
  {
    teamId: 4,
    id: 104,
    name: "워케이션 in 제주",
    type: GatheringType.WORKATION,
    dateTime: "2025-05-01T10:00:00Z",
    registrationEnd: "2025-04-28T23:59:59Z",
    location: "제주 애월 카페",
    participantCount: 5,
    capacity: 10,
    image: "/images/profile-background.png",
    createdBy: 5,
    canceledAt: null,
    joinedAt: "2025-04-05T09:00:00Z",
    isCompleted: false,
    isReviewed: false,
  },
];

const MyCardList = () => {
  const getButtonProps = (gathering: IMyGathering): ButtonProps => {
    if (!gathering.isCompleted) {
      return {
        label: "예약 취소하기",
        variant: "purple-outline",
        onClick: () => console.log(`예약 취소 요청: ${gathering.id}`),
      };
    } else {
      if (gathering.isReviewed) {
        return {
          label: "내가 쓴 리뷰 보기",
          variant: "purple",
          onClick: () => console.log(`내가 쓴 리뷰 보기: ${gathering.id}`),
        };
      } else {
        return {
          label: "리뷰 작성하기",
          variant: "purple",
          onClick: () => console.log(`리뷰 작성하기: ${gathering.id}`),
        };
      }
    }
  };

  return (
    <div>
      {mockMyGatherings.map(gathering => (
        <MyCardItem
          key={gathering.id}
          gathering={gathering}
          direction="mypage"
          buttonProps={getButtonProps(gathering)}
        />
      ))}
    </div>
  );
};

export default MyCardList;
