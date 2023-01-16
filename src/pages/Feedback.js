import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import ButtonRanking from '../components/ButtonRanking';
import DataFeedback from '../components/DataFeedback';

class Feedback extends Component {
  render() {
    const { countCorrect } = this.props;
    let feedbackMsg = '';
    const number3 = 3;

    if (countCorrect < number3) {
      feedbackMsg = 'Could be better...';
    } else {
      feedbackMsg = 'Well Done!';
    }

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
          <p data-testid="feedback-text">
            { feedbackMsg }
          </p>
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

Feedback.propTypes = {
  countCorrect: PropTypes.number.isRequired,
};

export default Feedback;
