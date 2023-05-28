import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';
import Tag from '@/components/shared/tag';
import { getDiscountRate, getNumberWithComma } from '@/utils/math';
import { useCart } from '@/context/CartContext';
import { BLUR_DATA_URL } from '@/constants/config';
import styles from './index.module.scss';

type CartItemProps = {
  index: number;
  product: SelectedProduct;
};

export default function CartItem({ index, product }: CartItemProps) {
  const { name, originPrice, price, tag, imageUrl, selectedOption } = product;

  const { removeItem } = useCart();

  return (
    <div className={styles.wrapper}>
      <Image
        width="60"
        height="60"
        alt={name}
        src={imageUrl}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className={styles.item_info}>
        {tag && <Tag text={tag.text} color={tag.color} />}
        <span className={styles.name}>{name}</span>
        {selectedOption && <span className={styles.selected_option}>{selectedOption}</span>}
        <div>
          {originPrice ? (
            <>
              <span className={styles.origin_price}>{getNumberWithComma(originPrice)}원</span>
              <div className={styles.price_wrapper}>
                <span className={styles.discount_rate}>{getDiscountRate(originPrice, price)}%</span>
                <span className={styles.price}>{getNumberWithComma(price)}원</span>
              </div>
            </>
          ) : (
            <span className={styles.price}>{getNumberWithComma(price)}원</span>
          )}
        </div>
      </div>
      <VscClose className={styles.delete_button} onClick={() => removeItem(index)} />
    </div>
  );
}
