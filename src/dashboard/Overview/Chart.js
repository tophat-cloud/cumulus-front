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
    async function fetchThunder() {
      let tempDate = {};

      await axios
        .post("https://api.cumulus.tophat.cloud/thunder", {
          project_id: "KMsB9W4hZCejJ6D1fiESP",
        })
        .then(function (response) {
          // console.log(response);
          // console.log(response.data);

          for (const thunderElement in response.data) {
            const createdAt = chartDateFormat(
              new Date(response.data[thunderElement]["created_at"])
            );

            if (tempDate[createdAt] === undefined) {
              tempDate[createdAt] = 0;
            }

            tempDate[createdAt]++;
          }
          // console.log("tempDate: ", tempDate);

          for (const date in tempDate) {
            thunderStatiscics.unshift(createData(date, tempDate[date]));
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
