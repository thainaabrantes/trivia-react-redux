import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <section>
        <Header />
        <h1>Feedback</h1>
        <Link to="/">
          <Button
            data={ this.props }
            data-testid="btn-play-again"
          />
        </Link>
      </section>
    );
  }
}

export default Feedback;
