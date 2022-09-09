import { FC } from "react";

interface IButton {
  text: string;
  disabled?: HTMLButtonElement["disabled"];
}

export const Button: FC<IButton> = ({ text, disabled = false }: IButton) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:scale-95 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 transition-all"
    >
      {text.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
