import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Button extends Component {
  handlePage = (event) => {
    event.preventDefault();
    const { data } = this.props;
    const { history } = data;
    history.push('/');
  };

  render() {
    return (
      <button
        type="submit"
        onClick={ this.handlePage }
      >
        Play Again

      </button>
    );
  }
}

Button.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Button);
