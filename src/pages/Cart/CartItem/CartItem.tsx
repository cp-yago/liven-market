import React from 'react';
import { Plus, Minus } from 'react-feather';

import {
  Container,
  ProductInfoContainer,
  ButtonsContainer,
  ProductName,
  ProductQuantity,
  ProductPrice,
  Button,
} from './CartItemStyles';

const CartItem: React.FC = () => {
  return (
    <Container>
      <img src="http://lorempixel.com/640/480/nightlife" alt="" />

      <ProductInfoContainer>
        <ProductName>Rustic Metal Fish</ProductName>
        <ProductPrice>R$ 300.00</ProductPrice>
        <ProductQuantity>1x R$ 300.00</ProductQuantity>
      </ProductInfoContainer>

      <ButtonsContainer>
        <Button actionType="add">
          <Plus />
        </Button>
        <Button actionType="remove">
          <Minus />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default CartItem;
