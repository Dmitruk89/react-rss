import { describe, it } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { CardList } from './CardList.component';

describe('CardLIst', () => {
  it('renders correctly', () => {
    renderWithProviders(<CardList />);
    waitFor(() => {
      expect(screen.queryByTestId('card-list-element')).toBeInTheDocument();
    });
  });
  it('renders list of cards', async () => {
    renderWithProviders(<CardList />);
    const cards = await screen.findAllByTestId('card-element');
    expect(cards).toHaveLength(20);
  });
});
