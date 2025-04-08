"use client";

import { useRouter } from "next/navigation";

import ConfirmModal from "@/components/modals/confirm-alert-modal/ConfirmModal";
import CreateReviewModal from "@/components/modals/create-review-modal/CreateReviewModal";
import { Button } from "@/components/ui/Button";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { MY_CARD_ACTION_TEXT } from "@/constants/ui";
import { useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";
import { useModal } from "@/hooks/useModal";
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
  const { isOpen, onClose, onOpen } = useModal();

  if (type === "cancel") {
    return (
      <>
        <Button
          variant="purple-outline"
          className="h-10 w-fit"
          onClick={e => {
            e.preventDefault();
            onOpen();
          }}
        >
          {MY_CARD_ACTION_TEXT.CANCEL}
        </Button>
        <ConfirmModal
          title="참여를 취소하시겠습니까?"
          onConfirm={() => {
            leave();
          }}
          isOpen={isOpen}
          onClose={onClose}
        />
      </>
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
      <>
        <Button
          variant="purple"
          className="h-10 w-fit"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            onOpen();
          }}
        >
          {MY_CARD_ACTION_TEXT.WRITE_REVIEW}
        </Button>
        <CreateReviewModal
          isOpen={isOpen}
          onClose={onClose}
          type="createReview"
          reviewTargetId={id}
        />
      </>
    );
  }

  return null;
};

export default MyCardAction;
