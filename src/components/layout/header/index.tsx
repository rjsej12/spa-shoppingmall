import { RxHamburgerMenu } from 'react-icons/rx';
import { FiShoppingCart } from 'react-icons/fi';
import { useRouter } from 'next/router';
import ROUTE_PATHS from '@/constants/config';
import styles from './index.module.scss';

export default function LayoutHeader() {
  const router = useRouter();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.icon_wrapper}>
        <button type="button" onClick={() => router.push(ROUTE_PATHS.shop)}>
          <RxHamburgerMenu />
        </button>
      </div>
      <h1 className={styles.title}>Refilled</h1>
      <div className={styles.icon_wrapper}>
        <button type="button" onClick={() => router.push(ROUTE_PATHS.cart)}>
          <FiShoppingCart />
        </button>
      </div>
    </nav>
  );
}
