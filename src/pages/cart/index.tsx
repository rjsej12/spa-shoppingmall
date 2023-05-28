import { getNumberWithComma, getTotalPrice } from '@/utils/math';
import CartItem from '@/components/cartItem';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';
import { ROUTE_PATHS } from '@/constants/config';
import styles from './index.module.scss';

export default function CartPage() {
  const router = useRouter();

  const { productList } = useCart();

  return (
    <div className={styles.wrapper}>
      {productList.length !== 0 ? (
        <>
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
        </>
      ) : (
        <div className={styles.no_product}>
          <h2 className={styles.title}>장바구니에 담긴 상품이 없습니다.</h2>
          <p className={styles.sub}>원하는 상품을 장바구니에 담아보세요!</p>
          <button type="button" onClick={() => router.push(ROUTE_PATHS.shop)}>
            쇼핑 계속하기
          </button>
        </div>
      )}
    </div>
  );
}
