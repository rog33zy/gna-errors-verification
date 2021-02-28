import React from "react";

import Paper from "../../components/UI/Paper/Paper";

import classes from "./HomePageScreen.module.css";

const HomePageScreen = (props) => {
  return (
    <div className={classes.HomePageScreen}>
      <div className={classes.content}>
        <Paper {...props} pathWhenClicked="/pre-buyback">
          Pre - Buyback
        </Paper>

        <Paper {...props} pathWhenClicked="/buyback">
          Buyback
        </Paper>
      </div>
    </div>
  );
};

export default HomePageScreen;
