import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DataFeedback extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <section>
        <div>
          <span
            data-testid="feedback-total-score"
          >
            { score }
          </span>
        </div>
        <div>
          <span
            data-testid="feedback-total-question"
          >
            { assertions }
          </span>
        </div>
      </section>
    );
  }
}

DataFeedback.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(DataFeedback);
