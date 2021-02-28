import React from "react";

import { Grid, Divider } from "@material-ui/core";

import { CSVLink } from "react-csv";

import Button from "../../../../components/UI/Button/Button";

import Reader from "../../../../components/Reader/Reader";

import classes from "./LoansScreen.module.css";

const GenerateUnleashedFileScreen = (props) => {
  const [unleashedFileSheetData, setUnleashedFileSheetData] = React.useState(
    []
  );

  const [contentToShowTicker, setContentToShowTicker] = React.useState(null);

  const [
    shPaymentRequestsSheetLabel,
    setShPaymentRequestsSheetLabel,
  ] = React.useState("Upload Smallholdr Payment Requests CSV File");

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

      const purchaseDateList = shPaymentRequestsSheetDataRow.purchase_date
        .split(" ")[0]
        .split("-");
      const year = purchaseDateList[0];
      const month = purchaseDateList[1];
      const day = purchaseDateList[2];
      const purchaseDate = `${day}/${month}/${year}`;

      unleashedFileData.push({
        order_number: "",
        supplier_code: shPaymentRequestsSheetDataRow.team,
        tax_rate: "",
        supplier_reference: shPaymentRequestsSheetDataRow.grn_no_,
        comments: "",
        order_date: purchaseDate,
        delivery_date: purchaseDate,
        warehouse_code: shPaymentRequestsSheetDataRow.owner,
        line_number: 1,
        product_code: "",
        order_quantity: shPaymentRequestsSheetDataRow.base_amount_payable,
        unit_price: "",
        line_comments: "Base Amount",
      });
    }
    setUnleashedFileSheetData(unleashedFileData);

    setShPaymentRequestsSheetLabel("Successfully Uploaded");
  };

  const verifyCroppingProfilesHaveLoansHandler = () => {
    setContentToShowTicker("downloaded");
  };

  const isErrorButtonDisabled =
    shPaymentRequestsSheetLabel === "Successfully Uploaded";

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
          // textTransform: "uppercase",
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
