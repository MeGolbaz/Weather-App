import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";

import logo from "../logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "f05515"
  },
  aboutImg: {
    padding: "30px 150px 0px 150px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "30px"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "sticky"
  },
  appLogo: {
    width: "160px"
  },
  list: {
    width: 400
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Link to="/" >
            <img src={logo} className={classes.appLogo} alt="logo" />
          </Link>
          <div style={{ flex: "1 1 auto" }}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
