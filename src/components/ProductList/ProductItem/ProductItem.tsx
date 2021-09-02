import React from 'react';
import { PlusSquare } from 'react-feather';

import {
  Container,
  ProductContainer,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  AddButton,
} from './ProductItemStyles';

const ProductItem: React.FC = () => {
  return (
    <Container>
      <ProductContainer>
        <img src="http://lorempixel.com/640/480/food" alt="" />
        <ProductName>Cadeira Gamer Charles</ProductName>
      </ProductContainer>
      <ProductPriceContainer>
        <ProductPrice>R$ 300, 00</ProductPrice>
        <AddButton>
          <PlusSquare />
        </AddButton>
      </ProductPriceContainer>
    </Container>
  );
};

export default ProductItem;
