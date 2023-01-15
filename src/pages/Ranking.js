import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

class Ranking extends Component {
  render() {
    return (
      <section>
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          <Link
            to="/"
            data-testid="btn-go-home"
          >
            <Button
              data={ this.props }
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default Ranking;
