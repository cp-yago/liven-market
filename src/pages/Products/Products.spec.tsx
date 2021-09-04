import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './Products';

jest.mock('../../hooks/useStore', () => {
  return {
    useStore() {
      return {
        products: [
          {
            id: 'fake-id',
            image: 'fake-image',
            name: 'fake-name',
            price: 100,
            stock: 10,
          },
          {
            id: 'fake-id-2',
            image: 'fake-image-2',
            name: 'fake-name-2',
            price: 100,
            stock: 10,
          },
        ],
      };
    },
  };
});

describe('Products page', () => {
  it('renders correctly', () => {
    render(<Products />);
    expect(screen.getByTestId('header-container')).toBeInTheDocument();
    expect(screen.getByTestId('footer-container')).toBeInTheDocument();
    expect(screen.getByTestId('product-list-container')).toBeInTheDocument();
  });

  it('list products correctly', () => {
    render(<Products />);
    const productList = screen.getByTestId('product-list-container');
    expect(productList.children.length).toBe(2);
  });
});
