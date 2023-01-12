import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../serviceAPI/triviaAPI';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      isBtnDisabled: true,
    };
  }

  handleChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    }, () => this.enabledButton());
  };

  enabledButton = () => {
    const { name, email } = this.state;
    const minLength = 0;
    const validName = name.length > minLength;
    const validEmail = email.length > minLength;

    this.setState({
      isBtnDisabled: !(validName && validEmail),
    });
  };

  handleClick = async () => {
    const { history } = this.props;
    const token = await fetchToken();
    localStorage.setItem('token', token);
    history.push('/games');
  };

  render() {
    const { name, email, isBtnDisabled } = this.state;

    return (
      <div>
        <label htmlFor="player-name">
          <input
            data-testid="input-player-name"
            id="player-name"
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={ name }
            onChange={ ({ target }) => this.handleChange(target) }
          />
        </label>
        <label htmlFor="gravatar-email">
          <input
            data-testid="input-gravatar-email"
            id="gravatar-email"
            type="text"
            placeholder="Digite seu email"
            name="email"
            value={ email }
            onChange={ ({ target }) => this.handleChange(target) }
          />
        </label>
        <button
          data-testid="btn-play"
          type="button"
          disabled={ isBtnDisabled }
          onClick={ this.handleClick }
        >
          Play
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  history: {},
};

export default connect()(Login);
