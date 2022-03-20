import { createTheme, makeStyles } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

export const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: lightBlue[900],
    },
  },
});

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});
