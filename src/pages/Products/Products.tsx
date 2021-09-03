import React from 'react';

import { Container, ProductsContainer } from './ProductsStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductItem from './ProductItem/ProductItem';

import { useStore } from '../../hooks/useStore';

const Products = () => {
  const { products } = useStore();

  return (
    <>
      <Header />
      <Container>
        <ProductsContainer>
          {products.map(product => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ProductsContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Products;
