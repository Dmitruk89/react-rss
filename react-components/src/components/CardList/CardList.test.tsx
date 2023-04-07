import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { CardList } from './CardList.component';
import { characters } from '../../mock/characters';

const onCardClick = vi.fn();

describe('CardLIst', () => {
  it('renders correctly', () => {
    render(<CardList data={characters} onCardClick={onCardClick} />);
    const cardList = screen.getByTestId('card-list-element');
    expect(cardList).toBeInTheDocument();
  });
  it('renders list of cards', () => {
    render(<CardList data={characters} onCardClick={onCardClick} />);
    const cards = screen.getAllByTestId('card-element');
    expect(cards).toHaveLength(characters.length);
  });
});
