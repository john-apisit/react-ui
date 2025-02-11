import { useToggle } from "@uidotdev/usehooks";
import { useEffect } from "react";

const InputToggle = (props: {
  value?: boolean;
  onChange: (value: boolean) => void;
}) => {
  const [on, toggle] = useToggle(props.value);
  const { onChange } = props;

  useEffect(() => {
    onChange(on);
  }, [on, onChange]);

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-2xl w-fit px-1 py-1 transition-all duration-75 cursor-pointer  ${
        on ? "bg-green-500 pl-6" : "bg-white pr-6"
      }`}
      onClick={() => {
        toggle();
      }}
    >
      <div
        className={`size-5 bg-white border border-gray-300 rounded-full`}
      ></div>
    </div>
  );
};

export default InputToggle;
