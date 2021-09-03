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

import { useStore } from '../../../hooks/useStore';
import IProduct from '../../../interfaces/IProduct';

interface ProductItemProps {
  product: IProduct;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { handleAddProduct } = useStore();

  return (
    <Container>
      <ProductContainer>
        <img src={product.image} alt="product" />
        <ProductName>{product.name}</ProductName>
      </ProductContainer>
      <ProductPriceContainer>
        <ProductPrice>{`R$ ${product.price}`}</ProductPrice>
        <AddButton onClick={() => handleAddProduct(product)}>
          <PlusSquare />
        </AddButton>
      </ProductPriceContainer>
    </Container>
  );
};

export default ProductItem;
