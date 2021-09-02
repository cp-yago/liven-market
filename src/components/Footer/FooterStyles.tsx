import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  height: 4.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(120, 217, 138);
`;

const ItensQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
  padding: 0.2rem;
`;

const ItensQuantity = styled.span`
  font-weight: 700;
`;

const ItensTotalPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export { Container, ItensQuantityContainer, ItensQuantity, ItensTotalPrice };
