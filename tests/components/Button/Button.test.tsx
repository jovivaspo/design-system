import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect } from 'vitest';
import { Button } from '../../../src/components/Button/Button';

it('should render button', () => {
  render(<Button label='test' />);

  expect(screen.getByText('test')).toBeInTheDocument();
});
