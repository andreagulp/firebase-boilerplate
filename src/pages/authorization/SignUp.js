import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase/firebase";
import validateSignup from "../../utils/validateSignup";
import InputField from "../../components/InputField";
import useForm from "../../components/useForm";
import ErrorMessage from "../../components/authorization/ErrorMessage";

const useStyles = makeStyles(theme => ({
  // "@global": {
  //   body: {
  //     backgroundColor: theme.palette.common.white
  //   }
  // },
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

function SignUp(props) {
  const classes = useStyles();
  const [authErrors, setAuthErrors] = useState("");

  async function handleSignup() {
    const userDisplayName = user.firstName + " " + user.lastName;
    try {
      await firebase.register(userDisplayName, user.email, user.password);
      props.history.push("/");
    } catch (err) {
      setAuthErrors(err.message);
      console.error("authentication Error", err);
    }
  }

  const { value: user, handleChangeField, errors, handleSubmit } = useForm(
    initialState,
    validateSignup,
    handleSignup
  );

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="firstName"
              type="given-name"
              label="First Name"
              value={user.firstName}
              handleChange={handleChangeField}
              isInvalid={errors.firstName}
              isRequired={true}
              isAutoFocus={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="lastName"
              type="family-name"
              label="Last Name"
              value={user.lastName}
              handleChange={handleChangeField}
              isInvalid={errors.lastName}
              isRequired={true}
              isAutoFocus={false}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="email"
              type="email"
              label="email"
              value={user.email}
              handleChange={handleChangeField}
              isInvalid={errors.email}
              isRequired={true}
              isAutoFocus={false}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        {authErrors && <ErrorMessage authErrors={authErrors} />}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/signin">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignUp;
