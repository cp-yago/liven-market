import React from 'react';

import Container from './HeaderStyles';

import LivenLogo from '../../assets/img/icon-logo-white.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LivenLogo} alt="Logo" />
      <span>LivenMarket</span>
    </Container>
  );
};

export default Header;
