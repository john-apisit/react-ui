import { useState } from "react";

export type ConfirmModalModel = {
  title: string;
  message: string;
  showModal: boolean;
  size: string;
  onYes: () => Promise<void>;
};

export const initState: ConfirmModalModel = {
  title: "",
  message: "",
  showModal: false,
  size: "sm",
  onYes: async () => {},
};

const useConfirmModal = () => {
  const [modalState, setModalState] = useState<{
    title: string;
    message: string;
    showModal: boolean;
    size: string;
    onYes: () => Promise<void>;
  }>(initState);

  const show = (value: Omit<ConfirmModalModel, "showModal">) => {
    setModalState({ ...value, showModal: true });
  };

  const close = async (data?: boolean) => {
    if (data) {
      await modalState.onYes();
    }
    setModalState({ ...initState });
  };

  return {
    modalState,
    show,
    close,
  };
};

export default useConfirmModal;
