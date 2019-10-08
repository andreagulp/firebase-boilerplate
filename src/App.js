import React from "react";
import { Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";

import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import SignIn from "./pages/authorization/SignIn";
import SignUp from "./pages/authorization/SignUp";
import SignForgot from "./pages/authorization/SignForgot";
import SignResetSuccess from "./pages/authorization/SignResetSuccess";
import UserAuthProfile from "./pages/authorization/UserAuthProfile";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] } // Purple and green play nicely together.
    // secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Switch>
                <Route path="/news" component={News} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/reset" component={SignForgot} />
                <Route path="/reset-success" component={SignResetSuccess} />
                <Route path="/myprofile" component={UserAuthProfile} />

                <Route path="/" component={Home} />
              </Switch>
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
