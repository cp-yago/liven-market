import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from 'react';

import IProduct from '../interfaces/IProduct';
import productItemDTO from '../dtos/productsItemDTO';
import api from '../services/api';

interface ProductOnCart extends IProduct {
  quantity: number;
}

interface StoreStateData {
  products: IProduct[];
  cart: ProductOnCart[];
  totalItens: number;
  totalPrice: number;
}

interface StoreContextData extends StoreStateData {
  // eslint-disable-next-line no-unused-vars
  handleAddProduct: (product: IProduct) => void;
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
