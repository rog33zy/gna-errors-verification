import React from "react";

import Paper from "../../../components/UI/Paper/Paper";

import classes from "../HomePageScreen.module.css";

const BuyBackHomePageScreen = (props) => {
  return (
    <div className={classes.HomePageScreen}>
      <br />
      <div className={classes.content}>
        <Paper {...props} pathWhenClicked="/buyback/check-for-duplicates">
          Check for Duplicates
        </Paper>

        <Paper {...props} pathWhenClicked="/buyback/check-for-faulty-entries">
          Check for Faulty SH Entries
        </Paper>

        <Paper
          {...props}
          pathWhenClicked="/buyback/compare-physical-and-electronic-entries"
        >
          Compare Physical and SH GRN Entries
        </Paper>

        <Paper {...props} pathWhenClicked="/buyback/generate-unleashed-file">
          Generate Unleashed File
        </Paper>
      </div>
    </div>
  );
};

export default BuyBackHomePageScreen;
