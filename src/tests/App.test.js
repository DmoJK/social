import { render, screen } from '@testing-library/react';
import IndexApp from '../App';

test('renders learn react link', () => {
  render(<IndexApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
