"use client";

// import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";

type MyCardActionType = "cancel" | "viewReview" | "writeReview";

interface MyCardActionProps {
  type: MyCardActionType;
  id: number;
}

const MyCardAction = ({ type, id }: MyCardActionProps) => {
  // const router = useRouter();
  const { mutate: leave } = useLeaveGatheringMutation(String(id), [
    QUERY_KEYS.GATHERING.myList,
  ]);

  if (type === "cancel") {
    return (
      <Button
        variant="purple-outline"
        className="h-10 w-[120px]"
        onClick={e => {
          e.preventDefault();
          leave();
        }}
      >
        예약 취소하기
      </Button>
    );
  }

  if (type === "viewReview") {
    return (
      <Button variant="purple" className="h-10 w-[120px]" onClick={() => {}}>
        내가 쓴 리뷰 보기
      </Button>
    );
  }

  return (
    <Button
      variant="purple"
      className="h-10 w-[120px]"
      onClick={e => {
        e.preventDefault();
        console.log("test");
      }}
    >
      리뷰 작성하기
    </Button>
  );
};

export default MyCardAction;
