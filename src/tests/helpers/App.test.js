import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
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
  test('Se é possível escrever nos inputs', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const nameInput = screen.getByPlaceholderText(/Digite seu nome/i);
    userEvent.type(emailInput, 'joey@teste.com');
    expect(emailInput.value).toBe('joey@teste.com');
    userEvent.type(nameInput, 'Uzumaki Naruto');
    expect(nameInput.value).toBe('Uzumaki Naruto');
  })
  test('Se é possível clicar no botão e mudar a rota', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const nameInput = screen.getByPlaceholderText(/Digite seu nome/i);
    userEvent.type(emailInput, 'joey@teste.com');
    userEvent.type(nameInput, 'Uzumaki Naruto');
    const btn = screen.getByRole('button', {name: /play/i})
    userEvent.click(btn);
    expect(history.location.pathname).toBe('/');
  })
});

