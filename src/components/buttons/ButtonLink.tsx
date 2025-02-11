import { ReactNode } from "react";
import { colors } from ".";
import { Link } from "react-router";

const AppButton = (props: {
  color: keyof typeof colors;
  size?: "xs" | "sm" | "default" | "lg";
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  to: string;
}) => {
  return (
    <Link
      to={props.to}
      className={`w-fit rounded-md flex items-center gap-2 disabled:hover:brightness-100 duration-200 cursor-pointer ${
        colors[props.color].bg
      } ${colors[props.color].text} ${colors[props.color].bgDisable} ${
        colors[props.color].textDisable
      } ${colors[props.color].border} ${colors[props.color].hover} ${
        props.size === "sm"
          ? "px-2 py-1 my-1 text-xs"
          : "px-4 py-2 my-2 text-sm"
      }`}
    >
      {props.children}
    </Link>
  );
};

export default AppButton;
