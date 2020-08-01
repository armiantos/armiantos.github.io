import React from 'react';
import { render } from '@testing-library/react';
import Portfolio from './Portfolio';

test('renders learn react link', () => {
  const { getByText } = render(<Portfolio />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
