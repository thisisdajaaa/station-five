import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { outerTheme, useStyles } from "themes";
import { initialRadioData, initialSelectedValues } from "resources";
import type { RadioGroup, SelectedValue } from "types";
import RadioButtonGroup from "components/RadioButtonGroup";

const Main: FC = () => {
  const classes = useStyles();

  const { radioList, rules } = initialRadioData;

  const [radioGroup, setRadioGroups] = useState<RadioGroup[]>(radioList);
  const [isBtnEnabled, setIsBtnEnabled] = useState<boolean>(false);

  const [selectedValues, setSelectedValues] = useState<SelectedValue>(
    initialSelectedValues
  );

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setSelectedValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    let disabledId: number[] = [];

    // cross check values if the value is within the rules correlation check
    Object.keys(selectedValues).forEach((key) => {
      const itemId = selectedValues[key];
      const hasItemId = rules.hasOwnProperty(itemId);

      itemId && hasItemId && (disabledId = [...disabledId, ...rules[itemId]]);

      setIsBtnEnabled(!!itemId);

      disabledId.includes(+itemId) &&
        setSelectedValues((prev) => ({
          ...prev,
          [key]: "",
        }));
    });

    // modify the radio group array if the radio items inside it is either disabled/enabled
    setRadioGroups((prev) =>
      prev.map(({ name, radioItem }) => {
        const isNotFirstGroup = ["secondGroup", "thirdGroup"].includes(name);
        const disableButton = !disabledId.length && isNotFirstGroup; // initial load

        return {
          name,
          radioItem: radioItem.map(({ id, ...item }) => {
            return {
              ...item,
              id,
              disabled: disableButton || disabledId.includes(+id),
            };
          }),
        };
      })
    );
  }, [rules, selectedValues]);

  return (
    <ThemeProvider theme={outerTheme}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Station 5 technical exam
        </Typography>

        <form noValidate autoComplete="off" onSubmit={() => alert("Submitted")}>
          <Grid container spacing={0}>
            {radioGroup &&
              radioGroup.map(({ name, radioItem }) => (
                <Grid item xs={4} key={name}>
                  <FormControl>
                    <RadioButtonGroup
                      item={radioItem}
                      name={name}
                      value={selectedValues[name]}
                      onChange={handleRadioChange}
                    />
                  </FormControl>
                </Grid>
              ))}
          </Grid>

          <Box marginTop={4}>
            <Button
              disabled={!isBtnEnabled}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
