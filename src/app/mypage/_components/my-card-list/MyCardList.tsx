"use client";

import clsx from "clsx";

import EmptyState from "@/app/mypage/_components/EmptyState";
import MyCardAction from "@/app/mypage/_components/my-card-item/MyCardAction";
import MyCardContent from "@/app/mypage/_components/my-card-item/MyCardContent";
import MyCardImage from "@/app/mypage/_components/my-card-item/MyCardImage";
import MyCardItem from "@/app/mypage/_components/my-card-item/MyCardItem";
import MyCardLabels from "@/app/mypage/_components/my-card-item/MyCardLabels";
import MyCardTitle from "@/app/mypage/_components/my-card-item/MyCardTitle";
import { useSuspenseMyGatheringList } from "@/hooks/gathering/useMyGatheringList";
import { DirectionType } from "@/types/gathering";
import { getButtonProps, getStatusProps } from "@/utils/myCardHelpers";

const MyCardList = ({
  direction,
  token,
  emptyMessage,
}: {
  direction: DirectionType;
  token: string;
  emptyMessage: string;
}) => {
  const reviewedOnly = direction === "reviews";
  const { data } = useSuspenseMyGatheringList({ reviewedOnly, token });
  const list = data?.pages.flat() ?? [];

  if (!list.length) {
    return <EmptyState message={emptyMessage} />;
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
          <MyCardItem id={gathering.id}>
            <MyCardImage image={gathering.image} name={gathering.name} />
            <MyCardContent hasAction={true}>
              <div>
                <MyCardLabels statuses={getStatusProps(gathering)} />
                <MyCardTitle
                  hasLabel={true}
                  name={gathering.name}
                  location={gathering.location}
                  dateTime={gathering.dateTime}
                  participantCount={gathering.participantCount}
                  capacity={gathering.capacity}
                />
              </div>
              <MyCardAction btn={getButtonProps(gathering)} />
            </MyCardContent>
          </MyCardItem>
        </div>
      ))}
    </div>
  );
};

export default MyCardList;
