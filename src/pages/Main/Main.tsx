import React, { FC } from "react";

import { radioGroup, rules } from "../../utils";
import type { RadioGroup, Selected } from "../../types";
import { RadioButton } from "../../components/RadioButton";
import "./Main.css";

const Main: FC = () => {
  const [radioList, setRadioList] = React.useState<RadioGroup>(
    radioGroup.flat()
  );

  const [selected, setSelected] = React.useState<Selected[]>([
    { selected: null },
    { selected: null },
    { selected: null },
  ]);

  const onChange = (optionId: number, groupKey: number) => {
    const newRadioList = [...radioList].map((value) => {
      if (optionId in rules && rules[optionId].includes(Number(value.id))) {
        return {
          ...value,
          disabled: true,
        };
      }

      return {
        ...value,
        disabled: false,
      };
    });

    const newSelectedData = [...selected].map((value, index) =>
      index === groupKey ? { selected: optionId } : { ...value }
    );

    setRadioList(newRadioList);
    setSelected(newSelectedData);
  };

  const isDisabled = (id: string) =>
    radioList.find((value) => value.id === id)?.disabled;

  return (
    <div className="main">
      {radioGroup.map((group, groupKey) => (
        <div key={groupKey} className="radio-group">
          <h1>{`${groupKey + 1}-group`}</h1>

          {group.map((radio) => (
            <RadioButton
              key={radio.id}
              radio={radio}
              disabled={!!isDisabled(radio.id)}
              onChange={() => onChange(Number(radio.id), groupKey)}
              selected={Number(selected[groupKey].selected)}
            />
          ))}
        </div>
      ))}

      <button
        onClick={() => alert("clicked")}
        disabled={selected.some((value) => !value.selected)}
      >
        Submit
      </button>
    </div>
  );
};

export default Main;
