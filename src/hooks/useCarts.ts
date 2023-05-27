import { useEffect, useState } from 'react';
import LOCALSTORAGE_CART_KEY from '@/constants/cart';

export default function useCarts() {
  const [productList, setProductList] = useState<SelectedProduct[]>([]);

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

  useEffect(() => {
    const savedCarts = localStorage.getItem(LOCALSTORAGE_CART_KEY);
    if (savedCarts) setProductList(JSON.parse(savedCarts));
  }, []);

  return { productList, addCarts, removeItem };
}
