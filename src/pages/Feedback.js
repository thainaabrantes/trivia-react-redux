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
        <Link
          to="/"
          data-testid="btn-play-again"
        >
          <Button
            data={ this.props }
          />
        </Link>
        <br />
        <Link
          to="/ranking"
        >
          <ButtonRanking
            detail={ this.props }
          />
        </Link>
        <div>
          <p data-testid="feedback-text">
            teste feedback
          </p>
        </div>
      </section>
    );
  }
}

export default Feedback;
