import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning React when commited should be tested by Travis CI/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning React when commited should be tested by Travis CI/i);
  expect(linkElement).toBeInTheDocument();
});