import React from 'react';
import App from '../../App';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Feedback from '../../pages/Feedback'
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';


describe('Componente Feedback', () => {
  test('Texto aparece', () => {
    renderWithRouterAndRedux(<Feedback />);
    const textFeed = screen.getByRole('heading', {
      name: /feedback/i
    })
    expect(textFeed).toBeInTheDocument();
  })
  test('Se o botão Play again está n a tela e redireciona corretamente', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);
    const playBtn = screen.getByRole('button', {
      name: /play again/i
    })
    expect(playBtn).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  })
})