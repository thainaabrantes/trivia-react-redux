import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import ButtonRanking from '../components/ButtonRanking';
import DataFeedback from '../components/DataFeedback';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { assertions } = this.props;
    let feedbackMsg = '';
    const number3 = 3;

    if (assertions >= number3) {
      feedbackMsg = 'Well Done!';
    } else {
      feedbackMsg = 'Could be better...';
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
          <h1 data-testid="feedback-text">
            { feedbackMsg }
          </h1>
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
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
