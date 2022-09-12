import { FC } from "react";
import always from "../utils/always";

interface IButton {
  text: string;
  disabled?: HTMLButtonElement["disabled"];
  onClick?: (value: any) => void;
}

export const Button: FC<IButton> = ({
  text,
  disabled = false,
  onClick = always.EMPTY_FUNC,
}: IButton) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:scale-95 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 transition-all"
      onClick={onClick}
    >
      {text.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
