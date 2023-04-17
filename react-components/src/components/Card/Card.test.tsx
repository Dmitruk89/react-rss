import { describe, it } from 'vitest';
import { screen, waitFor } from '@testing-library/react';

import React from 'react';
import { Card } from './Card.component';
import userEvent from '@testing-library/user-event';
import { characters } from '../../mock/characters';
import { renderWithProviders } from '../../utils/redux-render';

const Character = characters[0];

describe('Card', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    renderWithProviders(<Card key={1} content={Character} />);

    const productName = screen.getByText(/Morty Smith/i);
    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(productName).toBeInTheDocument();
    expect(displayedImage.src).toContain('avatar/2.jpeg');
  });
  it('calls handleCardClick on card click', async () => {
    renderWithProviders(<Card key={1} content={Character} />);
    const productName = screen.getByText(/Morty Smith/i);
    await user.click(productName);
    waitFor(() => {
      expect(screen.queryByTestId('modal-element')).toBeInTheDocument();
    });
  });
});
