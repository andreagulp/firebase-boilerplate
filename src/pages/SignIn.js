import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import useForm from "../components/useForm";
import validateSignin from "../utils/validateSignin";
import InputField from "../components/InputField";
import firebase from "../firebase/firebase";
import ErrorMessage from "../components/ErrorMessage";

import Icon from "@mdi/react";
import { mdiGooglePlus } from "@mdi/js";
import { mdiGithubCircle } from "@mdi/js";

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
  },
  button: {
    margin: theme.spacing(1),
    width: "100%"
  },
  dividerContainer: {
    width: "100%",
    height: "20px",
    borderBottom: "1px solid black",
    textAlign: "center"
  },
  divider: {
    fontSize: "20px",
    // backgroundColor: "#F3F5F6",
    padding: "0 10px"
  }
}));

const initialState = {
  email: "",
  password: ""
};

function SignIn(props) {
  const classes = useStyles();
  const [authErrors, setAuthErrors] = useState("");

  async function handleSignin() {
    try {
      await firebase.login(user.email, user.password);
      props.history.push("/");
    } catch (err) {
      setAuthErrors(err.message);
      console.error("authentication Error", err);
    }
  }

  async function handleSigninWithGoogle() {
    try {
      await firebase.googleLogin();
      props.history.push("/");
    } catch (err) {
      setAuthErrors(err.message);
      console.error("authentication Error", err);
    }
  }
  async function handleSigninWithGitHub() {
    try {
      await firebase.gitHubLogin();
      props.history.push("/");
    } catch (err) {
      setAuthErrors(err.message);
      console.error("authentication Error", err);
    }
  }

  const { value: user, handleChangeField, errors, handleSubmit } = useForm(
    initialState,
    validateSignin,
    handleSignin
  );

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={
          <Icon
            path={mdiGooglePlus}
            title="User Profile"
            size={2}
            color="white"
          />
        }
        // startIcon={<LockOpenIcon />}
        onClick={handleSigninWithGoogle}
      >
        Signin with Google
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={
          <Icon
            path={mdiGithubCircle}
            title="User Profile"
            size={2}
            color="grey"
          />
        }
        onClick={handleSigninWithGitHub}
      >
        Signin with GitHub
      </Button>

      <Divider />

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

        <InputField
          name="password"
          type="password"
          label="password"
          value={user.password}
          handleChange={handleChangeField}
          isInvalid={errors.password}
          isRequired={true}
          isAutoFocus={false}
        />

        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
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

export default SignIn;
