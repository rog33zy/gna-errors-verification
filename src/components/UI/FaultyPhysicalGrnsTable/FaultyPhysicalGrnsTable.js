import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

import classes1 from "../CropsProfErrorTableOne/LoansErrorTableOne.module.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#7b924e",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  container: {
    maxHeight: 360,
  },
  table: {
    minWidth: 700,
    textTransform: "capitalize",
  },
});

export default function FaultyPhysicalGrnsTable(props) {
  const classes = useStyles();

  const rows = props.rows;

  const tableHeadingsList = ["GRN No:", "Purchase Date", "Base Amount (ZMW)"];

  let contentToShow;

  if (rows.length > 0) {
    contentToShow = (
      <div>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          {props.title}
        </Typography>
        <TableContainer className={classes.container} component={Paper}>
          <div className={classes1.Table}>
            <Table
              className={classes.table}
              stickyHeader
              aria-label="customized table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  {tableHeadingsList.map((title) => (
                    <StyledTableCell key={title}>
                      <span style={{ fontSize: "12px" }}>{title}</span>
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      <span style={{ fontSize: "12px" }}>{row.grn_no_}</span>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <span style={{ fontSize: "12px" }}>
                        {row.purchase_date}
                      </span>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <span style={{ fontSize: "12px" }}>
                        {row.base_amount_payable}
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      </div>
    );
  } else {
    contentToShow = (
      <p
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
        No errors detected; all physical grns have been captured in Smallholdr.
        You can safely check for the other errors. Thank you.
      </p>
    );
  }

  return <React.Fragment> {contentToShow}</React.Fragment>;
}
