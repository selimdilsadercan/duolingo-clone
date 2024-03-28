"use client";

import ExitModal from "@/components/modals/exit-modal";
import HeartsModal from "@/components/modals/hearts-modal";
import PracticeModal from "@/components/modals/practice-modal";

////

function ModalProvider() {
  return (
    <>
      <ExitModal />
      <HeartsModal />
      <PracticeModal />
    </>
  );
}

export default ModalProvider;
