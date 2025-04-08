"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { MY_CARD_ACTION_TEXT } from "@/constants/ui";
import { useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";
import useModalStore from "@/stores/useModalStore";
import { MyCardActionType } from "@/types/gathering";

interface MyCardActionProps {
  type: MyCardActionType;
  id: number;
}

const MyCardAction = ({ type, id }: MyCardActionProps) => {
  const router = useRouter();
  const { mutate: leave } = useLeaveGatheringMutation(String(id), [
    QUERY_KEYS.GATHERING.myList,
  ]);
  const openConfirm = useModalStore(state => state.openConfirm);
  const openCreateReview = useModalStore(state => state.openCreateReview);

  if (type === "cancel") {
    return (
      <Button
        variant="purple-outline"
        className="h-10 w-fit"
        onClick={e => {
          e.preventDefault();
          openConfirm("참여를 취소하시겠습니까?", () => {
            leave();
          });
        }}
      >
        {MY_CARD_ACTION_TEXT.CANCEL}
      </Button>
    );
  }

  if (type === "viewReview") {
    return (
      <Button
        variant="purple"
        className="h-10 w-fit"
        onClick={e => {
          e.preventDefault();
          router.push("/mypage/reviews?type=written");
        }}
      >
        {MY_CARD_ACTION_TEXT.VIEW_REVIEW}
      </Button>
    );
  }

  if (type === "writeReview") {
    return (
      <Button
        variant="purple"
        className="h-10 w-fit"
        onClick={e => {
          e.preventDefault();
          openCreateReview(id);
        }}
      >
        {MY_CARD_ACTION_TEXT.WRITE_REVIEW}
      </Button>
    );
  }

  return null;
};

export default MyCardAction;
