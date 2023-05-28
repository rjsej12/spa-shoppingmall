import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';
import Tag from '@/shared/tag';
import { getDiscountRate, getNumberWithComma } from '@/utils/math';
import { useCart } from '@/context/CartContext';
import styles from './index.module.scss';

type CartItemProps = {
  index: number;
  product: SelectedProduct;
};

export default function CartItem({ index, product }: CartItemProps) {
  const { removeItem } = useCart();

  return (
    <div className={styles.wrapper}>
      <Image width="60" height="60" alt={product.name} src={product.imageUrl} />
      <div className={styles.item_info}>
        {product.tag && <Tag text={product.tag.text} color={product.tag.color} />}
        <span className={styles.name}>{product.name}</span>
        {product.selectedOption && (
          <div className={styles.selected_option}>{product.selectedOption}</div>
        )}
        <div>
          {product.originPrice ? (
            <>
              <span className={styles.origin_price}>
                {getNumberWithComma(product.originPrice)}원
              </span>
              <div className={styles.price_wrapper}>
                <span className={styles.discount_rate}>
                  {getDiscountRate(product.originPrice, product.price)}%
                </span>
                <span className={styles.price}>{getNumberWithComma(product.price)}원</span>
              </div>
            </>
          ) : (
            <span className={styles.price}>{getNumberWithComma(product.price)}원</span>
          )}
        </div>
      </div>
      <VscClose className={styles.delete_button} onClick={() => removeItem(index)} />
    </div>
  );
}
