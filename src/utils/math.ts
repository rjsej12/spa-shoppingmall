export const getNumberWithComma = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getDiscountRate = (origin: number, discounted: number) => {
  return Math.floor((discounted / origin) * 100);
};

export const getTotalPrice = (productList: SelectedProduct[]) => {
  return productList.reduce((acc, cur) => acc + cur.price, 0);
};
