import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/redux-render';

import React from 'react';
import { FormCard } from './FormCard.component';

const file = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});
const file2 = new File(['this is test file'], 'test.txt', {
  type: 'text/plain',
});
const input = document.createElement('input');
input.setAttribute('type', 'file');
input.setAttribute('name', 'file-upload');
input.multiple = true;
const mockFileList = Object.create(input.files);
mockFileList[0] = file;
mockFileList[1] = file2;
Object.defineProperty(mockFileList, 'length', { value: 2 });

const formData = {
  name: 'Dimon',
  agree: 'aha',
  birthday: '15.07.1989',
  avatarFile: mockFileList,
  spam: 'no',
  gender: 'man',
};

describe('FormCard', () => {
  it('renders correctly', () => {
    renderWithProviders(<FormCard key={1} formData={formData} />);
    const name = screen.getByText('Dimon');
    expect(name).toBeInTheDocument();
  });
});
