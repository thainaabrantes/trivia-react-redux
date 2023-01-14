import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;

    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${md5(email)}` }
          alt="Gravatar"
        />
        <p data-testid="header-player-name">{`Nome: ${name} `}</p>
        <spam>
          Score:
          <p data-testid="header-score">{ score }</p>
        </spam>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.player.email,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
