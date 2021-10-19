import React, { useState, useEffect } from "react";
import axios from "axios";

// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Title from "../Title";
// import { shortDateFormat } from "../dateFormat";

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  const [recentDate, setRecentDate] = useState();
  const [recentThunderCount, setRecentThunderCount] = useState();

  useEffect(() => {
    const key = window.localStorage.getItem("key");

    async function fetchThunder() {
      // let createDate;
      let thunderCount = 0;

      await axios
        .post("/thunder/counts/recent", {
          project_id: key,
          limit: "1",
        })
        .then(function (response) {
          // console.log(response);
          // console.log(response.data);
          thunderCount = Object.values(response.data);
          setRecentDate(Object.keys(response.data));
        })
        .catch(function (error) {
          console.log(error.response);
          // alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
        })
        .then(function () {
          // 항상 실행
          setRecentThunderCount(thunderCount);
        });
    }
    fetchThunder();
  }, []);

  return (
    <React.Fragment>
      <Title>Weakness Detection</Title>
      <Typography component="p" variant="h4">
        {recentThunderCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {recentDate}
      </Typography>
      {/* <Link color="primary" href="/dashboard/detail" onClick={preventDefault}> */}
      {/* <Link color="primary" href="/dashboard/detail">
          View details
        </Link> */}
    </React.Fragment>
  );
}
