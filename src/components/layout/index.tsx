import LayoutHeader from '@/components/layout/header';
import styles from './index.module.scss';

type ILayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <span className={styles.phrase}>
          지금 바로 <br /> 리필드를 검색하세요!
        </span>
      </div>
      <div className={styles.main}>
        <LayoutHeader />
        <div>{children}</div>
      </div>
      <div className={styles.right} />
    </div>
  );
}
