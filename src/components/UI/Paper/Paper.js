import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Paper, Typography } from "@material-ui/core";

import classes from "./Paper.module.css";

const useStyles = makeStyles((theme) => ({
  color: {
    height: "90%",
    backgroundColor: "#7b924e",
    textAlign: "center",
    padding: "28px 0",
    textTransform: "uppercase",
  },
}));

export default function SimplePaper(props) {
  const muiClasses = useStyles();
  const onClickHandler = () => {
    props.history.push(props.pathWhenClicked);
  };
  return (
    <div className={classes.PaperContainer}>
      <Paper
        className={muiClasses.color}
        elevation={3}
        onClick={onClickHandler}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ color: "white" }}
        >
          {props.children}
        </Typography>
      </Paper>
    </div>
  );
}
