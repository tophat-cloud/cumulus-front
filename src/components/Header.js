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
    >
      <Toolbar className={classes.toolbar} style={{ backgroundColor: "white" }}>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon style={{ borderColor: "black", color: "black" }} />
        </IconButton> */}

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <div
            // style={{
            //   width: "150px",
            //   height: "150px",
            // lineHeight: "50",
            // textAlign: "center",
            // }}

            style={{
              width: "50",
              height: "50",
            }}
          >
            {/* Cumulus */}

            {projectList}
          </div>
        </Typography>
        {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}

        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
