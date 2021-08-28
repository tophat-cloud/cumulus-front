import React from "react";
import clsx from "clsx";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashboardComponent from "../Dashboard";
import { useStyles } from "../useStyles";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(index, thunder_name, priority, url, created_at) {
  return {
    index,
    thunder_name,
    priority,
    url,
    created_at,
    detailDataList: [
      {
        insecureCode: 111,
        comment: "취약점 설명",
        suggestion: "제안 사항",
        rel_link: "관련 링크",
      },
      {
        insecureCode: 222,
        comment: "취약점 설명",
        suggestion: "제안 사항",
        rel_link: "관련 링크",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.index}
        </TableCell>
        <TableCell align="left">{row.thunder_name}</TableCell>
        <TableCell align="center">{row.priority}</TableCell>
        <TableCell align="left">{row.url}</TableCell>
        <TableCell align="right">{row.created_at}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Thunder Detail
              </Typography>

              {row.detailDataList.map((detailData) => (
                <>
                  <div>insecureCode: {detailData.insecureCode}</div>
                  <div>comment: {detailData.comment}</div>
                  <div>suggestion: {detailData.suggestion}</div>
                  <div>rel_link: {detailData.rel_link}</div>
                  <br />
                </>
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    thunder_name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    detailDataList: PropTypes.arrayOf(
      PropTypes.shape({
        insecureCode: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        suggestion: PropTypes.string.isRequired,
        rel_link: PropTypes.string.isRequired,
      })
    ).isRequired,
    index: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    1,
    "취약점 이름 연결",
    1,
    "http://tophatplayground.wookingwoo.com/",
    "2021.08.29"
  ),
  createData(
    2,
    "취약점 이름 연결",
    1,
    "http://tophatplayground.wookingwoo.com/",
    "2021.08.29"
  ),
  createData(
    3,
    "취약점 이름 연결",
    1,
    "http://tophatplayground.wookingwoo.com/",
    "2021.08.29"
  ),
  createData(
    4,
    "취약점 이름 연결",
    1,
    "http://tophatplayground.wookingwoo.com/",
    "2021.08.29"
  ),
  createData(
    5,
    "취약점 이름 연결",
    1,
    "http://tophatplayground.wookingwoo.com/",
    "2021.08.29"
  ),
];

export default function DetailList() {
  // const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <DashboardComponent>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>순서</TableCell>
              <TableCell align="left">thunder name</TableCell>
              <TableCell align="center">priority</TableCell>
              <TableCell align="left">url</TableCell>
              <TableCell align="right">탐지한 날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardComponent>
  );
}
