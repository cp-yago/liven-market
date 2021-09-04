import React from 'react';

import { Container, CartItensContainer } from './CartStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from './CartItem/CartItem';
import { useStore } from '../../hooks/useStore';

const Cart = () => {
  const { cart } = useStore();

  return (
    <Container>
      <Header showGoBackButton />

      <CartItensContainer data-testid="cart-itens-container">
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItensContainer>

      <Footer />
    </Container>
  );
};

export default Cart;
