import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Timer from '../components/Timer';
import fetchGame from '../serviceAPI/gameAPI';
import '../css/style.css';
import TimerButton from '../components/TimerButton';

const ERROR_RESPONSE = 3;

class Games extends Component {
  constructor() {
    super();
    this.state = {
      categoria: '',
      pergunta: '',
      respostaCorreta: '',
      allAnswers: [],
      clicked: false,
      showTimer: false,
    };
  }

  componentDidMount() {
    this.fetchAnswers();
  }

  toggleTimer = () => {
    this.setState = ((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  };

  fetchAnswers = async () => {
    const token = localStorage.getItem('token');
    const gameObject = await fetchGame(token);

    const { history } = this.props;
    if (gameObject.response_code === ERROR_RESPONSE) {
      history.push('/');
    } else {
      const rightA = gameObject.results[0].correct_answer;
      const wrongA = gameObject.results[0].incorrect_answers;
      const allA = [...wrongA, rightA];
      const shuffleParam = 0.5;

      this.setState({
        categoria: gameObject.results[0].category,
        pergunta: gameObject.results[0].question,
        respostaCorreta: gameObject.results[0].correct_answer,
        allAnswers: allA.sort(() => Math.random() - shuffleParam),
      });
    }
  };

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  };

  handleNextQUestion = () => {
    this.setState({
      clicked: false,
    });
    this.fetchAnswers();
  };

  //  Fiz um aninhamento de expressão ternária para fazer a classe, porém o Lint me obrigou a fazer isso
  renderAnswersLint = () => {
    const { allAnswers, respostaCorreta, clicked } = this.state;
    const filteredAnswers = allAnswers.map((answer, index) => {
      let testId = '';
      let nomeClasse = '';
      if (answer === respostaCorreta) {
        testId = 'correct-answer';
        nomeClasse = 'green';
      } else {
        testId = `wrong-answer-${index}`;
        nomeClasse = 'red';
      }
      return (
        <button
          type="button"
          key={ index }
          data-testid={ testId }
          className={ clicked ? nomeClasse : '' }
          disabled={ clicked }
          onClick={ this.handleClick }
        >
          { answer }
        </button>
      );
    });
    return filteredAnswers;
  };

  render() {
    const { categoria, pergunta, showTimer } = this.state;

    return (
      <section>
        <Header />
        <div className="container">
          { showTimer && <Timer />}
          <TimerButton toggleTimer={ this.toggleTimer } />
        </div>
        <div>
          <br />
          <div> TRIVIA </div>

          <p data-testid="question-category">{ categoria }</p>
          <p data-testid="question-text">{ pergunta }</p>
          <div data-testid="answer-options">
            { this.renderAnswersLint() }
          </div>
          {clicked && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNextQUestion }
            >
              Next
            </button>
          )}
        </div>
      </section>
    );
  }
}

Games.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Games;
