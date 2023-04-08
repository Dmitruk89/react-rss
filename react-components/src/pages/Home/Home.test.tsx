import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import React from 'react';
import { Home } from './Home';
import userEvent from '@testing-library/user-event';

describe('Home page', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    render(<Home />);
    const searchElement = screen.getByTestId('search-bar-element');
    const cardListElement = screen.queryByTestId('card-list-element');
    const modalElement = screen.queryByTestId('modal-element');

    expect(searchElement).toBeInTheDocument();
    expect(cardListElement).not.toBeInTheDocument();
    expect(modalElement).not.toBeInTheDocument();
  });
  it('renders error on bad request correctly', async () => {
    render(<Home />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'bad-request');
    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    expect(screen.getByTestId('request-error-element')).toBeInTheDocument();
  });
  it('renders cardList correctly', async () => {
    render(<Home />);
    const input = screen.getByRole('textbox');
    await user.clear(input);
    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    await waitFor(() => {
      expect(screen.getByTestId('card-list-element')).toBeInTheDocument();
    });
  });
  it('renders modal correctly', async () => {
    render(<Home />);
    const input = screen.getByRole('textbox');
    await user.clear(input);
    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    await waitFor(() => {
      expect(screen.getByTestId('card-list-element')).toBeInTheDocument();
    });
    const card = screen.getAllByTestId('card-element');
    await user.click(card[0]);
    await waitFor(() => {
      expect(screen.getByTestId('modal-element')).toBeInTheDocument();
    });
  });
});
