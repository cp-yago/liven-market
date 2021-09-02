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

interface ProductItemProps {
  name: string;
  image: string;
  price: string;
}

const ProductItem = ({ name, image, price }: ProductItemProps) => {
  return (
    <Container>
      <ProductContainer>
        <img src={image} alt="product" />
        <ProductName>{name}</ProductName>
      </ProductContainer>
      <ProductPriceContainer>
        <ProductPrice>{`R$ ${price}`}</ProductPrice>
        <AddButton>
          <PlusSquare />
        </AddButton>
      </ProductPriceContainer>
    </Container>
  );
};

export default ProductItem;
