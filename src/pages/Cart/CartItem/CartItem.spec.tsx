import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from './CartItem';

const mockedHandleAddProduct = jest.fn();
const mockedHandleRemoveProduct = jest.fn();

jest.mock('../../../hooks/useStore', () => {
  return {
    useStore() {
      return {
        handleAddProduct: mockedHandleAddProduct,
        handleRemoveProduct: mockedHandleRemoveProduct,
      };
    },
  };
});
describe('CartItem component', () => {
  it('renders correctly', () => {
    render(
      <CartItem
        product={{
          id: 'fake-id',
          name: 'fake-name',
          image: 'fake-image',
          price: 100,
          quantity: 1,
          stock: 2000,
        }}
      />,
    );

    expect(screen.getByText('fake-name')).toBeInTheDocument();
    expect(screen.getByText('R$ 100')).toBeInTheDocument();
    expect(screen.getByText('1x R$ 100')).toBeInTheDocument();
  });

  it('add new product when click on add button', () => {
    render(
      <CartItem
        product={{
          id: 'fake-id',
          name: 'fake-name',
          image: 'fake-image',
          price: 100,
          quantity: 1,
          stock: 2000,
        }}
      />,
    );
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    expect(mockedHandleAddProduct).toHaveBeenCalledWith({
      id: 'fake-id',
      name: 'fake-name',
      image: 'fake-image',
      price: 100,
      quantity: 1,
      stock: 2000,
    });
  });

  it('remove product when click on remove button', () => {
    render(
      <CartItem
        product={{
          id: 'fake-id',
          name: 'fake-name',
          image: 'fake-image',
          price: 100,
          quantity: 1,
          stock: 2000,
        }}
      />,
    );
    const removeButton = screen.getByTestId('remove-button');
    fireEvent.click(removeButton);

    expect(mockedHandleRemoveProduct).toHaveBeenCalledWith('fake-id');
  });
});
