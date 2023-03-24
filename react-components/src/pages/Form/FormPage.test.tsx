import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { FormPage } from './FormPage';
import userEvent from '@testing-library/user-event';

global.URL.createObjectURL = vi.fn();

describe('FormPage', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    render(<FormPage />);
    const title = screen.getByRole('heading', { name: /form page/i });
    expect(title).toBeInTheDocument();
  });
  it('adds card on form submit', async () => {
    render(<FormPage />);
    await user.type(screen.getByRole('textbox', { name: /username:/i }), 'dimon');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByLabelText(/upload your avatar/i);

    await user.upload(input, file);
    await user.click(screen.getByRole('checkbox', { name: /i never read tearms and conditions/i }));
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const cardTitle = screen.getByRole('heading', { name: /dimon/i });
    const toasterTitle = screen.getByText('Success');
    expect(cardTitle).toBeInTheDocument();
    expect(toasterTitle).toBeInTheDocument();
  });
  it('shows error message on fail form submit', async () => {
    render(<FormPage />);
    await user.type(screen.getByRole('textbox', { name: /username:/i }), 'dimon');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const toasterTitle = screen.getByText('Error');
    expect(toasterTitle).toBeInTheDocument();
  });
  it('closes notyfication by clicking on it', async () => {
    render(<FormPage />);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const toasterTitle = screen.getByText('Error');
    await user.click(toasterTitle);
    expect(toasterTitle).not.toBeInTheDocument();
  });
});
