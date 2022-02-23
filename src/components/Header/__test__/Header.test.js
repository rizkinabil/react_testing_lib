import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed into title prop', async () => {
  render(<Header title="Header" />);
  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', async () => {
//   render(<Header title="Header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop', async () => {
//   render(<Header title="Header" />);
//   const headingElement = screen.getByRole('heading', {
//     name: 'Header',
//   });
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title="Header" />);
//   const headingElement = screen.getByTitle('the header');
//   expect(headingElement).toBeInTheDocument();
// });
