import React, { Component } from 'react';
import './App.scss';
import GlobalContext from './Context/GlobalContext';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <GlobalContext>
        <Helmet>
          <style>{'body {background-color: #0B0C10}'}</style>
        </Helmet>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
          </Switch>
        </Router>
      </GlobalContext>
    );
  }
}

export default App;
