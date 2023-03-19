import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Card } from './Card.component';

const Product = {
  category: 'office',
  description: 'Working chair dark-grey',
  id: 1,
  img: 'https://www.ikea.com/ru/ru/images/products/bleckberget-blekberget-rabochiy-stul-idekulla-temno-seryy__0814728_pe776013_s5.jpg?f=xl',
  name: 'BLECKBERGET',
  price: 59,
};

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card key={1} content={Product} />);

    const productName = screen.getByText(/bleckberget/i);
    const productDescription = screen.getByText(/Working chair dark-grey/i);
    const productPrice = screen.getByText(/59\.00 €/i);
    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(displayedImage.src).toContain('blekberget');
  });
});
