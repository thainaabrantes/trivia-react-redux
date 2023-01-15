import React, { Component } from 'react';
import Button from '../components/Button';

class Ranking extends Component {
  render() {
    return (
      <section>
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          <Button
            data={ this.props }
            data-testid="btn-go-home"
          />
        </div>
      </section>
    );
  }
}

export default Ranking;
