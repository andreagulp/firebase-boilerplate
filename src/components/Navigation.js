import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import GroupWorkTwoToneIcon from "@material-ui/icons/GroupWorkTwoTone";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "none"
  }
}));

const navConfig = [
  {
    url: "/",
    icon: <HomeTwoToneIcon />,
    text: "Home"
  },
  {
    url: "/news",
    icon: <AccountCircleTwoToneIcon />,
    text: "My Profile"
  },
  {
    url: "/signup",
    icon: <GroupTwoToneIcon />,
    text: "Sign Up"
  },
  {
    url: "/signin",
    icon: <GroupWorkTwoToneIcon />,
    text: "Sign In"
  }
];

function Navigation({ openNav, handleToggleNav }) {
  const classes = useStyles();

  const sideList = (
    <div className={classes.list}>
      <List>
        {navConfig.map((item, i) => {
          return (
            <NavLink to={item.url} className={classes.link} key={i}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </div>
  );

  return (
    <Drawer open={openNav} onClose={handleToggleNav}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleToggleNav}
        onKeyDown={handleToggleNav}
      >
        {sideList}
      </div>
    </Drawer>
  );
}

export default Navigation;
