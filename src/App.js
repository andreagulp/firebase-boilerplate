import React from "react";
import { Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Switch>
              <Route path="/news" component={News} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
