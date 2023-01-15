import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';

class Ranking extends Component {
  render() {
    return (
      <section>
        <div>
          <h1>Ranking</h1>
          <Button data={ this.props } />
        </div>
      </section>
    );
  }
}

export default connect()(Ranking);
