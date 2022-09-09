import { useCallback, useMemo, useState } from "react";

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const onToggle = useCallback(() => {
    setState((v) => !v);
  }, []);

  const onOff = useCallback(() => {
    setState(false);
  }, []);

  const onOn = useCallback(() => {
    setState(true);
  }, []);

  const onToggleUnited = useMemo(
    () => Object.assign(onToggle, { on: onOn, off: onOff }),
    [onToggle, onOff, onOn]
  );

  return [state, onToggleUnited] as const;
};

export default useToggle;
