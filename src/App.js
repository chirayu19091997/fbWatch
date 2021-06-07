import React from 'react';

import './index.css';
import Login from '../src/screens/login/login';
import Signup from '../src/screens/signup/Signup';
import Header from './screens/header/Header.js';
import Home from '../src/screens/home/Home.js';
import Watch from '../src/screens/watch/watch.js';
import Donate from '../src/screens/donate/Donate.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tv from './screens/tv-shows/Tv';

const App = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/movies">
                <Home/>
            </Route>   
            <Route exact path="/login">
                <Header/>
                <Login/>
            </Route>
            <Route exact path="/signup">
                <Header/>
                <Signup/>
            </Route>
            <Route path="/watch/:id">
                <Header/>
                <Watch/>
            </Route>
            <Route exact path="/donate">
                <Header/>
                <Donate/>
            </Route>
            <Route exact path="/tv-shows">
                <Header/>
                <Tv/>
            </Route>              
        </Switch>
    </Router>
);
}

export default App;