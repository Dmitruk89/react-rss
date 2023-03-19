import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Header } from './Header.component';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  const user = userEvent.setup();
  it('title home renders correctly', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('home');
  });
  it('title about renders correctly', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    await user.click(screen.getByText(/about us/i));
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('about');
  });
  it('title should be empty with not exist route', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const link = screen.getByRole('link', { name: '' });
    await user.click(link);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeEmptyDOMElement();
  });
});
