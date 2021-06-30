import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import ProtectedRoute from "./Protected";
import PublicRoute from "./Public";

import Login from "../screens/components/Login";
import Signup from "../screens/components/Signup";
import Watch from "../screens/components/Watch";
import Donate from "../screens/components/Donate";
import Reset from "../screens/components/Resetpassword";
import Users from "../screens/adminpanel/ManageUsers";
import Maintainence from "../screens/Maintainence/Maintainence";
import Wrapper from "../Wrapper";
import Content from "../screens/components/Content";

const Navigator = () => {
  // State For Login Status.
  const [loggedin, setLoggedin] = useState(false);
  const [adminstatus, setAdminstatus] = useState(false);

  // State For Maintainence Mode.
  const [maintainence, setMaintainence] = useState(false);

  // State For Search Input.
  const [search, setSearch] = useState("");

  // Handler For Search Input.
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Handler For Login State.
  const handler = (val) => {
    if (val) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };

  // Handler For Admin Panel Logout.
  const adminHandler = (val) => {
    if (val) {
      setAdminstatus(true);
    } else {
      setAdminstatus(false);
    }
  };

  // Handler For Maintainence Mode.
  const handleMaintainence = (val) => {
    if (val) {
      setMaintainence(true);
    } else {
      setMaintainence(false);
    }
  };

  return !maintainence ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Wrapper
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintainence={maintainence}
            setMaintainence={handleMaintainence}
            search={search}
            setSearch={handleSearch}
            searchable={true}
            notType={""}
            component={Content}
          />
        </Route>

        <Route exact path="/movies">
          <Wrapper
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintainence={maintainence}
            setMaintainence={handleMaintainence}
            search={search}
            setSearch={handleSearch}
            searchable={true}
            notType={"tv"}
            component={Content}
          />
        </Route>

        <Route path="/watch/:id">
          <Wrapper
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintainence={maintainence}
            setMaintainence={handleMaintainence}
            search={search}
            setSearch={handleSearch}
            searchable={false}
            component={Watch}
          />
        </Route>

        {/* ProtectedRoute For Admin Operations */}

        <ProtectedRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintainence={maintainence}
          setMaintainence={handleMaintainence}
          searchable={false}
          path="/manage"
          component={Users}
        />

        {/* Public Routes For Users */}

        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintainence={maintainence}
          setMaintainence={handleMaintainence}
          searchable={true}
          notType={"movie"}
          search={search}
          setSearch={handleSearch}
          path="/tv-shows"
          component={Content}
        />

        <PublicRoute
          exact={true}
          loggedin={loggedin}
          setLoggedin={handler}
          adminstatus={adminstatus}
          setAdminstatus={adminHandler}
          maintainence={maintainence}
          setMaintainence={handleMaintainence}
          searchable={false}
          path="/donate"
          component={Donate}
        />

        {/* Login Check */}

        <Route exact path="/login">
          {loggedin ? (
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
          {loggedin ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <Signup loggedin={loggedin} setLoggedin={handler} />
          )}
        </Route>

        <Route path="/reset">
          <Reset
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintainence={maintainence}
            setMaintainence={handleMaintainence}
            search={search}
            setSearch={handleSearch}
            searchable={false}
            component={Watch}
          />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route path="/">
          <Wrapper
            loggedin={loggedin}
            setLoggedin={handler}
            adminstatus={adminstatus}
            setAdminstatus={adminHandler}
            maintainence={maintainence}
            setMaintainence={handleMaintainence}
            search={search}
            setSearch={handleSearch}
            searchable={false}
            component={Maintainence}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigator;
