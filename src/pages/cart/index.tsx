import { getNumberWithComma, getTotalPrice } from '@/utils/math';
import CartItem from '@/components/cartItem';
import useCarts from '@/hooks/useCarts';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.scss';

export default function CartPage() {
  const { productList } = useCarts();

  return (
    <div className={styles.wrapper}>
      <div className={styles.product_list}>
        {productList.map((product, index) => (
          <CartItem key={uuidv4()} index={index} product={product} />
        ))}
      </div>
      <footer className={styles.footer}>
        <button type="button" className={styles.buy_button}>
          {productList.length}개 <div className={styles.vertical} />{' '}
          {getNumberWithComma(getTotalPrice(productList))}원 구매하기
        </button>
      </footer>
    </div>
  );
}
