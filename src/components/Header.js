import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import LogoutButton from '../components/LogoutButton';
import { useStyles } from "../utils/useStyles";
import ProjectSelect from "./selectProject";
import ListItem from "@material-ui/core/ListItem";

const projectList = (
  <div style={{ width: 100 }}>
    <ListItem>
      <ProjectSelect />
    </ListItem>
  </div>
);

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
