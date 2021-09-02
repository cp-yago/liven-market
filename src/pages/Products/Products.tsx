import React from 'react';

import { Container, ProductsContainer } from './ProductsStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductItem from './ProductItem/ProductItem';

import { useStore } from '../../hooks/useStore';

const Products: React.FC = () => {
  const { products } = useStore();

  return (
    <>
      <Header />
      <Container>
        <ProductsContainer>
          {products.map(product => (
            <ProductItem
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </ProductsContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Products;
