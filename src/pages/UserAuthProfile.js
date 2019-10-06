import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useAuthUser from "../components/useAuthUser";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    // margin: theme.spacing(5),
    // backgroundColor: theme.palette.secondary.main
    margin: 10,
    width: 60,
    height: 60
  }
}));

function UserAuthProfile() {
  const classes = useStyles();
  const authUser = useAuthUser();

  console.log(authUser);

  if (!authUser) {
    return <p>you must login</p>;
  }

  return (
    <div className={classes.paper}>
      <Avatar
        alt={authUser.displayName}
        src={authUser.photoURL}
        className={classes.avatar}
      />
      <Typography component="h1" variant="h5">
        {authUser.displayName}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {authUser.email}
      </Typography>
    </div>
  );
}

export default UserAuthProfile;
