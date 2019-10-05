import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.error.dark
  }
}));

function ErrorMessage({ authErrors }) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Authorization Error!
        </Typography>
        <Typography component="p">{authErrors}</Typography>
      </Paper>
    </div>
  );
}

export default ErrorMessage;
