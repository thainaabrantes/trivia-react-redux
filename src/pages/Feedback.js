import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import ButtonRanking from '../components/ButtonRanking';
import DataFeedback from '../components/DataFeedback';

class Feedback extends Component {
  render() {
    return (
      <section>
        <div>
          <h1
            data-testid="feedback-text"
          >
            Feedback
          </h1>
        </div>
        <div>
          <Header />
          <DataFeedback />
        </div>
        <br />
        <div>
          <Link
            to="/"
            data-testid="btn-play-again"
          >
            <Button
              data={ this.props }
            />
          </Link>
        </div>
        <br />
        <div>
          <Link
            to="/ranking"
          >
            <ButtonRanking
              detail={ this.props }
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default Feedback;
