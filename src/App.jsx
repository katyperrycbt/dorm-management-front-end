import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useDispatch } from "react-redux";

import useStyles from "./styles";
import './App.css';

import MainMenu from "./components/Menu/MainMenu";

import Personal from "./components/Personal/Personal";
import Resident from "./components/Resident/Resident";
import Bills from "./components/Bills/Bills";
import Requests from "./components/Request/Requests";
import About from "./components/About/Alter";
import Contact from "./components/Contact/Contact";
import Dashboard from './components/Dashboard2/Dashboard';
import Login from './components/Login/Login';
import { Snackbar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { SET_SNACK } from './constants/constants';
import Landing from './Landing';
import Notification from './components/Notification/Notification';

const App = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const snack = useSelector((state) => state.snack.open);
  const snackMSG = useSelector((state) => state.snack.msg);

  const linear = useSelector((state) => state.linear);

  const getIndex = window.location.href.indexOf('admin');
  const admin = getIndex === 8 || getIndex === 7;


  const handleClose = () => {
    dispatch({ type: SET_SNACK, data: { open: false, msg: '' } });
  }
//test source tree
  if (admin) {
    return (
      <BrowserRouter>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right', zIndex: 10000000 }} open={snack} onClose={handleClose} message={snackMSG} />
        {
          linear && <div className={classes.linearProgress} style={{ position: 'fixed', top: 0, zIndex: 10000000 }}>
            <LinearProgress color="secondary" classes={{ colorSecondary: classes.customColor, barColorSecondary: classes.customColor2 }} />
          </div>
        }
        <Container maxWidth="lg">
          <Switch>
            <Route path="/:any(me|new|email|)" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/login" render={(props) => <Login {...props} />} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={snack} onClose={handleClose} message={snackMSG} />
      {
        linear && <div className={classes.linearProgress} style={{ position: 'fixed', top: 0, zIndex: 10000000 }}>
          <LinearProgress color="secondary" classes={{ colorSecondary: classes.customColor, barColorSecondary: classes.customColor2 }} />
        </div>
      }
      <Container maxWidth="lg">
        <MainMenu />
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
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
          <Route path="/notifications" render={(props) => <Notification {...props} />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;