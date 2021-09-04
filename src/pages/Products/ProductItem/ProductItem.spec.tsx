import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

const mockedHandleAddProduct = jest.fn();
const product = {
  id: 'fake-id',
  image: 'fake-image',
  name: 'fake-name',
  price: 100,
  stock: 10,
};

jest.mock('../../../hooks/useStore', () => {
  return {
    useStore() {
      return {
        handleAddProduct: mockedHandleAddProduct,
      };
    },
  };
});

describe('ProductItem component', () => {
  it('renders correctly', () => {
    render(<ProductItem key="fake-key" product={product} />);

    expect(screen.getByText('fake-name')).toBeInTheDocument();
    expect(screen.getByText('R$ 100')).toBeInTheDocument();
  });

  it('add new product when click on add button', () => {
    render(<ProductItem key="fake-key" product={product} />);
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
    expect(mockedHandleAddProduct).toHaveBeenCalledWith(product);
  });
});
