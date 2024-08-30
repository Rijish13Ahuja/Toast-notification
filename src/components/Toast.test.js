import { render, screen } from '@testing-library/react';
import Toast from './Toast';

test('renders the toast message', () => {
  render(<Toast toast={{ message: 'Test Message', type: 'info', id: 1 }} removeToast={() => {}} />);
  const messageElement = screen.getByText(/Test Message/i);
  expect(messageElement).toBeInTheDocument();
});
