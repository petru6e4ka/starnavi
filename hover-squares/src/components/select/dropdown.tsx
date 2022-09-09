import { FC, useState, useCallback, useEffect } from "react";
import { always } from "../../utils/always";

interface IDropdown {
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
  onClose?: () => void;
}

export const Dropdown: FC<IDropdown> = ({
  value = "",
  options = always.EMPTY_ARR,
  onChange = always.EMPTY_FUNC,
  onClose = always.EMPTY_FUNC,
}: IDropdown) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const _onClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();

      const result = (e.target as HTMLButtonElement).value;

      onChange(result);
      onClose();
    },
    [onChange, onClose]
  );

  return (
    <ul className="absolute top-[42px] left-0 right-0 shadow-md bg-white list-none">
      {options.map((option) => (
        <li key={option} className="w-full">
          <button
            className={`w-full py-2 px-4 text-left hover:bg-slate-100 transition-colors cursor-pointer ${
              selected === option ? "bg-slate-100" : ""
            }`}
            value={option}
            onClick={_onClick}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
