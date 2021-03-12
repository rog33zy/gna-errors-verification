import React from "react";

import { Grid, Divider } from "@material-ui/core";

import Button from "../../../../components/UI/Button/Button";

import Reader from "../../../../components/Reader/Reader";

import classes from "../LoansScreen.module.css";

import FaultyPhysicalGrns from "../../../../components/FaultyPhysicalGrns/FaultyPhysicalGrns";
import FaultySmallholdrGrns from "../../../../components/FaultySmallholdrGrns/FaultySmallholdrGrns";
import PhysicalShGrnsNotMatching from "../../../../components/PhysicalShGrnsNotMatching/PhysicalShGrnsNotMatching";

const PhysicalElectronicGrnsComparisonsScreen = (props) => {
  const [physicalGrnsSheetData, setPhysicalGrnsSheetData] = React.useState(
    null
  );

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [
    shPaymentRequestsSheetData,
    setShPaymentRequestsSheetData,
  ] = React.useState(null);

  const [physicalGrnsSheetLabel, setPhysicalGrnsSheetLabel] = React.useState(
    "Upload Google Sheets Physical GRNs Sheet"
  );

  const [
    shPaymentRequestsSheetLabel,
    setShPaymentRequestsSheetLabel,
  ] = React.useState("Upload Smallholdr Payment Requests CSV Download");

  const setPhysicalGrnsSheetDataHandler = (data) => {
    setPhysicalGrnsSheetData(data);
    setPhysicalGrnsSheetLabel("Successfully Uploaded");
  };

  const setShPaymentRequestsSheetDataHandler = (data) => {
    setShPaymentRequestsSheetData(data);
    setShPaymentRequestsSheetLabel("Successfully Uploaded");
  };

  const verifyPhysicalGrnsAreInShErrorsHandler = () => {
    setContentToShowTicker("TableOne");
  };

  const verifyShGrnsHavePhysicalCopiesErrorsHandler = () => {
    setContentToShowTicker("TableTwo");
  };

  const verifyGrnsErrorsHandler = () => {
    setContentToShowTicker("TableThree");
  };

  const isErrorButtonDisabled =
    shPaymentRequestsSheetLabel === "Successfully Uploaded" &&
    physicalGrnsSheetLabel === "Successfully Uploaded";

  let contentToShow = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "20px",
        fontSize: "20px",
      }}
    >
      <p>
        Upload{" "}
        <strong>
          <em>"Google Sheets Physical GRNs .CSV File"</em>{" "}
        </strong>
        and{" "}
        <strong>
          <em>"Smallholdr Payment Requests .CSV File"</em>;{" "}
        </strong>
        then check for errors starting from left to right. Thank you.
      </p>
    </div>
  );

  if (contentToShowTicker === "TableOne") {
    contentToShow = (
      <FaultyPhysicalGrns
        physicalGrnsSheetData={[...physicalGrnsSheetData]}
        shPaymentRequestsSheetData={[...shPaymentRequestsSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableTwo") {
    contentToShow = (
      <FaultySmallholdrGrns
        physicalGrnsSheetData={[...physicalGrnsSheetData]}
        shPaymentRequestsSheetData={[...shPaymentRequestsSheetData]}
      />
    );
  } else if (contentToShowTicker === "TableThree") {
    contentToShow = (
      <PhysicalShGrnsNotMatching
        physicalGrnsSheetData={[...physicalGrnsSheetData]}
        shPaymentRequestsSheetData={[...shPaymentRequestsSheetData]}
      />
    );
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {physicalGrnsSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setPhysicalGrnsSheetDataHandler}
              />
            </Button>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.UploadButton}>
            <Button variant="outlined" color="primary">
              {shPaymentRequestsSheetLabel}
              <Reader
                marginLeft="-600px"
                setFileData={setShPaymentRequestsSheetDataHandler}
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
              onClick={verifyPhysicalGrnsAreInShErrorsHandler}
            >
              Physical GRNs not in smallholdr
            </Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyShGrnsHavePhysicalCopiesErrorsHandler}
            >
              smallholdr grns without physical copies
            </Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyGrnsErrorsHandler}
            >
              physical &amp; smallholdr grns Not Matching
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default PhysicalElectronicGrnsComparisonsScreen;
