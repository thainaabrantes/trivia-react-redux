import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import Games from '../../pages/Games';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';

describe('Componente Login', () => {
  test('Se o campo de digitar email e nome existem', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const nameInput = screen.getByPlaceholderText(/Digite seu nome/i);
    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
  test('Se o botão Play existe', () => {
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByRole('button', {name: /play/i})
    expect(btn).toBeInTheDocument();
  })
  test('Se o botão Settings existe', () => {
    renderWithRouterAndRedux(<App />);
    const btnConfig = screen.getByRole('button', {name: /settings/i})
    expect(btnConfig).toBeInTheDocument();
  })
  test('Se é possível escrever nos inputs', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const nameInput = screen.getByPlaceholderText(/Digite seu nome/i);
    userEvent.type(emailInput, 'joey@teste.com');
    expect(emailInput.value).toBe('joey@teste.com');
    userEvent.type(nameInput, 'Uzumaki Naruto');
    expect(nameInput.value).toBe('Uzumaki Naruto');
  })
  test('Se é possível clicar no botão e mudar a rota', async() => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const nameInput = screen.getByPlaceholderText(/Digite seu nome/i);
    userEvent.type(emailInput, 'joey@teste.com');
    userEvent.type(nameInput, 'Uzumaki Naruto');
    const btn = screen.getByRole('button', {name: /play/i})
    userEvent.click(btn);
    await waitFor( () => expect(nameInput).not.toBeInTheDocument())
    expect(history.location.pathname).toBe('/games');
  })
});

describe('Se no componente login é possivel clicar no botão', () => {
  test('se é possivel clicar em settings', () => {
      const { history } = renderWithRouterAndRedux(<App />);
      const btnConfig = screen.getByRole('button', {name: /settings/i})
      userEvent.click(btnConfig);
      expect(history.location.pathname).toBe('/settings');
    })
  })

describe('Componente Games', () => {
  test('Se a imagem existe na tela', () => {
   renderWithRouterAndRedux(<Games />);
    const img = screen.getByRole('img', {
      name: /gravatar/i
    });
    expect(img).toBeInTheDocument();
  })
  test('Se o nome e o score aparecem na tela', () => {
    renderWithRouterAndRedux(<Games />);
    const name = screen.getByText(/nome:/i);
    const scoreText = screen.getByText(/score:/i);
    const scorePoint = screen.getByTestId('header-score');

    expect(name).toBeInTheDocument();
    expect(scoreText).toBeInTheDocument();
    expect(scorePoint).toBeInTheDocument();
  })
  // falta o timer que não consegui
  test('Se o texto trivia, categoria, perguntas, campo de respostas e aparecem', () => {
    renderWithRouterAndRedux(<Games />);
    const trivia = screen.getByText(/trivia/i);
    const category = screen.getByTestId('question-category');
    const question = screen.getByTestId('question-text');
    const answers = screen.getByTestId('answer-options');
   
    expect(trivia).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answers).toBeInTheDocument();
  })
})