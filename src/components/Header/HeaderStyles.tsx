import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  background: rgb(8, 1, 42);

  position: fixed;
  z-index: 1;

  img {
    width: 2rem;
    margin-right: 0.8rem;
  }
`;

export default Container;
