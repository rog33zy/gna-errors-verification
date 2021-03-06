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
  DuplicatesErrorsScreen,
  FaultyEntriesScreen,
  PhysicalElectronicGrnsComparisonsScreen,
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

          <Route exact path="/pre-buyback/loans" component={LoansScreen} />

          <Route
            exact
            path="/pre-buyback/cropping-profiles"
            component={CroppingProfilesScreen}
          />

          <Route exact path="/pre-buyback/fields" component={FieldsScreen} />

          <Route
            exact
            path="/buyback/generate-unleashed-file"
            component={GenerateUnleashedFileScreen}
          />

          <Route
            exact
            path="/buyback/check-for-duplicates"
            component={DuplicatesErrorsScreen}
          />

          <Route
            exact
            path="/buyback/check-for-faulty-entries"
            component={FaultyEntriesScreen}
          />

          <Route
            exact
            path="/buyback/compare-physical-and-electronic-entries"
            component={PhysicalElectronicGrnsComparisonsScreen}
          />
        </AppBar>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
