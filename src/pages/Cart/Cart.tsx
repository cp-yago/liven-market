import React from 'react';

import { Container, CartItensContainer } from './CartStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from './CartItem/CartItem';
import { useStore } from '../../hooks/useStore';

const Cart: React.FC = () => {
  const { cart } = useStore();
  return (
    <Container>
      <Header />

      <CartItensContainer>
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItensContainer>

      <Footer />
    </Container>
  );
};

export default Cart;
