/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from 'react';

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
  handleRemoveProduct: (productId: string) => void;
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
    case 'UPDATE_CART':
      return {
        ...state,
        cart: [...action.payload],
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

  const handleAddProduct = (product: IProduct) => {
    const productIndex = store.cart.findIndex(
      (productItem: IProduct) => productItem.id === product.id,
    );

    if (productIndex < 0) {
      const updatedCart = [...store.cart, { ...product, quantity: 1 }];
      dispatch({
        type: 'UPDATE_CART',
        payload: updatedCart,
      });
    } else {
      store.cart[productIndex].quantity += 1;
      dispatch({
        type: 'UPDATE_CART',
        payload: store.cart,
      });
    }
  };

  const handleRemoveProduct = (productId: string) => {
    const productIndex = store.cart.findIndex(
      (productItem: IProduct) => productItem.id === productId,
    );

    if (productIndex > -1 && store.cart[productIndex].quantity > 1) {
      store.cart[productIndex].quantity -= 1;
      dispatch({
        type: 'UPDATE_CART',
        payload: store.cart,
      });
    } else {
      store.cart.splice(productIndex, 1);
      dispatch({
        type: 'UPDATE_CART',
        payload: store.cart,
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
        cart: store.cart,
        totalItens,
        totalPrice,
        handleAddProduct,
        handleRemoveProduct,
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
