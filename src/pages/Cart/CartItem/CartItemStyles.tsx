import styled from 'styled-components';

interface ButtonProps {
  actionType: 'add' | 'remove';
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  height: 10rem;
  padding: 0.8rem 1rem;
  width: 90vw;
  margin-top: 1rem;

  img {
    width: 7rem;
    height: 7rem;
    border-radius: 5px;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6rem;
`;

const ProductName = styled.span`
  color: #3d3d4d;
  font-size: 1rem;
`;

const ProductPrice = styled.span`
  color: #a0a0b2;
  font-size: 0.8rem;
`;

const ProductQuantity = styled.span`
  color: #e83f5b;
  font-size: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  height: 6rem;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.actionType === 'add' ? 'rgb(120, 217, 138);' : '#e83f5b'};

  svg {
    color: #ffffff;
  }
`;

export {
  Container,
  ProductInfoContainer,
  ButtonsContainer,
  ProductName,
  ProductPrice,
  ProductQuantity,
  Button,
};
