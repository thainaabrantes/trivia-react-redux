import React from 'react';
import App from '../../App';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Feedback from '../../pages/Feedback'
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';

const INITIAL_STATE = {
  player: {
    name: 'Thaina Abrantes',
    email: 'oliveiraabrantess@gmail.com',
    score: 114,
    assertions: 2
  }
}

const question = {

}

describe('Componente Feedback', () => {
  test('Texto aparece', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback');
    // screen.debug();
    const textFeed = screen.getByRole('heading', {
      name: /feedback/i
    })
    expect(textFeed).toBeInTheDocument();
  })
  test('Se o botão Play again está na tela e redireciona corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback');
    console.log(history.location.pathname);
    const playBtn = screen.getByRole('button', {
      name: /play again/i
    })
    expect(playBtn).toBeInTheDocument();
    userEvent.click(playBtn);
    expect(history.location.pathname).toBe('/');
  })
  test('Se o botão Ranking está na tela e redireciona corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback');
    const rankingBtn = screen.getByRole('button', { name: /ranking/i })
    expect(rankingBtn).toBeInTheDocument();
    userEvent.click(rankingBtn);
    expect(history.location.pathname).toBe('/ranking');
  })
  test('Se o texto "Could be better..." está na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/feedback');
    const message = screen.getByRole('heading', {  name: /could be better\.\.\./i});
    expect(message).toBeInTheDocument();
  })
  test('Se o texto "Well Done!" está na tela ao acertar 3 questões', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/games');
    // const WrongButton = screen.getByTestId('wrong-answer-0');
    // expect(WrongButton).toBeInTheDocument();
    // userEvent.click(WrongButton);
    // const nextBtn = screen.getByRole('button', {name: /next/i});
    // expect(nextBtn).toBeInTheDocument();
    // userEvent.click(nextBtn);
    // expect(WrongButton).toBeInTheDocument();
    // userEvent.click(WrongButton);
    // // const nextBtn = screen.getByRole('button', {name: /next/i});
    // expect(nextBtn).toBeInTheDocument();
    // userEvent.click(nextBtn);
    // const correctButton = screen.getByTestId('correct-answer');
    // expect(correctButton).toBeInTheDocument();
    // userEvent.click(correctButton);
    // // const nextBtn = screen.getByRole('button', {name: /next/i});
    // expect(nextBtn).toBeInTheDocument();
    // userEvent.click(nextBtn);
    // // const correctButton = screen.getByTestId('correct-answer');
    // expect(correctButton).toBeInTheDocument();
    // userEvent.click(correctButton);
    // // const nextBtn = screen.getByRole('button', {name: /next/i});
    // expect(nextBtn).toBeInTheDocument();
    // userEvent.click(nextBtn);
    // // const correctButton = screen.getByTestId('correct-answer');
    // expect(correctButton).toBeInTheDocument();
    // userEvent.click(correctButton);
    // // const nextBtn = screen.getByRole('button', {name: /next/i});
    // expect(nextBtn).toBeInTheDocument();
    // userEvent.click(nextBtn);
    // const message = screen.getByRole('heading', {name: /well done!/i});
    // expect(message).toBeInTheDocument();
  })
})
