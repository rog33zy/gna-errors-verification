import { ThemeProvider } from "@material-ui/core/styles";

import GNATheme from "./customTheme/CustomTheme";

import { CssBaseline } from "@material-ui/core";

import { Route, Switch } from "react-router-dom";

import AppBar from "./components/UI/AppBar/AppBar";

import {
  HomePageScreen,
  PreBuyBackHomePageScreen,
  LoansScreen,
  CroppingProfilesScreen,
  FieldsScreen,
  BuyBackHomePageScreen,
  GenerateUnleashedFileScreen,
} from "./Screens";

function App() {
  return (
    <ThemeProvider theme={GNATheme}>
      <CssBaseline />
      <Switch>
        <AppBar>
          <Route exact path="/" component={HomePageScreen} />
          <Route
            exact
            path="/pre-buyback"
            component={PreBuyBackHomePageScreen}
          />
          <Route exact path="/buyback" component={BuyBackHomePageScreen} />
          <Route exact path="/loans" component={LoansScreen} />
          <Route
            exact
            path="/cropping-profiles"
            component={CroppingProfilesScreen}
          />
          <Route exact path="/fields" component={FieldsScreen} />
          <Route
            exact
            path="/generate-unleashed-file"
            component={GenerateUnleashedFileScreen}
          />
        </AppBar>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
