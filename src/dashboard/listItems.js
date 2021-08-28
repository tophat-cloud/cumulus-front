import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DnsIcon from "@material-ui/icons/Dns";
import InfoIcon from "@material-ui/icons/Info";

export const mainListItems = (
  <div>
    <ListSubheader inset>Dashboard</ListSubheader>

    <ListItem button component="a" href="/dashboard/overview">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>

    <ListItem button component="a" href="/dashboard/detail">
      <ListItemIcon>
        <DnsIcon />
      </ListItemIcon>
      <ListItemText primary="Detail list" />
    </ListItem>

    <ListItem button component="a" href="/dashboard/information">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Information " />
    </ListItem>
  </div>
);

export const secondaryListItems = <div></div>;
