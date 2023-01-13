import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';

class Ranking extends Component {
  render() {
    return (
      <section>
        <div>
          <Button data={ this.props } />
          <h1>Ranking</h1>
        </div>
      </section>
    );
  }
}

export default connect()(Ranking);
