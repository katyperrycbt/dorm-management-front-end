import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

import MainMenu from "./components/Menu/MainMenu";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Personal from "./components/Personal/Personal";
import Resident from "./components/Resident/Resident";
import Bills from "./components/Bills/Bills";
import Requests from "./components/Request/Requests";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Admins from "./components/Admins/Admins";

const App = () => {
  const dispatch = useDispatch();
  const [linear, setLinear] = useState(false);
  const classes = useStyles();

  const admin = !(window.location.href.indexOf("admin.iu-dormitory.fun") === 8);

  if (admin) {
    return (
      <BrowserRouter>
        {linear && (
          <div
            className={classes.linearProgress}
            style={{ position: "fixed", top: "0", zIndex: "1000", left: "0" }}
          >
            <LinearProgress color="secondary" />
          </div>
        )}
        <Container maxWidth="lg">
          <MainMenu />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} />}
            />
            <Route
              exact
              path="/info"
              render={(props) => <Personal {...props} />}
            />
            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/admins"
              render={(props) => <Admins {...props} />}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      {linear && (
        <div
          className={classes.linearProgress}
          style={{ position: "fixed", top: "0", zIndex: "1000", left: "0" }}
        >
          <LinearProgress color="secondary" />
        </div>
      )}
      <Container maxWidth="lg">
        <MainMenu />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Auth {...props} />} />
          <Route
            exact
            path="/info"
            render={(props) => <Personal {...props} />}
          />
          <Route
            exact
            path="/resident"
            render={(props) => <Resident {...props} />}
          />
          <Route exact path="/bills" render={(props) => <Bills {...props} />} />
          <Route path="/requests" render={(props) => <Requests {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
