import React from "react";

import { Grid, Divider } from "@material-ui/core";

import Button from "../../../../components/UI/Button/Button";

import Reader from "../../../../components/Reader/Reader";

import classes from "../LoansScreen.module.css";

import FaultyPurchaseRequestsEntries from "../../../../components/FaultyPurchaseRequestsEntries/FaultyPurchaseRequestsEntries";
import FaultyPaymentRequestsEntries from "../../../../components/FaultyPaymentRequestsEntries/FaultyPaymentRequestsEntries";

const DuplicatesErrorsScreen = (props) => {
  const [
    shPurchaseRequestsSheetData,
    setShPurchaseRequestsSheetData,
  ] = React.useState(null);

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [
    shPaymentsRequestsSheetData,
    setShPaymentsRequestsSheetData,
  ] = React.useState(null);

  const [
    shPurchaseRequestsSheetLabel,
    setShPurchaseRequestsSheetLabel,
  ] = React.useState("Upload Smallholdr Purchase Requests CSV File");

  const [
    shPaymentsRequestsSheetLabel,
    setShPaymentsRequestsSheetLabel,
  ] = React.useState("Upload Smallholdr Payment Requests CSV File");

  const setShPurchaseRequestsSheetDataHandler = (data) => {
    setShPurchaseRequestsSheetData(data);
    setShPurchaseRequestsSheetLabel("Successfully Uploaded");
  };

  const setShPaymentsRequestsSheetDataHandler = (data) => {
    setShPaymentsRequestsSheetData(data);
    setShPaymentsRequestsSheetLabel("Successfully Uploaded");
  };

  const displayFaultyPurchaseRequestsEntriesHandler = () => {
    setContentToShowTicker("TableOne");
  };

  const displayFaultyPaymentRequestsEntriesHandler = () => {
    setContentToShowTicker("TableTwo");
  };

  const isErrorButtonDisabled =
    shPurchaseRequestsSheetLabel === "Successfully Uploaded" &&
    shPaymentsRequestsSheetLabel === "Successfully Uploaded";

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
          <em>"Purchase Requests .CSV File"</em>{" "}
        </strong>
        and{" "}
        <strong>
          <em>"Payment Requests .CSV File"</em>;{" "}
        </strong>
        then check for errors starting from left to right. Thank you.
      </p>
    </div>
  );

  if (contentToShowTicker === "TableOne") {
    contentToShow = (
      <FaultyPurchaseRequestsEntries
        shPurchaseRequestsSheetData={[...shPurchaseRequestsSheetData]}
        shPaymentsRequestsSheetData={[...shPaymentsRequestsSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableTwo") {
    contentToShow = (
      <FaultyPaymentRequestsEntries
        shPurchaseRequestsSheetData={[...shPurchaseRequestsSheetData]}
        shPaymentsRequestsSheetData={[...shPaymentsRequestsSheetData]}
      />
    );
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {shPurchaseRequestsSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setShPurchaseRequestsSheetDataHandler}
              />
            </Button>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {shPaymentsRequestsSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setShPaymentsRequestsSheetDataHandler}
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
              onClick={displayFaultyPurchaseRequestsEntriesHandler}
            >
              purchase requests with errors
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={displayFaultyPaymentRequestsEntriesHandler}
            >
              payment requests with errors
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default DuplicatesErrorsScreen;
