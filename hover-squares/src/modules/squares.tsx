import { useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useSettingsSelector } from "../hooks/useSettingsSelector";

export const Squares = () => {
  const { field, updated } = useSettingsSelector((state) => state.settings);
  const ref = useRef(null);
  const { addHovered, removeHovered, resetHovered } = useActions();

  useEffect(() => {
    const elements = (ref?.current as never as Element).children;

    Array.from(elements).forEach((elem) => {
      elem.classList.remove("bg-cyan-500");
      elem.classList.add("bg-white");
    });

    resetHovered();
  }, [updated, resetHovered]);

  const addHover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as Element;

    if (target.classList.contains("bg-white")) {
      target.classList.remove("bg-white");
      target.classList.add("bg-cyan-500");
      addHovered((e.target as HTMLButtonElement).value);
      return;
    }

    if (!target.classList.contains("bg-white")) {
      target.classList.remove("bg-cyan-500");
      target.classList.add("bg-white");
      return;
    }
  };

  const removeHover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as Element;

    if (!target.classList.contains("bg-white")) {
      target.classList.remove("hover:bg-cyan-500");
      target.classList.add("hover:bg-white");
      return;
    }

    if (target.classList.contains("bg-white")) {
      target.classList.remove("hover:bg-white");
      target.classList.add("hover:bg-cyan-500");
      removeHovered((e.target as HTMLButtonElement).value);
      return;
    }
  };

  const squares = Array.from({ length: Math.pow(field, 2) }, (_, i) => {
    return (
      <button
        className="bg-white hover:bg-cyan-500 hover:cursor-pointer p-2  w-10 h-10 border"
        key={i}
        value={`Row ${Math.ceil((i + 1) / field)} col ${
          (i + 1) % field || field
        }`}
        onMouseEnter={addHover}
        onMouseLeave={removeHover}
      ></button>
    );
  });

  return (
    <div
      className="flex flex-wrap mb-4 h-fit mr-5"
      style={{ width: `calc(2.5rem * ${field} + 2px)` }}
      ref={ref}
    >
      {squares}
    </div>
  );
};

export default Squares;
