import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Title from "../Title";
import { simpleDateFormat } from "../dateFormat";
import api from "../../utils/api";
import CleanGuide from "../../components/CleanGuide";

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

export default () => {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [projectStatus, setProjectStatus] = useState("");
  const isEmptyWeakness = projectStatus === "thunder not found";

  const load = async () => {
    const key = window.localStorage.getItem("key");

    try {
      const data = await api.getThunderDetail({
        project_id: key,
        limit: 5,
      });

      for (const thunderElement in data) {
        rowsAxios.push(
          createData(
            thunderElement * 1 + 1,
            data[thunderElement]["thunder_name"],
            data[thunderElement]["priority"],
            data[thunderElement]["url"],
            simpleDateFormat(new Date(data[thunderElement]["created_at"]))
          )
        );
      }
    } catch (err) {
      console.log(err.response);
      // alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);

      const errorData = err.response.data;

      if (errorData === "thunder not found") {
        setProjectStatus(errorData);
        // window.localStorage.setItem("projectStatus", errorData);
        // alert(`선택된 프로젝트 ID: ${selectedProjectId}`);
        // window.location.reload();
      }
    }

    setRows(rowsAxios);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Weakness</Title>
      <Table size="small">
        {
          isEmptyWeakness &&
          <CleanGuide/>
          // <TableBody>
          //     <span>We couldn't find any weaknesses.</span>
          //   </TableBody>
        }

        {
          isEmptyWeakness ||
          <>
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
            </>
        }
      </Table>

      {
        isEmptyWeakness ||
          <div className={classes.seeMore}>
            <Link color="primary" href="/dashboard/detail">
              View details
            </Link>
          </div>
      }
    </React.Fragment>
  );
}
