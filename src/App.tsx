import React from 'react';

import { StoreProvider } from './hooks/useStore';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <StoreProvider>
        <Routes />
        <GlobalStyle />
      </StoreProvider>
    </>
  );
};

export default App;
