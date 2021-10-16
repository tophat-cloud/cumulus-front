import React, { useState, useEffect } from "react";
import axios from "axios";

import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

import Title from "../Title";
import { chartDateFormat } from "../dateFormat";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const thunderStatiscics = [];

export default function Deposits() {
  const theme = useTheme();

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const key = window.localStorage.getItem("key");

    async function fetchThunder() {
      await axios
        .post("https://api.cumulus.tophat.cloud/thunder/counts/recent", {
          project_id: key,
        })
        .then(function (response) {
          // console.log(response);
          // console.log(response.data);

          // 역순(날짜오래된순)으로 재정렬
          for (const date in response.data) {
            thunderStatiscics.unshift(createData(date, response.data[date]));
          }
        })
        .catch(function (error) {
          console.log(error.response);
          alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
        })
        .then(function () {
          // 항상 실행
          setChartData(thunderStatiscics);
        });
    }
    fetchThunder();
  }, []);

  return (
    <React.Fragment>
      <Title>Weakness Chart</Title>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Weaknesses
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
