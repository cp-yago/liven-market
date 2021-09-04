import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

jest.mock('../../hooks/useStore', () => {
  return {
    useStore() {
      return {
        totalItens: 10,
        totalPrice: 100.0,
      };
    },
  };
});

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText('10 itens')).toBeInTheDocument();
    expect(screen.getByText('R$ 100')).toBeInTheDocument();
  });

  it('redirects to cart page when clicked', async () => {
    render(<Footer />);

    const footer = await screen.findByTestId('footer-container');
    fireEvent.click(footer);
    expect(mockHistoryPush).toHaveBeenCalledWith('/cart');
  });
});
