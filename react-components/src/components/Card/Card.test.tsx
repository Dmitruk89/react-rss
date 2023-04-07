import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Card } from './Card.component';
import userEvent from '@testing-library/user-event';

const Character = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    // ...
  ],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
};

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
