import styled from 'styled-components';

const Container = styled.div``;

const CartItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5rem 0;

  .empty-cart-message {
    position: absolute;
    top: 45%;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export { Container, CartItensContainer };
