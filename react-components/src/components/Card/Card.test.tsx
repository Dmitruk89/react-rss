import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Card } from './Card.component';
import userEvent from '@testing-library/user-event';
import { characters } from '../../mock/characters';

const Character = characters[0];

const handleCardClick = vi.fn();

describe('Card', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    render(<Card key={1} content={Character} onCardClick={handleCardClick} />);

    const productName = screen.getByText(/Morty Smith/i);
    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(productName).toBeInTheDocument();
    expect(displayedImage.src).toContain('avatar/2.jpeg');
  });
  it('calls handleCardClick on card click', async () => {
    render(<Card key={1} content={Character} onCardClick={handleCardClick} />);
    const productName = screen.getByText(/Morty Smith/i);
    await user.click(productName);
    expect(handleCardClick).toBeCalledTimes(1);
  });
});
