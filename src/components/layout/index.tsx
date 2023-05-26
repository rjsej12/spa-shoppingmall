import LayoutHeader from '@/components/layout/header';
import styles from './index.module.scss';

type ILayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left} />
      <div className={styles.main}>
        <LayoutHeader />
        <div>{children}</div>
      </div>
      <div className={styles.right} />
    </div>
  );
}
