import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import Title from "../Title";
import api from "../../utils/api";


export default () => {
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
      <Title>Daily Status</Title>
      <Typography color="textSecondary">
        {recentDate}
      </Typography>
      <div style={{ textAlign: 'center', paddingTop: 32 }}>
        <Typography component="p" variant="h4">
          {recentThunderCount}
        </Typography>

        <Typography color="textSecondary">
          detected
        </Typography>

      </div>
    </React.Fragment>
  );
}
