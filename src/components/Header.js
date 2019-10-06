import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  signinButton: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function Header() {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  const handleToggleNav = e => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setOpenNav(!openNav);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleToggleNav}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
      <Navigation openNav={openNav} handleToggleNav={handleToggleNav} />
    </div>
  );
}

export default Header;
