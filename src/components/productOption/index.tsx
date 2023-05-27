import ProductOptionSelect from '@/components/productOption/productOptionSelect';
import styles from './index.module.scss';

type ProductOptionProps = {
  product: Product;
  contentRef: React.RefObject<HTMLElement>;
  handleFocusCloseButton: (e: React.KeyboardEvent) => void;
};

export default function ProductOption({
  product,
  contentRef,
  handleFocusCloseButton,
}: ProductOptionProps) {
  return (
    <form className={styles.wrapper}>
      <h1 className={styles.name}>{product.name}</h1>
      <ProductOptionSelect
        options={product.productOptions}
        contentRef={contentRef}
        handleFocusCloseButton={handleFocusCloseButton}
      />
      <button type="submit" className={styles.add_button}>
        장바구니 담기
      </button>
    </form>
  );
}
