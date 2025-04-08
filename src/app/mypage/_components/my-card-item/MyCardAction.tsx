"use client";

import { useRouter } from "next/navigation";

import ConfirmModal from "@/components/modals/confirm-alert-modal/ConfirmModal";
import CreateReviewModal from "@/components/modals/create-review-modal/CreateReviewModal";
import { Button } from "@/components/ui/Button";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";
import { useModal } from "@/hooks/useModal";

type MyCardActionType = "cancel" | "viewReview" | "writeReview";

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
          예약 취소하기
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
        내가 쓴 리뷰 보기
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="purple"
        className="h-10 w-fit"
        onClick={e => {
          e.preventDefault();
          onOpen();
        }}
      >
        리뷰 작성하기
      </Button>
      <CreateReviewModal
        isOpen={isOpen}
        onClose={onClose}
        type="createReview"
      />
    </>
  );
};

export default MyCardAction;
