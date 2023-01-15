import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ButtonRanking extends Component {
  pageRanking = (event) => {
    event.preventDefault();
    const { detail } = this.props;
    const { history } = detail;
    history.push('/ranking');
  };

  render() {
    return (
      <section>
        <button
          type="submit"
          data-testid="btn-ranking"
          onClick={ this.pageRanking }
        >
          Ranking
        </button>
      </section>
    );
  }
}

ButtonRanking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(ButtonRanking);
