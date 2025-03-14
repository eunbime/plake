"use client";

import { useEffect, useState } from "react";

import CreateGatheringModal from "../modals/create-gathering-modal/CreateGatheringModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateGatheringModal />
    </>
  );
};

export default ModalProvider;
