import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Toast } from './Toast.component';

const toastList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
  },
];

const closeToast = () => {
  return;
};

describe('Toast', () => {
  it('renders correctly', () => {
    render(<Toast list={toastList} onCloseToast={closeToast} position="top-left" />);
    const title = screen.getByText('Success');
    expect(title).toBeInTheDocument();
  });
});
