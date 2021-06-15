import React, { useState } from "react";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import Header from "./screens/header/Header.js";
import Home from "./screens/home/Home";
import Watch from "./screens/watch/Watch.js";
import Donate from "./screens/donate/Donate.js";
import Tv from "./screens/tv-shows/Tv";
import Users from "./screens/adminpanel/ManageUsers";
import BlackList from "./screens/adminpanel/Blacklist";
import ProtectedRoute from "./Protected";
import PublicRoute from "./Public";
import Maintainence from "./screens/Maintainence/Maintenence";
import TvHome from "./screens/tv-shows/Tv-Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  // State For Login Status
  const [loggedin, setLoggedin] = useState(false);
  const [adminstatus, setAdminstatus] = useState(false);
  const [maintenence, setMaintenence] = useState(false);

  // Handler For Login State
  const handler = (val) => {
    if (val) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };

  // Handler For Admin Panel Logout
  const adminHandler = (val) => {
    if (val) {
      setAdminstatus(true);
    } else {
      setAdminstatus(false);
    }
  };

  const handleMaintenence = (val) => {
    if (val) {
      setMaintenence(true);
    } else {
      setMaintenence(false);
    }
  };

  return !maintenence ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
          />
        </Route>

        <Route exact path="/movies">
          <Home
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
          />
        </Route>

        <Route path="/watch/:id">
          <Header
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
          />
          <Watch
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
          />
        </Route>

        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          path="/tv-shows"
          component={TvHome}
        />
        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          path="/donate"
          component={Donate}
        />
        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          path="/manage"
          component={Users}
        />
        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          path="/blacklist"
          component={BlackList}
        />

        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          path="/login"
          component={Login}
        />
        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          path="/signup"
          component={Signup}
        />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route path="/">
          <Header
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
          <Maintainence
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
