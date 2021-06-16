import React, { useState } from "react";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import Header from "./screens/header/Header.js";
import Home from "./screens/home/Home";
import Watch from "./screens/watch/Watch.js";
import Donate from "./screens/donate/Donate.js";
import Users from "./screens/adminpanel/ManageUsers";
import BlackList from "./screens/adminpanel/Blacklist";
import ProtectedRoute from "./Protected";
import PublicRoute from "./Public";
import Maintainence from "./screens/Maintainence/Maintenence";
import TvHome from "./screens/tv-shows/Tv-Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

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
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
        </Route>

        <Route exact path="/movies">
          <Home
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
        </Route>

        <Route path="/watch/:id">
          <Header
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
          <Watch
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintenence={maintenence}
            setMaintenence={handleMaintenence}
          />
        </Route>

        {/* ProtectedRoute For Admin Operations */}

        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintenence={maintenence}
          setMaintenence={handleMaintenence}
          path="/manage"
          component={Users}
        />
        
        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintenence={maintenence}
          setMaintenence={handleMaintenence}
          path="/blacklist"
          component={BlackList}
        />

        {/* Public Routes For Users */}

        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintenence={maintenence}
          setMaintenence={handleMaintenence}
          path="/tv-shows"
          component={TvHome}
        />

        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintenence={maintenence}
          setMaintenence={handleMaintenence}
          path="/donate"
          component={Donate}
        />

        {/* Login Check */}

        <Route exact path="/login">
        {(loggedin) ? (
          <Redirect to={{ pathname: "/" }} />
          ) : (
          <Login
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
          />
        )}
        </Route>

        <Route exact path="/signup">
        {(loggedin) ? (
          <Redirect to={{ pathname: "/" }} />
          ) : (
          <Signup
            loggedin={loggedin}
            setLoggedin={handler}
          />
        )}
        </Route>
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
