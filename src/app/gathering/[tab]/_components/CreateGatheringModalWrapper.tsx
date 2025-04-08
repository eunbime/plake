"use client";

import { useRouter } from "next/navigation";

import ConfirmModal from "@/components/modals/confirm-alert-modal/ConfirmModal";
import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/hooks/useModal";
import useUserStore from "@/stores/useUserStore";

const CreateGatheringModalWrapper = () => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useModal();

  const user = useUserStore(state => state.user);

  return (
    <>
      <Button
        variant="purple"
        className="h-10 w-[94px] md:h-11 md:w-28"
        onClick={onOpen}
      >
        모임 만들기
      </Button>
      {user ? (
        <CreateGatheringModal isOpen={isOpen} onClose={onClose} />
      ) : (
        <ConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          title={`로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?`}
          onConfirm={() => router.replace("/login")}
        />
      )}
    </>
  );
};

export default CreateGatheringModalWrapper;
