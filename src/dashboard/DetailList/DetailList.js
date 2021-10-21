import React, { useState, useEffect } from "react";
import api from "../../utils/api";

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
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  // console.log(row.details);

  let detailData = row.details;

  // console.log(detailData);

  let descriptionData = "no-data";
  let suggestionData = "no-data";
  let referenceData = "no-data";

  if (detailData !== null && detailData !== undefined) {
    try {
      detailData = JSON.parse(detailData);

      if (detailData.description !== undefined) {
        descriptionData = detailData.description;
      }

      if (detailData.suggestion !== undefined) {
        suggestionData = detailData.suggestion;
      }

      if (detailData.reference !== undefined) {
        referenceData = detailData.reference;
      }
    } catch (error) {
      console.error(error);
      descriptionData = "error";
      suggestionData = "error";
      referenceData = "error";
    }
  }

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

        <TableCell>{row.id}</TableCell>
        <TableCell>{row.thunder_name}</TableCell>
        <TableCell
          style={{
            color: ["red", "orange", "yellow"][row.priority - 1],
            fontWeight: "bold",
          }}
        >
          {["HIGH", "NORMAL", "LOW"][row.priority - 1]}
        </TableCell>
        <TableCell>
          <Link href={row.url} target="_blank">
            {row.url}
          </Link>
        </TableCell>
        <TableCell>{dayjs(row.created_at).format("HH:mm:ss")}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              margin={1}
              style={{
                padding: "10px 0",
                textAlign: "left",
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                <strong>Issue</strong> {row.thunder_name}
              </Typography>

              <ul>
                <ListItem>
                  <strong style={{ marginRight: 8 }}>weakness → </strong>
                  <ListItemText primary={row.thunder_name} />
                </ListItem>
                <ListItem>
                  <strong style={{ marginRight: 8 }}>description → </strong>
                  <ListItemText primary={descriptionData} />
                </ListItem>

                <ListItem>
                  <strong style={{ marginRight: 8 }}>suggestion → </strong>
                  <ListItemText primary={suggestionData} />
                </ListItem>
                <ListItem>
                  <strong style={{ marginRight: 8 }}>reference → </strong>
                  <ListItemText>
                    {referenceData === "no-data" && (
                      <ListItemText primary={referenceData} />
                    )}

                    {referenceData !== "no-data" && (
                      <Link href={referenceData} target="_blank">
                        {referenceData}
                      </Link>
                    )}
                  </ListItemText>
                </ListItem>
                <br />
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

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
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default function DetailList() {
  // const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [rows, setRows] = useState([]);

  const load = async () => {
    const key = window.localStorage.getItem("key");

    try {
      const data = await api.getThunderDetail({
        project_id: key,
      });

      setRows(data);
    } catch (err) {
      console.log(err.response);
      // alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ fontWeight: "bold" }}>No</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              Issue
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              Level
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              URL
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
