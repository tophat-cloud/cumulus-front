import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title";
import api from "../../utils/api";
import CleanGuide from "../../components/CleanGuide";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

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

      setRows(data);
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
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Weakness</Title>
      <Table size="small">
        {
          isEmptyWeakness && <CleanGuide />
          // <TableBody>
          //     <span>We couldn't find any weaknesses.</span>
          //   </TableBody>
        }

        {isEmptyWeakness || (
          <>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  No
                </TableCell>
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
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.thunder_name}</TableCell>
                  <TableCell
                    style={{
                      color: ["red", "orange", "green"][row.priority - 1],
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
                  <TableCell>{dayjs(row.created_at).fromNow()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>

      {isEmptyWeakness || (
        <div className={classes.seeMore}>
          <Link color="primary" href="/dashboard/detail">
            View details
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};
