import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 11rem;
  height: 13rem;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0.5rem auto;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-between;

  img {
    border-radius: 5px;
  }
`;

const ProductName = styled.span`
  font-size: 0.8rem;
  color: #3d3d4d;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(120, 217, 138);
`;

const AddButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  background: transparent;

  svg {
    color: rgb(120, 217, 138);
  }
`;

export {
  Container,
  ProductContainer,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  AddButton,
};
