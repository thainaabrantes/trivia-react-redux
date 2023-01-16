import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import Header from '../components/Header';
import fetchGame from '../serviceAPI/gameAPI';
import '../css/style.css';
import { sumScore } from '../redux/actions/index';

const ERROR_RESPONSE = 3;
const ONE_SECOND = 1000;
// comentário para commit

const correctAnswer = 'correct-answer';

class Games extends Component {
  constructor() {
    super();
    this.state = {
      categoria: '',
      pergunta: '',
      respostaCorreta: '',
      allAnswers: [],
      clicked: false,
      seconds: 30,
      intervalId: '',
      difficulty: '',
      countQuestion: 0,
      countCorrect: 0,
    };
  }

  componentDidMount() {
    this.fetchAnswers();
    this.resetSeconds();
  }

  resetSeconds = () => {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
        clicked: (prevState.seconds - 1) === 0,
      }));
    }, ONE_SECOND);

    this.setState({
      intervalId,
      seconds: 30,
    });
  };

  fetchAnswers = async () => {
    const token = localStorage.getItem('token');
    const gameObject = await fetchGame(token);

    const { history } = this.props;
    const { countQuestion } = this.state;
    if (gameObject.response_code === ERROR_RESPONSE) {
      history.push('/');
    } else {
      const rightA = gameObject.results[countQuestion].correct_answer;
      const wrongA = gameObject.results[countQuestion].incorrect_answers;
      const allA = [...wrongA, rightA];
      const shuffleParam = 0.5;

      this.setState({
        categoria: gameObject.results[countQuestion].category,
        pergunta: gameObject.results[countQuestion].question,
        respostaCorreta: gameObject.results[countQuestion].correct_answer,
        allAnswers: allA.sort(() => Math.random() - shuffleParam),
        difficulty: gameObject.results[countQuestion].difficulty,
      });
    }
  };

  sumPoints = (id) => {
    const { seconds, difficulty } = this.state;
    const { name, email, score, dispatch } = this.props;
    let difficultyPoint = 0;
    const ten = 10;
    const three = 3;
    const two = 2;
    const one = 1;

    if (difficulty === 'hard') {
      difficultyPoint = three;
    } else if (difficulty === 'medium') {
      difficultyPoint = two;
    } else {
      difficultyPoint = one;
    }

    if (id === correctAnswer) {
      const calcResullt = (ten + (seconds * difficultyPoint));
      const sumOfPoints = score + calcResullt;

      dispatch(sumScore(sumOfPoints));

      // conferir se está correta esta forma de salvar no localStorage:
      const ranking = [];
      const rankingObj = {
        name,
        score: sumOfPoints,
        picture: `https://www.gravatar.com/avatar/${md5(email)}`,
      };
      ranking.push(rankingObj);
      localStorage.setItem('ranking', JSON.stringify(ranking));
    }
  };

  handleClickAnswer = ({ target }) => {
    this.setState({
      clicked: true,
    });
    if (target.id === correctAnswer) {
      this.setState((prevState) => ({
        countCorrect: prevState.countCorrect + 1,
      }));
    }
    this.sumPoints(target.id);
  };

  handleNextQUestion = () => {
    const { countQuestion } = this.state;
    const { history } = this.props;
    const lastQuestion = 4;
    this.setState((prevState) => ({
      countQuestion: prevState.countQuestion + 1,
    }));
    if (countQuestion === lastQuestion) {
      history.push('/feedback');
    }
    this.setState({
      clicked: false,
    });
    this.fetchAnswers();
    this.resetSeconds();
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
          id={ testId }
          className={ clicked ? nomeClasse : '' }
          disabled={ clicked }
          onClick={ this.handleClickAnswer }
        >
          { answer }
        </button>
      );
    });
    return filteredAnswers;
  };

  render() {
    const { categoria, pergunta, clicked, seconds, intervalId } = this.state;
    if (seconds === 0 || clicked) {
      clearInterval(intervalId);
    }

    return (
      <section>
        <Header />
        <section className="timer">
          <h2>{ seconds }</h2>
        </section>
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
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  score: state.player.score,
});

export default connect(mapStateToProps)(Games);
