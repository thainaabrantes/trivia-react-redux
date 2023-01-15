import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import ButtonRanking from '../components/ButtonRanking';

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
        <br />
        <Link to="/ranking">
          <ButtonRanking
            detail={ this.props }
          />
        </Link>
      </section>
    );
  }
}

export default Feedback;
