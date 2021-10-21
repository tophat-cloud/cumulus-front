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
import api from "../../utils/api";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

let thunderStatiscics = [];

export default function Deposits() {
  const theme = useTheme();
  const [chartData, setChartData] = useState([]);

  const load = async () => {
    const key = window.localStorage.getItem("key");

    try {
      const data = await api.getThunderStats({
        project_id: key,
      });

      thunderStatiscics = [];

      for (const date in data) {
        thunderStatiscics.push(createData(date, data[date]));
      }

      console.log(thunderStatiscics);
    } catch (err) {
      console.log(err.response);
      // alert(`Weakness를 불러오는 중 에러가 발생했습니다: ${error}`);
    }

    setChartData(thunderStatiscics);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <React.Fragment>
      <Title>Weekly Chart</Title>
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
