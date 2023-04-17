import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { SearchBar } from './Searchbar.component';
import userEvent from '@testing-library/user-event';

describe('Searchbar', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('handles user input', async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
  it('calls handleSearchSubmit on click', async () => {
    renderWithProviders(<SearchBar />);
    const searchBtn = screen.getByTestId('search-button-element');
    await user.click(searchBtn);
  });
});
