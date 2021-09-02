import React from 'react';

import { Container, CartItensContainer } from './CartStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from './CartItem/CartItem';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />

      <CartItensContainer>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </CartItensContainer>

      <Footer />
    </Container>
  );
};

export default Cart;
