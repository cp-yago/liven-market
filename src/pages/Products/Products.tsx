import React from 'react';

import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default Products;
