import { FC, ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { RadioItem } from "types";

type RadioProps = {
  value: string;
  item: RadioItem[];
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonGroup: FC<RadioProps> = ({ item, value, onChange, name }) => {
  return (
    <RadioGroup value={value} onChange={(event) => onChange(event)} name={name}>
      {item.map(({ id, value, disabled }) => (
        <FormControlLabel
          value={id}
          control={<Radio />}
          label={value}
          key={id}
          disabled={disabled}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioButtonGroup;
