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

import classes1 from "./LoansErrorTableOne.module.css";

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

export default function CustomizedTables(props) {
  const classes = useStyles();

  const rows = props.rows;

  const tableHeadingsList = ["Farmer", "Seed Variety"];

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
                  <StyledTableRow key={row.farmer + index.toString()}>
                    <StyledTableCell component="th" scope="row">
                      <span style={{ fontSize: "12px" }}>{row.farmer}</span>
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      <span style={{ fontSize: "12px" }}>
                        {props.cropsProfList
                          ? row.crop.split("/")[1].trim()
                          : row.seed_type}
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
          fontSize: "20px",
        }}
      >
        {props.cropsProfList
          ? `No errors detected; all your cropping profiles in Smallholdr are attached to ${
              props.isCheckingForFields ? "fields" : "loans"
            }. You can safely check for the other errors. Thank you.`
          : "No errors detected; all your loans in Smallholdr are attached to cropping profiles. You can safely check for the other errors. Thank you."}
      </p>
    );
  }

  return <React.Fragment> {contentToShow}</React.Fragment>;
}
