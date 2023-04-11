import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { SearchBar } from './Searchbar.component';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const handleSearchSubmit = vi.fn();

describe('Searchbar', () => {
  const initialState = {
    search: {
      value: '',
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const user = userEvent.setup();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <SearchBar onSearchSubmit={handleSearchSubmit} />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('handles user input', async () => {
    render(
      <Provider store={store}>
        <SearchBar onSearchSubmit={handleSearchSubmit} />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
  it('saves user input', async () => {
    render(
      <Provider store={store}>
        <SearchBar onSearchSubmit={handleSearchSubmit} />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    window.location.reload();
    expect(input).toHaveValue('hello');
  });
  it('calls handleSearchSubmit on close-button click', async () => {
    render(
      <Provider store={store}>
        <SearchBar onSearchSubmit={handleSearchSubmit} />
      </Provider>
    );
    const searchBtn = screen.getByTestId('search-button-element');
    await user.click(searchBtn);
    expect(handleSearchSubmit).toBeCalledTimes(1);
  });
});
