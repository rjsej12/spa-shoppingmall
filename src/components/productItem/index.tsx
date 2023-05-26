import Image from 'next/image';
import Tag from '@/shared/tag';
import { getDiscountRate, getNumberWithComma } from '@/utils/math';
import styles from './index.module.scss';

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <li className={styles.item}>
      <Image width="168" height="168" alt={product.name} src={product.imageUrl} />
      <div className={styles.info_wrapper}>
        {product.tag && <Tag text={product.tag.text} color={product.tag.color} />}
        <span className={styles.name}>{product.name}</span>
        <span className={styles.description}>{product.desc}</span>
      </div>
      <div>
        {product.originPrice ? (
          <>
            <span className={styles.origin_price}>{getNumberWithComma(product.originPrice)}원</span>
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
    </li>
  );
}
