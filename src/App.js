import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Games from './pages/Games';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

class App extends Component() {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/games" component={ Games } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}

export default App;
