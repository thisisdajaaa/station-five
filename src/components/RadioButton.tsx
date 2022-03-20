import React, { FC } from "react";

import { RadioGroup } from "../types";

type RadioButtonProps = {
  radio: RadioGroup[number];
  selected: number;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioButton: FC<RadioButtonProps> = ({
  radio,
  selected,
  disabled,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={radio.id}>{radio.value}</label>
      <input
        id={radio.id}
        type="radio"
        disabled={disabled}
        name={radio.value}
        checked={selected === Number(radio.id)}
        onChange={onChange}
      />
    </div>
  );
};

export { RadioButton };
