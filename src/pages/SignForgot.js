import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import useForm from "../components/useForm";
import validateReset from "../utils/validateReset";
import InputField from "../components/InputField";
import firebase from "../firebase/firebase";
import ErrorMessage from "../components/ErrorMessage";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const initialState = {
  email: ""
};

function SignForgot(props) {
  const classes = useStyles();
  const [authErrors, setAuthErrors] = useState("");

  async function handleReset() {
    try {
      await firebase.resetPassword(user.email);
      props.history.push("/reset-success");
    } catch (err) {
      setAuthErrors(err.message);
      console.error("authentication Error", err);
    }
  }

  const { value: user, handleChangeField, errors, handleSubmit } = useForm(
    initialState,
    validateReset,
    handleReset
  );

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <VpnKeyIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <form className={classes.form} noValidate>
        <InputField
          name="email"
          type="email"
          label="email"
          value={user.email}
          handleChange={handleChangeField}
          isInvalid={errors.email}
          isRequired={true}
          isAutoFocus={true}
        />

        {authErrors && <ErrorMessage authErrors={authErrors} />}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
          disabled={Object.keys(errors).length ? true : false}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/reset">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignForgot;
