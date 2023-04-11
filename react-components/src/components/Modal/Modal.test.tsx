import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Modal } from './Modal.component';
import userEvent from '@testing-library/user-event';
import { characters } from '../../mock/characters';

const character = characters[0];
const setIsModalOpen = vi.fn();

describe('Modal', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    render(<Modal setIsOpen={setIsModalOpen} content={character} />);
    const modalElement = screen.getByTestId('modal-element');
    expect(modalElement).toBeInTheDocument();
  });
  it('calls setIsModalOpen on close-button click', async () => {
    render(<Modal setIsOpen={setIsModalOpen} content={character} />);
    const modalCloseBtn = screen.getByTestId('modal-close-btn');
    await user.click(modalCloseBtn);
    expect(setIsModalOpen).toBeCalledTimes(1);
  });
});
