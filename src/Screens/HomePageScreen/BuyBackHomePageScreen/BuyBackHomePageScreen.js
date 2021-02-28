import React from "react";

import Paper from "../../../components/UI/Paper/Paper";

import classes from "../HomePageScreen.module.css";

const BuyBackHomePageScreen = (props) => {
  return (
    <div className={classes.HomePageScreen}>
      <div className={classes.content}>
        <Paper {...props} pathWhenClicked="/generate-unleashed-file">
          Generate Unleashed File
        </Paper>
      </div>
    </div>
  );
};

export default BuyBackHomePageScreen;
