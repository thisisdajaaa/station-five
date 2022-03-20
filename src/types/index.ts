export type RadioGroup = {
  id: string;
  value: string;
  disabled: boolean;
}[];

export type Rules = {
  [key: number]: number[];
};

export type Selected = {
  selected: number | null;
};
