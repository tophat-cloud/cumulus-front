import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DnsIcon from "@material-ui/icons/Dns";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";

import { useStyles } from "../utils/useStyles";
import ProjectSelect from "./ProjectSelector";
import Logo from "./Logo";

const mainListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/dashboard/detail">
      <ListItemIcon>
        <DnsIcon />
      </ListItemIcon>
      <ListItemText primary="Timeline" />
    </ListItem>
    <ListItem button component="a" href="/dashboard/documents">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Documents" />
    </ListItem>
  </div>
);

export default ({ open, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, open || classes.drawerPaperClose),
      }}
      open={open}
      style={{
        width: 100,
        position: "absolute",
      }}
    >
      <div className={classes.toolbarIcon}>
        {/* <div style={{ width: "100%", float: "left", marginLeft: "25px" }}>
            User name
          </div> */}

        <Logo />

        {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
      </div>
      <Divider />

      {/* <List>{projectList}</List> */}
      {/* <Divider /> */}
      <List>{mainListItems}</List>
    </Drawer>
  );
};
