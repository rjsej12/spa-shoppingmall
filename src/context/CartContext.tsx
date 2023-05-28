import LOCALSTORAGE_CART_KEY from '@/constants/cart';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type CartContextType = {
  productList: SelectedProduct[];
  addCarts: (newProduct: SelectedProduct) => void;
  removeItem: (index: number) => void;
};

type CartProviderProps = {
  children: JSX.Element;
};

const CartContext = createContext<CartContextType>({
  productList: [],
  addCarts: () => {},
  removeItem: () => {},
});

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [productList, setProductList] = useState<SelectedProduct[]>([]);

  useEffect(() => {
    const savedCarts = localStorage.getItem(LOCALSTORAGE_CART_KEY);
    if (savedCarts) setProductList(JSON.parse(savedCarts));
  }, []);

  const addCarts = (newProduct: SelectedProduct) => {
    setProductList(prevProducts => {
      const newCarts = [...prevProducts, newProduct];

      localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(newCarts));

      return newCarts;
    });
  };

  const removeItem = (index: number) => {
    setProductList(prevProducts => {
      const newCarts = [...prevProducts];
      newCarts.splice(index, 1);

      localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(newCarts));

      return newCarts;
    });
  };

  const value = useMemo(() => {
    return { productList, addCarts, removeItem };
  }, [productList]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
