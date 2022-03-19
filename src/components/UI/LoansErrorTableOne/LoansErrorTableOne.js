import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

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

  const tableHeadingsList = [
    "ID",
    "Seed",
    "Category",
    "Area of Land",
    "Seed Qty",
    "Soy Inoc Qty",
    "Gnuts Inoc Qty",
    "MAP Qty",
    "Soya Mix Qty",
    "Urea Qty",
    "Gypsum Qty",
    "Glyph Qty",
    "Delta Qty",
    "Aceta Qty",
    "XP16 Qty",
    "HD400 Qty",
  ];

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
                  <Tooltip title={row.farmer_name} placement="bottom">
                    <StyledTableRow key={row.farmer_id + index.toString()}>
                      <StyledTableCell component="th" scope="row">
                        <span style={{ fontSize: "12px" }}>
                          {row.farmer_id}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.seed_variety}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.farmer_category}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.area_of_land}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.total_seed_quantity_received}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell scope="row">
                        <span style={{ fontSize: "12px" }}>
                          {row.soybean_inoculant_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.groundnut_inoculant_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.fertilizer_map_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.fertilizer_soy_mix_a_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.fertilizer_urea_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.gypsum_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.glyphosate_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.deltamethrin_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.acetamiprid_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.xp16_sprayer_quantity}
                        </span>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <span style={{ fontSize: "12px" }}>
                          {row.hd400_sprayer_quantity}
                        </span>
                      </StyledTableCell>



                    </StyledTableRow>
                  </Tooltip>
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
        No errors detected; your inputs data on the Google Sheet exactly matches
        that in Smallholdr. You can safely check for the other errors. Thank
        you.
      </p>
    );
  }

  return <React.Fragment> {contentToShow}</React.Fragment>;
}
