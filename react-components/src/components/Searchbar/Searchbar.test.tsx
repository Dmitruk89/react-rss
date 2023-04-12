import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { SearchBar } from './Searchbar.component';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const handleSearchSubmit = vi.fn();

describe('Searchbar', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    renderWithProviders(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('handles user input', async () => {
    renderWithProviders(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
  it('calls handleSearchSubmit on close-button click', async () => {
    renderWithProviders(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const searchBtn = screen.getByTestId('search-button-element');
    await user.click(searchBtn);
    expect(handleSearchSubmit).toBeCalledTimes(1);
  });
});
