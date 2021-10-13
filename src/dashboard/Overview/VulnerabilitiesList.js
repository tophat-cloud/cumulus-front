import React, { useState, useEffect } from "react";
import axios from "axios";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Title from "../Title";
import { simpleDateFormat } from "../dateFormat";

// Generate Order Data
function createData(id, thunder_name, priority, url, created_at, project) {
  return { id, thunder_name, priority, url, created_at, project };
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

let rowsAxios = [];

export default function Orders() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchThunder() {
      await axios
        .post("https://api.cumulus.tophat.cloud/thunder", {
          project_id: "KMsB9W4hZCejJ6D1fiESP",
          limit: 5,
        })
        .then(function (response) {
          // console.log(response);
          // console.log(response.data);

          for (const thunderElement in response.data) {
            rowsAxios.push(
              createData(
                thunderElement * 1 + 1,
                response.data[thunderElement]["thunder_name"],
                response.data[thunderElement]["priority"],
                response.data[thunderElement]["url"],
                simpleDateFormat(
                  new Date(response.data[thunderElement]["created_at"])
                )
              )
            );
          }
        })
        .catch(function (error) {
          console.log(error.response);
          alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
        })
        .then(function () {
          // 항상 실행
          setRows(rowsAxios);
        });

      // console.log("rowsAxios: ", rowsAxios);
    }
    fetchThunder();
  }, []);

  // console.log("rows: ", rows);

  return (
    <React.Fragment>
      <Title>Recent Weakness</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>order</TableCell>
            <TableCell align="left">thunder name</TableCell>
            <TableCell align="center">priority</TableCell>
            <TableCell align="left">url</TableCell>
            <TableCell align="right">detected date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.thunder_name}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="/dashboard/detail" onClick={preventDefault}> */}
        <Link color="primary" href="/dashboard/detail">
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
