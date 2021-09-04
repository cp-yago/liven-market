import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';

import Container from './HeaderStyles';

import LivenLogo from '../../assets/img/icon-logo-white.png';

interface HeaderProps {
  showGoBackButton?: boolean;
}

const Header = ({ showGoBackButton }: HeaderProps) => {
  const history = useHistory();

  return (
    <Container>
      {showGoBackButton && (
        <ArrowLeft
          onClick={() => history.push('/')}
          data-testid="go-back-button"
        />
      )}
      <img src={LivenLogo} alt="Logo" />
      <span>LivenMarket</span>
    </Container>
  );
};

Header.defaultProps = {
  showGoBackButton: false,
};

export default Header;
