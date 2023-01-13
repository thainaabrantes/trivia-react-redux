import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Games from './pages/Games';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route exact path="/games" render={ (props) => <Games { ...props } /> } />
        <Route exact path="/ranking" render={ (props) => <Ranking { ...props } /> } />
        <Route exact path="/settings" render={ (props) => <Settings { ...props } /> } />
      </Switch>
    );
  }
}

export default connect()(App);
