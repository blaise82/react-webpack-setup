import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Welcome from './Welcome';

it('renders', () => {
  const { asFragment } = render(<Welcome />);
  expect(asFragment()).toMatchSnapshot()
});