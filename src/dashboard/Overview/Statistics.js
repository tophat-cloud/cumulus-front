import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Title from "../Title";
import api from "../../utils/api";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default () => {
  const classes = useStyles();

  const [recentDate, setRecentDate] = useState();
  const [recentThunderCount, setRecentThunderCount] = useState();

  const load = async () => {
    const key = window.localStorage.getItem("key");
    let thunderCount = 0;
    
    try {
      const data = await api.getThunderStats({
        project_id: key,
        limit: "1",
      });
  
      thunderCount = Object.values(data);
      setRecentDate(Object.keys(data));
    } catch (err) {
      console.log(err.response);
      // alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
    }

    setRecentThunderCount(thunderCount);
  };

  useEffect(() => {
    load();
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
