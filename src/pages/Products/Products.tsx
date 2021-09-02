import React from 'react';

import { Container, ProductsContainer } from './ProductsStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductItem from './ProductItem/ProductItem';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductsContainer>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductsContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Products;
