import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Molecular Weight Calculator text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Molecular Weight Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
