import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

jest.mock('../../hooks/useStore', () => {
  return {
    useStore() {
      return {
        cart: [
          {
            id: 'fake-id',
            image: 'fake-image',
            name: 'fake-name',
            price: 100,
            stock: 10,
            quantity: 1,
          },
          {
            id: 'fake-id-2',
            image: 'fake-image-2',
            name: 'fake-name-2',
            price: 100,
            stock: 10,
            quantity: 1,
          },
        ],
      };
    },
  };
});

describe('Cart page', () => {
  it('renders correctly', () => {
    render(<Cart />);
    expect(screen.getByTestId('header-container')).toBeInTheDocument();
    expect(screen.getByTestId('footer-container')).toBeInTheDocument();
    expect(screen.getByTestId('cart-itens-container')).toBeInTheDocument();
  });

  it('list cart itens correctly', () => {
    render(<Cart />);
    const cartList = screen.getByTestId('cart-itens-container');
    expect(cartList.children.length).toBe(2);
  });
});
