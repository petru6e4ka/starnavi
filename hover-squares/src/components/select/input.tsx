import { FC, useState, useCallback, useEffect } from "react";
import { always } from "../../utils/always";

interface IInput {
  placeholder?: HTMLInputElement["placeholder"];
  name?: HTMLInputElement["name"];
  disabled?: HTMLInputElement["disabled"];
  className?: HTMLInputElement["className"];
  value?: string;
  isOpened?: boolean;
  onChange?: (arg: string) => void;
  onFocus?: () => void;
  onClick?: () => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  name,
  disabled,
  className,
  value,
  isOpened,
  onChange = always.EMPTY_FUNC,
  onFocus = always.EMPTY_FUNC,
  onClick = always.EMPTY_FUNC,
}) => {
  const [currentState, setCurrentState] = useState(value ? value : "");

  useEffect(() => {
    setCurrentState(value ? value : "");
  }, [value]);

  const _onClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setCurrentState(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={className}>
      <input
        type="text"
        name={name}
        className="w-full pl-4 pr-[42px] py-2 focus:outline-none m-0"
        placeholder={placeholder}
        disabled={disabled}
        value={currentState}
        onFocus={onFocus}
        onChange={_onChange}
      />
      <button
        className={`absolute top-0 bottom-0 right-0 w-[42px] text-slate-300 transition-all ${
          isOpened ? "rotate-90" : ""
        }`}
        onClick={_onClick}
      >
        {">"}
      </button>
    </div>
  );
};

export default Input;
