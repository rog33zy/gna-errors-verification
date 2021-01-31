import { ThemeProvider } from "@material-ui/core/styles";

import GNATheme from "./customTheme/CustomTheme";

import { CssBaseline } from "@material-ui/core";

import { Route, Switch } from "react-router-dom";

import AppBar from "./components/UI/AppBar/AppBar";

import HomePageScreen from "./Screens/HomePageScreen/HomePageScreen";
import LoansScreen from "./Screens/LoansScreen/LoansScreen";
import CroppingProfilesScreen from "./Screens/CroppingProfilesScreen/CroppingProfilesScreen";
import FieldsScreen from "./Screens/FieldsScreen/FieldsScreen";

function App() {
  return (
    <ThemeProvider theme={GNATheme}>
      <CssBaseline />
      <Switch>
        <AppBar>
          <Route exact path="/" component={HomePageScreen} />
          <Route exact path="/loans" component={LoansScreen} />
          <Route
            exact
            path="/cropping-profiles"
            component={CroppingProfilesScreen}
          />
          <Route exact path="/fields" component={FieldsScreen} />
        </AppBar>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
