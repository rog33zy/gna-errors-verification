import React from "react";

import { Grid, Divider } from "@material-ui/core";

import Button from "../../components/UI/Button/Button";

import Reader from "../../components/Reader/Reader";

import classes from "./LoansScreen.module.css";

import CropsProfErrorOne from "../../components/CropsProfErrorOne/CropsProfErrorOne";
import CropsProfErrorTwo from "../../components/CropsProfErrorTwo/CropsProfErrorTwo";

const CroppingProfilesScreen = (props) => {
  const [
    shCroppingProfilesSheetData,
    setShCroppingProfilesData,
  ] = React.useState(null);

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [shLoansSheetData, setShLoansSheetData] = React.useState(null);

  const [
    shCroppingProfilesSheetLabel,
    setShCroppingProfilesSheetLabel,
  ] = React.useState("Upload Smallholdr Cropping Profiles CSV File");

  const [shLoansSheetLabel, setShLoansSheetLabel] = React.useState(
    "Upload Smallholdr Loans CSV File"
  );

  const setShCroppingProfilesSheetDataHandler = (data) => {
    setShCroppingProfilesData(data);
    setShCroppingProfilesSheetLabel("Successfully Uploaded");
  };

  const setShLoansSheetDataHandler = (data) => {
    setShLoansSheetData(data);
    setShLoansSheetLabel("Successfully Uploaded");
  };

  const verifyCroppingProfilesHaveLoansHandler = () => {
    setContentToShowTicker("TableOne");
  };

  const verifyLoansHaveCroppingProfilesHandler = () => {
    setContentToShowTicker("TableTwo");
  };

  const isErrorButtonDisabled =
    shCroppingProfilesSheetLabel === "Successfully Uploaded" &&
    shLoansSheetLabel === "Successfully Uploaded";

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
          <em>"Cropping Profiles .CSV File"</em>{" "}
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
      <CropsProfErrorOne
        shCroppingProfilesSheetData={[...shCroppingProfilesSheetData]}
        shDownloadLoansSheetData={[...shLoansSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableTwo") {
    contentToShow = (
      <CropsProfErrorTwo
        shCroppingProfilesSheetData={[...shCroppingProfilesSheetData]}
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
              {shCroppingProfilesSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setShCroppingProfilesSheetDataHandler}
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
        <Grid item xs={6}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyCroppingProfilesHaveLoansHandler}
            >
              Cropping Profiles Not Attached To Loans
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyLoansHaveCroppingProfilesHandler}
            >
              Loans Not Attached To Cropping Profiles
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default CroppingProfilesScreen;
