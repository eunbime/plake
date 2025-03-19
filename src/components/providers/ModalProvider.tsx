"use client";

import ConfirmAlertModal from "@/components/modals/confirm-alert-modal/ConfirmAlertModal";
import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";
import CreateReviewModal from "@/components/modals/create-review-modal/CreateReviewModal";

const ModalProvider = () => {
  return (
    <>
      <CreateGatheringModal />
      <ConfirmAlertModal />
      <CreateReviewModal />
    </>
  );
};

export default ModalProvider;
