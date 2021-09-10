import React from 'react';
import { Plus, Minus } from 'react-feather';
import { useStore } from '../../../hooks/useStore';
import IProductsOnCart from '../../../interfaces/IProductsOnCart';

import {
  Container,
  ProductInfoContainer,
  ButtonsContainer,
  ProductName,
  ProductQuantity,
  ProductPrice,
  Button,
} from './CartItemStyles';

interface CartItemProps {
  product: IProductsOnCart;
}

const CartItem = ({ product }: CartItemProps) => {
  const { handleAddProduct, handleRemoveProduct } = useStore();

  return (
    <Container>
      <img src={product.image} alt="product" />

      <ProductInfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{`R$ ${product.price}`}</ProductPrice>
        <ProductQuantity>{`${product.quantity}x R$ ${
          product.price * product.quantity
        }`}</ProductQuantity>
      </ProductInfoContainer>

      <ButtonsContainer>
        <Button
          data-testid="add-button"
          actionType="add"
          onClick={() => handleAddProduct(product)}
        >
          <Plus />
        </Button>
        <Button
          data-testid="remove-button"
          actionType="remove"
          onClick={() => handleRemoveProduct(product)}
        >
          <Minus />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default CartItem;
