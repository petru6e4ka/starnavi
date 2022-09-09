import {
  FC,
  SetStateAction,
  Dispatch,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { always } from "../../utils/always";
import { IMode } from "../../models/models";
import { useToggle } from "../../hooks/useToggle";
import Input from "./input";
import Dropdown from "./dropdown";

interface ISelect {
  placeholder?: HTMLInputElement["placeholder"];
  name?: HTMLInputElement["name"];
  disabled?: HTMLInputElement["disabled"];
  value?: string;
  options?: IMode[];
  getLabels?: (value: any) => string;
  onChange?: Dispatch<SetStateAction<string>>;
  valueSelector?: (entity: any) => string;
}

export const Select: FC<ISelect> = ({
  placeholder = "",
  name = "",
  disabled = false,
  value = "",
  options = always.EMPTY_ARR,
  getLabels,
  onChange = always.EMPTY_FUNC,
}: ISelect) => {
  const [openedDropdown, setOpenedDropdown] = useToggle(false);
  const _value = useMemo(() => value, [value]);
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current as unknown as Node;

      if (!el || el.contains(event.target as Node)) return;

      setOpenedDropdown.off();
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, setOpenedDropdown]);

  const _getLabels = useCallback(
    (object: any) => {
      return getLabels ? getLabels(object) : "";
    },
    [getLabels]
  );

  const labels = useMemo(() => options.map(_getLabels), [options, _getLabels]);

  const _onChange = useCallback(
    (value: string) => {
      const _value = options.find(
        (option) =>
          _getLabels(option).toLocaleLowerCase() === value.toLocaleLowerCase()
      );

      if (_value) {
        onChange(_getLabels(_value));
      }
    },
    [onChange, _getLabels, options]
  );

  return (
    <div className="relative mr-2" ref={ref}>
      <Input
        value={_value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className="border w-[300px] h-[42px]"
        isOpened={openedDropdown}
        onFocus={setOpenedDropdown.on}
        onClick={setOpenedDropdown}
        onChange={_onChange}
      />
      {openedDropdown && (
        <Dropdown
          value={value}
          options={labels}
          onChange={_onChange}
          onClose={setOpenedDropdown.off}
        />
      )}
    </div>
  );
};

export default Select;
