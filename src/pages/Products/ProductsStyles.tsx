import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const ProductsContainer = styled.div`
  display: flex;
  width: 90vw;
  flex-flow: row wrap;
  padding: 5rem 0;
`;

export { Container, ProductsContainer };
