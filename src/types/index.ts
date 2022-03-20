export type RadioItem = {
  id: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroup = {
  name: string;
  radioItem: RadioItem[];
};

export type Rules = {
  [key: string]: number[];
};

export type RadioData = {
  radioList: RadioGroup[];
  rules: Rules;
};

export type SelectedValue = {
  [key: string]: string;
};
