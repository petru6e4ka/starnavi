import { FC, useState } from "react";
import { Button } from "../components/button";
import { Select } from "../components/select/select";
import { useActions } from "../hooks/useActions";
import { IMode } from "../models/models";
import { useSettingsSelector } from "../hooks/useSettingsSelector";

interface IForm {
  data: IMode[];
  children: React.ReactNode;
}

const getLabels = (element: IMode) => element.name;

export const Form: FC<IForm> = ({ data, children }: IForm) => {
  const settings = useSettingsSelector((state) => state.settings);
  const { setSettings } = useActions();

  const changeSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSettings(mode);
  };

  const [mode, setMode] = useState(settings);

  return (
    <>
      <form className="flex flex-row mb-4">
        <Select
          value={mode.name}
          onChange={setMode}
          placeholder="Pick mode"
          name="mode"
          options={data}
          getLabels={getLabels}
        />
        <Button text="start" onClick={changeSettings} />
      </form>
      {children}
    </>
  );
};

export default Form;
