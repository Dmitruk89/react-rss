import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';

import React from 'react';
import { Toast } from './Toast.component';
import { renderWithProviders } from '../../utils/redux-render';

const toastList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
  },
];

describe('Toast', () => {
  it('renders correctly', () => {
    renderWithProviders(<Toast list={toastList} position="top-left" />);
    const title = screen.getByText('Success');
    expect(title).toBeInTheDocument();
  });
});
