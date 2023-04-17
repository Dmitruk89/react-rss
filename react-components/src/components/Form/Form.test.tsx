import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { Form } from './Form.component';
import userEvent from '@testing-library/user-event';

global.URL.createObjectURL = vi.fn();

describe('FormComponent', () => {
  const user = userEvent.setup();
  it('renders correctly', () => {
    renderWithProviders(<Form />);
    const usernameInput = screen.getByRole('textbox', { name: /username:/i });
    expect(usernameInput).toBeInTheDocument();
  });
  it('radio group works correctly', async () => {
    renderWithProviders(<Form />);
    const radioNoInput = screen.getByRole('radio', { name: /no way!/i });
    const radioYesInput = screen.getByRole('radio', { name: /sure/i });
    await user.click(radioNoInput);
    expect(radioNoInput).toBeChecked();
    expect(radioYesInput).not.toBeChecked();
  });
  it('validate usernameInput on empty value correctly', async () => {
    renderWithProviders(<Form />);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const usernameValidator = screen.getByText(
      'Name is required and should have length minimum 4 characters'
    );
    expect(usernameValidator).toBeVisible();
  });
  it('validate avatarInput on empty value correctly', async () => {
    renderWithProviders(<Form />);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const avatrValidator = screen.getByText(
      'Card looks ugly withot image, so choosing the image is required'
    );
    expect(avatrValidator).toBeVisible();
  });
  it('validate agreeInput on empty value correctly', async () => {
    renderWithProviders(<Form />);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    const agreeValidator = screen.getByText('This checkmark is required');
    expect(agreeValidator).toBeVisible();
  });
  it('submitted on valid value', async () => {
    renderWithProviders(<Form />);
    await user.type(screen.getByRole('textbox', { name: /username:/i }), 'dimon');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByLabelText(/upload your avatar/i);

    await user.upload(input, file);
    await user.click(screen.getByRole('checkbox', { name: /i never read tearms and conditions/i }));
    await user.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByRole('textbox', { name: /username:/i })).toHaveTextContent('');
  });
});
