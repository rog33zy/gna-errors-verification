import React from "react";

import { Grid, Divider } from "@material-ui/core";

import { CSVLink } from "react-csv";

import Button from "../../../../components/UI/Button/Button";

import Reader from "../../../../components/Reader/Reader";

import classes from "../LoansScreen.module.css";

import TextField from "../../../../components/UI/TextField/TextField";

const GenerateUnleashedFileScreen = (props) => {
  const [unleashedFileSheetData, setUnleashedFileSheetData] = React.useState(
    []
  );

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [
    shPaymentRequestsSheetLabel,
    setShPaymentRequestsSheetLabel,
  ] = React.useState("Upload Smallholdr Payment Requests CSV File");

  let [nextPoNum, setNextPoNum] = React.useState("");

  console.log(nextPoNum);
  const unleashedFileHeaders = [
    { label: "Order Number", key: "order_number" },
    { label: "Supplier Code", key: "supplier_code" },
    { label: "Tax Rate", key: "tax_rate" },
    { label: "Supplier Reference", key: "supplier_reference" },
    { label: "Comments", key: "comments" },
    { label: "Order Date (DD/MM/YYYY)", key: "order_date" },
    { label: "Delivery Date (DD/MM/YYYY)", key: "delivery_date" },
    { label: "Warehouse Code", key: "warehouse_code" },
    { label: "Line Number", key: "line_number" },
    { label: "Product Code", key: "product_code" },
    { label: "Order Quantity", key: "order_quantity" },
    { label: "Unit Price", key: "unit_price" },
    { label: "Line Comments", key: "line_comments" },
  ];

  const setShPaymentRequestsSheetDataHandler = (data) => {
    const unleashedFileData = [];
    for (let i = 0; i < data.length; i++) {
      const shPaymentRequestsSheetDataRow = data[i];
      let farmer;

      try {
        farmer = shPaymentRequestsSheetDataRow.farmer
          .trim()
          .replace(/\s\s+/g, " ");
          farmer = farmer.split("(GNA00000")[1].split(")")[0]
      } catch (error) {
        farmer = "Error";
      }
      unleashedFileData.push({
        order_number: "PO-0000" + nextPoNum,
        supplier_code: farmer,
        tax_rate: "",
        supplier_reference: "GRN " + shPaymentRequestsSheetDataRow.grn_no_,
        comments: "Net Qty",
        order_date: shPaymentRequestsSheetDataRow.purchase_date.split(" ")[0],
        delivery_date: shPaymentRequestsSheetDataRow.purchase_date.split(
          " "
        )[0],
        warehouse_code: shPaymentRequestsSheetDataRow.owner,
        line_number: 1,
        product_code: shPaymentRequestsSheetDataRow.variety,
        order_quantity: shPaymentRequestsSheetDataRow.net_quantity__kg_,
        unit_price: shPaymentRequestsSheetDataRow.purchase_price__per_kg_,
        line_comments: "Net Qty",
      });

      unleashedFileData.push({
        order_number: "PO-0000" + nextPoNum,
        supplier_code: farmer,
        tax_rate: "",
        supplier_reference: "GRN " + shPaymentRequestsSheetDataRow.grn_no_,
        comments: "Loan Qty",
        order_date: shPaymentRequestsSheetDataRow.purchase_date.split(" ")[0],
        delivery_date: shPaymentRequestsSheetDataRow.purchase_date.split(
          " "
        )[0],
        warehouse_code: shPaymentRequestsSheetDataRow.owner,
        line_number: 2,
        product_code: shPaymentRequestsSheetDataRow.variety,
        order_quantity: shPaymentRequestsSheetDataRow.seed_loan_quantity__kg_,
        unit_price: shPaymentRequestsSheetDataRow.purchase_price__per_kg_,
        line_comments: "Loan Qty",
      });

      nextPoNum = parseInt(nextPoNum) + 1;
    }
    setUnleashedFileSheetData(unleashedFileData);

    setShPaymentRequestsSheetLabel("Successfully Uploaded");
  };

  const verifyCroppingProfilesHaveLoansHandler = () => {
    setContentToShowTicker("downloaded");
  };

  const isErrorButtonDisabled =
    shPaymentRequestsSheetLabel === "Successfully Uploaded" && nextPoNum !== "";

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
          <em>"Payment Requests .CSV File"</em>{" "}
        </strong>
        and then click button to generate{" "}
        <strong>
          <em>"Unleashed .CSV File"</em>
        </strong>
        . Thank you.
      </p>
    </div>
  );

  if (contentToShowTicker === "downloaded") {
    contentToShow = (
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
        <p>Downloaded!!!!!</p>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.UploadButton}>
            <TextField
              label="Next Purchase Order Number"
              stateValue={setNextPoNum}
              type="number"
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.UploadButton}>
            <Button
              variant="outlined"
              color="primary"
              disabled={nextPoNum === ""}
            >
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
        <Grid item xs={12}>
          <div className={classes.ErrorButton}>
            <Button
              variant="contained"
              color="primary"
              disabled={!isErrorButtonDisabled}
              onClick={verifyCroppingProfilesHaveLoansHandler}
            >
              <CSVLink
                data={unleashedFileSheetData}
                headers={unleashedFileHeaders}
                filename={"unleashed-file.csv"}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                }}
              >
                Download Unleashed CSV File
              </CSVLink>
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
      {contentToShow}
    </div>
  );
};

export default GenerateUnleashedFileScreen;
