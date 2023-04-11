import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { LoadingSpinner } from './Spinner.component';

describe('LoadingSpinner', () => {
  it('renders correctly', () => {
    render(<LoadingSpinner />);
    const modalElement = screen.getByTestId('spinner-element');
    expect(modalElement).toBeInTheDocument();
  });
});
