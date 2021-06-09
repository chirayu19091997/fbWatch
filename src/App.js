import React, { useState } from "react";

import Login from "../src/screens/login/Login";
import Signup from "../src/screens/signup/Signup";
import Header from "./screens/header/Header.js";
import Home from "../src/screens/home/Home.js";
import Watch from "../src/screens/watch/Watch.js";
import Donate from "../src/screens/donate/Donate.js";
import Tv from "./screens/tv-shows/Tv";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [loggedin, setLoggedin] = useState(false);

  const handler = (val) => {
    if (val) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home loggedin={loggedin} setLoggedin={handler} />
        </Route>
        <Route exact path="/movies">
          <Home loggedin={loggedin} setLoggedin={handler} />
        </Route>
        <Route exact path="/login">
          <Login loggedin={loggedin} setLoggedin={handler} />
        </Route>
        <Route exact path="/signup">
          <Signup loggedin={loggedin} setLoggedin={handler} />
        </Route>
        <Route path="/watch/:id">
          <Header loggedin={loggedin} setLoggedin={handler} />
          <Watch />
        </Route>
        <Route exact path="/donate">
          <Header loggedin={loggedin} setLoggedin={handler} />
          <Donate />
        </Route>
        <Route exact path="/tv-shows">
          <Header loggedin={loggedin} setLoggedin={handler} />
          <Tv loggedin={loggedin} setLoggedin={handler} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
