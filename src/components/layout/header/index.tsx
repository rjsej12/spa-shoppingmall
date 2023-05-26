import { RxHamburgerMenu } from 'react-icons/rx';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './index.module.scss';

export default function LayoutHeader() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.icon_wrapper}>
        <RxHamburgerMenu />
      </div>
      <h1 className={styles.title}>Refilled</h1>
      <div className={styles.icon_wrapper}>
        <FiShoppingCart />
      </div>
    </nav>
  );
}
