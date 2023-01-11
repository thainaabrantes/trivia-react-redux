import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Games from './pages/Games';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route exact path="/games" render={ (props) => <Games { ...props } /> } />
      </Switch>
    );
  }
}

export default connect()(App);
