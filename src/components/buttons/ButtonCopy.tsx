import { Clipboard } from "lucide-react";
import { toast } from "react-toastify";

const ButtonCopy = (props: { text: string }) => {
  const copyText = async () => {
    await navigator.clipboard.writeText(props.text);
    toast("Copied!");
  };

  return (
    <button
      title="Copy"
      className="bg-success px-1 py-1 text-white rounded-md text-xs shadow-md hover:brightness-110 cursor-pointer"
      onClick={copyText}
    >
      <Clipboard className="w-4 h-4" />
    </button>
  );
};

export default ButtonCopy;
