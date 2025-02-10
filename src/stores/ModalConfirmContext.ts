import { createContext } from "react";
import { ConfirmModalModel, initState } from "../hooks/useConfirmModal";

const ModalConfirmContext = createContext<{
  modalState: ConfirmModalModel;
  show: (value: Omit<ConfirmModalModel, "showModal">) => void;
  close: (data?: boolean) => Promise<void>;
}>({
  modalState: initState,
  show: () => {},
  close: async () => {},
});

export default ModalConfirmContext;
