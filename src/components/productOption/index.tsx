import ProductOptionSelect from '@/components/productOption/productOptionSelect';
import { useState } from 'react';
import DEFAULT_OPTION from '@/constants/product';
import useCarts from '@/hooks/useCarts';
import styles from './index.module.scss';

type ProductOptionProps = {
  product: Product;
  contentRef: React.RefObject<HTMLElement>;
  handleFocusCloseButton: (e: React.KeyboardEvent) => void;
  toggleModal: () => void;
};

export default function ProductOption({
  product,
  contentRef,
  handleFocusCloseButton,
  toggleModal,
}: ProductOptionProps) {
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTION);
  const { addCarts } = useCarts();

  const addCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { id, name, originPrice, price, tag, imageUrl } = product;
    const selectedItem: SelectedProduct = {
      id,
      name,
      originPrice,
      price,
      tag,
      imageUrl,
      selectedOption: selectedOption === DEFAULT_OPTION ? '' : selectedOption,
    };
    console.log('option', selectedItem);
    addCarts(selectedItem);
    setTimeout(() => {
      toggleModal();
    });
  };
  return (
    <form className={styles.wrapper}>
      <h1 className={styles.name}>{product.name}</h1>
      <ProductOptionSelect
        options={product.productOptions}
        contentRef={contentRef}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleFocusCloseButton={handleFocusCloseButton}
      />
      <button type="submit" className={styles.add_button} onClick={addCart}>
        장바구니 담기
      </button>
    </form>
  );
}
