declare type Product = {
  id: number;
  name: string;
  originPrice: number;
  price: number;
  tag: any;
  desc: string;
  imageUrl: string;
  productOptions: ProductOption[];
};

type ProductOption = {
  id: number;
  name: string;
  price: number;
  stock: number;
};
