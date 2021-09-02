import React from 'react';
import { ShoppingCart } from 'react-feather';

import {
  Container,
  ItensQuantityContainer,
  ItensQuantity,
  ItensTotalPrice,
} from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ItensQuantityContainer>
        <ShoppingCart />
        <ItensQuantity>16 itens</ItensQuantity>
      </ItensQuantityContainer>
      <ItensTotalPrice>R$ 5000.00</ItensTotalPrice>
    </Container>
  );
};

export default Footer;
