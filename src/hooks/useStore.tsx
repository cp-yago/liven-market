import React, { createContext, useContext, useEffect, useReducer } from 'react';

import IProduct from '../interfaces/IProduct';
import productItemDTO from '../dtos/productsItemDTO';
import api from '../services/api';

interface StoreContextData {
  products: IProduct[];
}

const initialState = {
  products: [],
};

const storeReducer = (state: StoreContextData, action: any) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_LIST':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData,
);

export const StoreProvider: React.FC = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialState);

  const getProducts = async () => {
    const response = await api.get('/product');

    if (response.data) {
      const products = response.data.map((product: any) =>
        productItemDTO(product),
      );

      dispatch({
        type: 'UPDATE_PRODUCT_LIST',
        payload: products,
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products: store.products,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
};
