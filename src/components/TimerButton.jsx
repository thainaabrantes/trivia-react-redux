import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimerButton extends Component {
  render() {
    const { toggleTimer } = this.props;
    // console.log(toggleTimer);
    return (
      <button
        type="button"
        onClick={ toggleTimer }
      >
        Play Timer

      </button>
    );
  }
}

TimerButton.propTypes = {
  toggleTimer: PropTypes.func,
}.isRequired;

export default TimerButton;
