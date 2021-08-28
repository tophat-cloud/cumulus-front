import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashboardComponent from "../Dashboard";
import { useStyles } from "../useStyles";

export default function DetailList() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <DashboardComponent>세부 취약점 (표)</DashboardComponent>
    </>
  );
}
