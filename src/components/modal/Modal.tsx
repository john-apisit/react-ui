import { ReactNode } from "react";

const Modal = (props: {
  title: string;
  children: ReactNode;
  showModal: boolean;
  onClose: (data?: boolean) => void;
  footer: ReactNode;
}) => {
  return (
    <>
      {props.showModal && (
        <div
          className="bg-gray-500/90 fixed inset-0 w-full h-full flex justify-center items-center"
          onClick={() => props.onClose()}
        >
          <div
            className="w-sm h-fit border border-gray-300 bg-white rounded-xl px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" font-bold text-xl">{props.title}</div>
            <div>{props.children}</div>
            <div className="flex gap-2 justify-center">{props.footer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
