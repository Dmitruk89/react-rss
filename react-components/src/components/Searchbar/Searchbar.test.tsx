import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { SearchBar } from './Searchbar.component';
import userEvent from '@testing-library/user-event';

const handleSearchSubmit = vi.fn();

describe('Searchbar', () => {
  it('renders correctly', () => {
    render(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
  it('saves user input', async () => {
    render(<SearchBar onSearchSubmit={handleSearchSubmit} />);
    const input = screen.getByRole('textbox');
    window.location.reload();
    expect(input).toHaveValue('hello');
  });
});
