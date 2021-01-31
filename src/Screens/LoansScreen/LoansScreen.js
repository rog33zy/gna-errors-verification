import React from "react";

import { Grid, Divider } from "@material-ui/core";

import Button from "../../components/UI/Button/Button";

import Reader from "../../components/Reader/Reader";

import classes from "./LoansScreen.module.css";

import LoansErrorsTableOne from "../../components/LoansErrorsTableOne/LoansErrorsTableOne";
import LoansErrorsTableTwo from "../../components/LoansErrorsTableTwo/LoansErrorsTableTwo";
import LoansErrorsTableThree from "../../components/LoansErrorsTableThree/LoansErrorsTableThree";

const LoansScreen = (props) => {
  const [combinedLoansSheetData, setCombinedLoansSheetData] = React.useState(
    null
  );

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [shLoansSheetData, setShLoansSheetData] = React.useState(null);

  const [combinedLoansSheetLabel, setCombinedLoansSheetLabel] = React.useState(
    "Upload Combined Inputs Sheet"
  );

  const [shLoansSheetLabel, setShLoansSheetLabel] = React.useState(
    "Upload Smallholdr Loans CSV Download"
  );

  const setCombinedLoansSheetDataHandler = (data) => {
    setCombinedLoansSheetData(data);
    setCombinedLoansSheetLabel("Successfully Uploaded");
  };

  const setShLoansSheetDataHandler = (data) => {
    setShLoansSheetData(data);
    setShLoansSheetLabel("Successfully Uploaded");
  };

  const verifyLoansErrorsHandler = () => {
    setContentToShowTicker("TableOne");
  };

  const verifyGoogleSheetsLoansAreInShErrorsHandler = () => {
    setContentToShowTicker("TableTwo");
  };

  const verifyShLoansAreInGoogleSheetsErrorsHandler = () => {
    setContentToShowTicker("TableThree");
  };

  const isErrorButtonDisabled =
    combinedLoansSheetLabel && shLoansSheetLabel === "Successfully Uploaded";

  let contentToShow = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "20px",
        // textTransform: "uppercase",
        fontSize: "20px",
      }}
    >
      <p>
        Upload{" "}
        <strong>
          <em>"Google Sheets Combined Inputs .CSV File"</em>{" "}
        </strong>
        and{" "}
        <strong>
          <em>"Smallholdr Loans .CSV File"</em>;{" "}
        </strong>
        then check for errors starting from left to right. Thank you.
      </p>
    </div>
  );

  if (contentToShowTicker === "TableOne") {
    contentToShow = (
      <LoansErrorsTableOne
        combinedInputsLoansSheetData={[...combinedLoansSheetData]}
        shDownloadLoansSheetData={[...shLoansSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableTwo") {
    contentToShow = (
      <LoansErrorsTableTwo
        combinedInputsLoansSheetData={[...combinedLoansSheetData]}
        shDownloadLoansSheetData={[...shLoansSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableThree") {
    contentToShow = (
      <LoansErrorsTableThree
        combinedInputsLoansSheetData={[...combinedLoansSheetData]}
        shDownloadLoansSheetData={[...shLoansSheetData]}
      />
    );
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {combinedLoansSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setCombinedLoansSheetDataHandler}
              />
            </Button>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {shLoansSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setShLoansSheetDataHandler}
              />
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={4}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyGoogleSheetsLoansAreInShErrorsHandler}
            >
              Verify G Sheets Loans Are In SH
            </Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyShLoansAreInGoogleSheetsErrorsHandler}
            >
              Verify SH Loans Are In G Sheets
            </Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyLoansErrorsHandler}
            >
              Verify That G Sheets and SH Loans Match
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default LoansScreen;
