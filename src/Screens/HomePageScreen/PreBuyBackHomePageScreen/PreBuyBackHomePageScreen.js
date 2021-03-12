import React from "react";

import Paper from "../../../components/UI/Paper/Paper";

import classes from "../HomePageScreen.module.css";

const PreBuyBackHomePageScreen = (props) => {
  return (
    <div className={classes.HomePageScreen}>
      <div className={classes.content}>
        <Paper {...props} pathWhenClicked="/pre-buyback/loans">
          Loans
        </Paper>
        <Paper {...props} pathWhenClicked="/pre-buyback/cropping-profiles">
          Cropping Profiles
        </Paper>
        <Paper {...props} pathWhenClicked="/pre-buyback/fields">
          Fields
        </Paper>
      </div>
    </div>
  );
};

export default PreBuyBackHomePageScreen;
