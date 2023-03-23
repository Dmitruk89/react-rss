import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { FormCard } from './FormCard.component';

const formData = {
  name: 'Dimon',
  agree: 'aha',
  birthday: '15.07.1989',
  avatar: 'string',
  spam: 'no',
  gender: 'man',
};

describe('FormCard', () => {
  it('renders correctly', () => {
    render(<FormCard key={1} formData={formData} />);
    const name = screen.getByText('Dimon');
    expect(name).toBeInTheDocument();
  });
});
