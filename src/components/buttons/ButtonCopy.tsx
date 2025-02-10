import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Clipboard } from "lucide-react";
import { toast } from "react-toastify";

const ButtonCopy = (props: { text: string }) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const copyText = async () => {
    await copyToClipboard(props.text);
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
