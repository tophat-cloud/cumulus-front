import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "../../utils/useStyles";

import Chart from "./Chart";
import VulnerabilityDetection from "./Statistics";
import RecentVulnerabilities from "./VulnerabilitiesList";

export default () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      {/* <DashboardComponent> */}
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Vulnerability Detection */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <VulnerabilityDetection />
            </Paper>
          </Grid>
          {/* Recent Vulnerabilities List */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <RecentVulnerabilities />
            </Paper>
          </Grid>
        </Grid>
      {/* </DashboardComponent> */}
    </>
  );
}
