import ProductItem from '@/components/productItem';
import getProducts from '@/api/getProducts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './index.module.scss';

type ShopPageProps = {
  products: Product[];
};

export default function ShopPage({ products }: ShopPageProps) {
  const { data: productList } = useQuery(['products'], getProducts, { initialData: products });

  return (
    <>
      <h2 className={styles.title}>
        <span>사이토카인.</span>
        <span className={styles.description}>완벽한 탈모케어를 위한 선택</span>
      </h2>
      <ul className={styles.product_list}>
        {productList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const result = await axios.get('https://file.refilled.co.kr/assignment/product.json');

  return { props: { products: result.data } };
}
