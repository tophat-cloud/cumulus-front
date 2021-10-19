import React, { useState, useEffect } from "react";
import clsx from "clsx";
import api from '../../utils/api';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "../../utils/useStyles";

import Chart from "./Chart";
import VulnerabilityDetection from "./Statistics";
import RecentVulnerabilities from "./VulnerabilitiesList";
import Onboarding from "../../components/Onboarding";
import InstallGuide from "../../components/InstallGuide";
import Loader from 'react-loader';
import Color from '../../utils/color';

export default () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [isNoProject, setNoProject] = useState(false);
  const [isNoDomain, setNoDomain] = useState(false);
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    checkNoProject();
  }, []);

  const checkNoProject = async () => {
    setLoading(true);

    const projectList = await api.getProjectList();
    const isNoProject = projectList.length < 1;
    setNoProject(isNoProject);

    if (isNoProject) {
      return;
    }

    const key = window.localStorage.getItem("key");
    if (!key) {
      window.localStorage.setItem('key', projectList[0].id);
      window.location.reload();
      return;
    }

    const project = projectList.find(v => v.id === key);
    setNoDomain(!Boolean(project && project.domain));

    setLoading(false);
  }

  if (isLoading) {
    return <Loader color={Color.primary} left="calc(50% + 100px)" />
  }

  if (isNoProject) {
    return <Onboarding/>;
  }

  if (isNoDomain) {
    return <InstallGuide/>;
  }

  return (
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
  );
}
