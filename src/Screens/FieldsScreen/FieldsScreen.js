import React from "react";

import { Grid, Divider } from "@material-ui/core";

import Button from "../../components/UI/Button/Button";

import Reader from "../../components/Reader/Reader";

import classes from "./LoansScreen.module.css";

import FieldsErrorOne from "../../components/FieldsErrorOne/FieldsErrorOne";

const FieldsScreen = (props) => {
  const [
    shCroppingProfilesSheetData,
    setShCroppingProfilesData,
  ] = React.useState(null);

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [
    shCroppingProfilesSheetLabel,
    setShCroppingProfilesSheetLabel,
  ] = React.useState("Upload Smallholdr Cropping Profiles CSV File");

  const setShCroppingProfilesSheetDataHandler = (data) => {
    setShCroppingProfilesData(data);
    setShCroppingProfilesSheetLabel("Successfully Uploaded");
  };

  const verifyCroppingProfilesHaveLoansHandler = () => {
    setContentToShowTicker("TableOne");
  };

  const isErrorButtonDisabled =
    shCroppingProfilesSheetLabel === "Successfully Uploaded";

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
        and then check if there are any errors. Thank you.
      </p>
    </div>
  );

  if (contentToShowTicker === "TableOne") {
    contentToShow = (
      <FieldsErrorOne
        shCroppingProfilesSheetData={[...shCroppingProfilesSheetData]}
      />
    );
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
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
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyCroppingProfilesHaveLoansHandler}
            >
              Cropping Profiles Not Attached To Fields
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default FieldsScreen;
