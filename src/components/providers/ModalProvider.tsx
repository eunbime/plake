"use client";

import ConfirmAlertModal from "@/components/modals/confirm-alert-modal/ConfirmAlertModal";
import CreateGatheringModal from "@/components/modals/create-gathering-modal/CreateGatheringModal";

const ModalProvider = () => {
  return (
    <>
      <CreateGatheringModal />
      <ConfirmAlertModal />
    </>
  );
};

export default ModalProvider;
