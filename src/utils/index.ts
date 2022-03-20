import { RadioGroup, Rules } from "../types";

export const radioGroup: RadioGroup[] = [
  // first group of radio-buttons
  [
    { id: "101", value: "Vegetarian", disabled: false },
    { id: "102", value: "Nut allergy", disabled: false },
    { id: "103", value: "Halal", disabled: false },
  ],
  // second group of radio-buttons
  [
    { id: "201", value: "Cashew chicken", disabled: true },
    { id: "202", value: "Sweet and sour pork", disabled: true },
    { id: "203", value: "Stir fried Tofu", disabled: true },
    { id: "204", value: "Vegetable fried rice", disabled: true },
    { id: "205", value: "Pad Thai", disabled: true },
    { id: "206", value: "Massaman beef", disabled: true },
  ],
  // third group of radio-buttons
  [
    { id: "301", value: "Peanut sauce", disabled: true },
    { id: "302", value: "Oyster sauce", disabled: true },
    { id: "303", value: "Vegetable spring rolls", disabled: true },
    { id: "304", value: "Steamed rice", disabled: true },
  ],
];

export const rules: Rules = {
  // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
  101: [201, 202, 206, 302],
  // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
  102: [201, 301],
  // 'Halal' is NOT compatible with 'Sweet and sour pork',
  103: [202],
  // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
  204: [304],
  // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
  205: [304],
};
