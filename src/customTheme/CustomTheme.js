import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#abc27b",
      main: "#7b924e",
      dark: "#4d6423",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#cccccc",
    },
    text: {
      primary: "#4d6423",
      secondary: "#ffffff",
    },
  },
});

export default CustomTheme;
