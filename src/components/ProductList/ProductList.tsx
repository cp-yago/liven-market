import React from 'react';

import ProductItem from './ProductItem/ProductItem';
import Container from './ProductListStyles';

const ProductList = () => {
  return (
    <Container>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Container>
  );
};

export default ProductList;
