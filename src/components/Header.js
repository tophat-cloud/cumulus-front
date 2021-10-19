import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import React from "react";
import LogoutButton from '../components/LogoutButton';
import { useStyles } from "../utils/useStyles";
import ProjectSelect from "./ProjectSelector";

export default ({
  open,
  handleDrawerOpen,
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
      style={{
        boxShadow: 'none',
        borderBottom: '1px solid lightgray',
      }}
    >
      <Toolbar
        className={classes.toolbar}
        style={{
          backgroundColor: "white",
          justifyContent: 'space-between',
        }}
      >
        <ProjectSelect/>

        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
