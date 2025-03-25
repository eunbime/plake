"use client";

import clsx from "clsx";

import MyCardItem from "@/app/mypage/_components/MyCardItem";
import { useSuspenseMyGatheringList } from "@/hooks/gathering/useMyGatheringList";
import { DirectionType } from "@/types/gathering";
import { getButtonProps, getStatusProps } from "@/utils/myCardHelpers";

import EmptyState from "./EmptyState";

const MyCardList = ({
  direction,
  token,
}: {
  direction: DirectionType;
  token: string;
}) => {
  const reviewedOnly = direction === "reviews";
  const { data } = useSuspenseMyGatheringList({ reviewedOnly, token });
  const list = data?.pages.flat() ?? [];

  if (!list.length) {
    return <EmptyState message="신청한 모임이 아직 없어요" />;
  }

  return (
    <div>
      {list.map((gathering, index) => (
        <div
          key={gathering.id}
          className={clsx(
            "py-6",
            index !== list.length - 1 &&
              "border-b-2 border-dashed border-gray-200",
          )}
        >
          <MyCardItem
            gathering={gathering}
            buttonProps={getButtonProps(gathering, direction)}
            statusProps={getStatusProps(gathering, direction)}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCardList;
