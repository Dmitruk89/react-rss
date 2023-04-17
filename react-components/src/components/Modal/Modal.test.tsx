import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { Modal } from './Modal.component';

describe('Modal', () => {
  it('renders correctly', () => {
    renderWithProviders(<Modal />);
    const modalElement = screen.getByTestId('modal-element');
    expect(modalElement).toBeInTheDocument();
  });
});
