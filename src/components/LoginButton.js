import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import useAuthUser from "../components/useAuthUser";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import firebase from "../firebase/firebase";

const useStyles = makeStyles(theme => ({
  signinButton: {
    textDecoration: "none",
    color: "inherit"
  },
  avatar: {
    margin: 3
  }
}));

function LoginButton() {
  const classes = useStyles();
  const authUser = useAuthUser();
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const handleMenuClick = e => {
    setIsMenuOpen(e.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(null);
  };

  async function handleSignout() {
    try {
      await firebase.logout();
      handleMenuClose();
    } catch (err) {
      console.error("authentication Error", err);
      handleMenuClose();
    }
  }

  return (
    <>
      {authUser ? (
        <>
          {/* <Link to="/myprofile" className={classes.signinButton}> */}
          <IconButton
            aria-label="select"
            color="default"
            onClick={handleMenuClick}
          >
            <Avatar
              alt={authUser.displayName}
              src={authUser.photoURL}
              className={classes.avatar}
            />
          </IconButton>
          {/* </Link> */}
          <Menu
            id="simple-menu"
            anchorEl={isMenuOpen}
            keepMounted
            open={Boolean(isMenuOpen)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleSignout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Link to="/signin" className={classes.signinButton}>
          <Button color="inherit">Login</Button>
        </Link>
      )}
    </>
  );
}

export default LoginButton;
