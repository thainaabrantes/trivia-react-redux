import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goHome } from '../redux/actions';

class Button extends Component {
  handlePage = (event) => {
    event.preventDefault();
    const { data, dispatch } = this.props;
    const { history } = data;
    dispatch(goHome(this.state));
    history.push('/');
  };

  render() {
    return (
      <button
        data-testid="btn-go-home"
        type="submit"
        onClick={ this.handlePage }
      >
        Tela Inicial

      </button>
    );
  }
}

Button.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Button);
