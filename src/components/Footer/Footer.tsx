import React from 'react';
import { ShoppingCart } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../hooks/useStore';

import {
  Container,
  ItensQuantityContainer,
  ItensQuantity,
  ItensTotalPrice,
} from './FooterStyles';

const Footer = () => {
  const { totalItens, totalPrice } = useStore();
  const history = useHistory();

  const navigateToCart = () => {
    history.push('/cart');
  };

  return (
    <Container onClick={navigateToCart} data-testid="footer-container">
      <ItensQuantityContainer>
        <ShoppingCart />
        <ItensQuantity>{`${totalItens} ${
          totalItens > 1 ? 'itens' : 'vazio'
        }`}</ItensQuantity>
      </ItensQuantityContainer>
      <ItensTotalPrice>{`R$ ${totalPrice}`}</ItensTotalPrice>
    </Container>
  );
};

export default Footer;
