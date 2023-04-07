import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { WrappedApp, App } from './App';
import React from 'react';

describe('App', () => {
  it('Renders proper amount of products', () => {
    render(<WrappedApp />);
  });
  it('Renders current page name correctly', async () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('home');

    const user = userEvent.setup();

    await user.click(screen.getByText(/about us/i));
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('about');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
