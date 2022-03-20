import { RadioData, SelectedValue } from "types";

export const initialRadioData: RadioData = {
  radioList: [
    {
      name: "firstGroup",
      radioItem: [
        { id: "101", value: "Vegetarian" },
        { id: "102", value: "Nut allergy" },
        { id: "103", value: "Halal" },
      ],
    },
    {
      name: "secondGroup",
      radioItem: [
        { id: "201", value: "Cashew chicken" },
        { id: "202", value: "Sweet and sour pork" },
        { id: "203", value: "Stir fried Tofu" },
        { id: "204", value: "Vegetable fried rice" },
        { id: "205", value: "Pad Thai" },
        { id: "206", value: "Massaman beef" },
      ],
    },
    {
      name: "thirdGroup",
      radioItem: [
        { id: "301", value: "Peanut sauce" },
        { id: "302", value: "Oyster sauce" },
        { id: "303", value: "Vegetable spring rolls" },
        { id: "304", value: "Steamed rice" },
      ],
    },
  ],
  rules: {
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
  },
};

export const initialSelectedValues: SelectedValue = {
  firstGroup: "",
  secondGroup: "",
  thirdGroup: "",
};
