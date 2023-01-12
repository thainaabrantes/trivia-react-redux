import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  render() {
    return (
      <div
        data-testid="settings-title"
      >
        <h1>CONFIGURAÇÕES</h1>
      </div>
    );
  }
}

export default connect()(Settings);
