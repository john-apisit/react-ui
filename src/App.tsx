import "./index.css";
import ModalConfirm from "./components/modal/ModalConfirm";
import ModalConfirmContext from "./stores/ModalConfirmContext";
import useConfirmModal from "./hooks/useConfirmModal";
import Home from "./Home";
import { ToastContainer } from "react-toastify";

function App() {
  const confirmModal = useConfirmModal();

  return (
    <ModalConfirmContext.Provider value={confirmModal}>
      <Home />
      <ModalConfirm />
      <ToastContainer />
    </ModalConfirmContext.Provider>
  );
}

export default App;
