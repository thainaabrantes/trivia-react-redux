import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Games from './pages/Games';
import Settings from './pages/Settings';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route exact path="/games" render={ (props) => <Games { ...props } /> } />
        <Route exact path="/settings" render={ (props) => <Settings { ...props } /> } />
      </Switch>
    );
  }
}

export default connect()(App);
