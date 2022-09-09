import { FC, useState } from "react";
import { Button } from "../components/button";
import { Select } from "../components/select/select";
import { IMode } from "../models/models";

interface IForm {
  data: IMode[];
}

const getLabels = (element: IMode) => element.name;

export const Form: FC<IForm> = ({ data }: IForm) => {
  const [mode, setMode] = useState("");

  return (
    <form className="flex flex-row justify-between">
      <Select
        value={mode}
        onChange={setMode}
        placeholder="Pick mode"
        name="mode"
        options={data}
        getLabels={getLabels}
      />
      <Button text="start" />
    </form>
  );
};

export default Form;
