import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DataFeedback extends Component {
  render() {
    const { score, questions } = this.props;
    return (
      <section>
        <div>
          <span
            data-testid="feedback-total-score"
          >
            {`Total score: ${score}`}
          </span>
        </div>
        <div>
          <span
            data-testid="feedback-total-question"
          >
            {`Total number of correct questions: ${questions}`}
          </span>
        </div>
      </section>
    );
  }
}

DataFeedback.propTypes = {
  score: PropTypes.number,
  questions: PropTypes.number,
}.isRequired;

export default connect()(DataFeedback);
