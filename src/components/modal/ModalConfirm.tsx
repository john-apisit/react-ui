import { useContext } from "react";
import Modal from "./Modal";
import ModalConfirmContext from "../../stores/ModalConfirmContext";
import ButtonDefault from "../buttons/ButtonDefault";

const ModalConfirm = () => {
  const confirm = useContext(ModalConfirmContext);

  const footer = (
    <>
      <ButtonDefault color="foreground" onClick={() => confirm.close()}>
        No
      </ButtonDefault>
      <ButtonDefault color="success" onClick={() => confirm.close(true)}>
        Yes
      </ButtonDefault>
    </>
  );

  return (
    <Modal
      title={confirm.modalState.title}
      showModal={confirm.modalState.showModal}
      onClose={confirm.close}
      footer={footer}
    >
      <p>{confirm.modalState.message}</p>
    </Modal>
  );
};

export default ModalConfirm;
