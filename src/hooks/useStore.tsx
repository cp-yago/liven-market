/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from 'react';

import {
  ToastContainer,
  toastSuccess,
  toastError,
} from '../components/Toast/Toast';

import IProduct from '../interfaces/IProduct';
import IProductsOnCart from '../interfaces/IProductsOnCart';
import productItemDTO from '../dtos/productsItemDTO';
import api from '../services/api';

interface StoreStateData {
  products: IProduct[];
  cart: IProductsOnCart[];
  totalItens: number;
  totalPrice: number;
}

interface StoreContextData extends StoreStateData {
  handleAddProduct: (product: IProduct) => void;
  handleRemoveProduct: (product: IProduct) => void;
}

const initialState = {
  products: [],
  cart: [],
  totalItens: 0,
  totalPrice: 0,
};

const storeReducer = (state: StoreStateData, action: any) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_LIST':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_PRODUCT':
      const productToAdd = action.payload;
      const productIndex = state.cart.findIndex(
        item => item.id === productToAdd.id,
      );
      if (productIndex < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...productToAdd, quantity: 1 }],
        };
      }
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          if (productIndex !== index) {
            return item;
          }
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }),
      };
    case 'REMOVE_PRODUCT':
      const productToRemove = action.payload;
      const productToRemoveIndex = state.cart.findIndex(
        item => item.id === productToRemove.id,
      );

      if (
        productToRemoveIndex > -1 &&
        state.cart[productToRemoveIndex].quantity > 1
      ) {
        return {
          ...state,
          cart: state.cart.map((item, index) => {
            if (productToRemoveIndex !== index) {
              return item;
            }
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }),
        };
      }
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== productToRemove.id),
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

  const totalItens = useMemo(() => {
    const allQuantities = store.cart.map(item => item.quantity);
    if (allQuantities.length >= 1) {
      return allQuantities.reduce(
        (total, itemQuantity) => total + itemQuantity,
      );
    }
    return 0;
  }, [store.cart]);

  const totalPrice = useMemo(() => {
    const allPrices = store.cart.map(
      item => parseFloat(item.price) * item.quantity,
    );
    if (allPrices.length >= 1) {
      return allPrices.reduce((total, itemPrice) => total + itemPrice);
    }
    return 0;
  }, [store.cart]);

  const getProducts = async () => {
    const response = await api.get('/product');

    if (!response.data) {
      toastError('Erro ao buscar produtos');
    } else {
      const products = response.data.map((product: any) =>
        productItemDTO(product),
      );

      dispatch({
        type: 'UPDATE_PRODUCT_LIST',
        payload: products,
      });
    }
  };

  const handleAddProduct = (product: IProduct) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
    toastSuccess('Produto adicionado com sucesso!');
  };

  const handleRemoveProduct = (product: IProduct) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product,
    });
    toastSuccess('Produto removido!');
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products: store.products,
        cart: store.cart,
        totalItens,
        totalPrice,
        handleAddProduct,
        handleRemoveProduct,
      }}
    >
      {children}
      <ToastContainer />
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
};
