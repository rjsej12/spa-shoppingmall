import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';
import Tag from '@/shared/tag';
import { getDiscountRate, getNumberWithComma } from '@/utils/math';
import styles from './index.module.scss';

const product = {
  id: 1,
  name: '헤어 리커버리 사이토카인™ 샴푸 플러스',
  originPrice: 66500,
  price: 29000,
  tag: {
    color: 'gray',
    text: 'NEW',
  },
  imageUrl:
    'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914274085.jpg',
  selectedOption: '모이스처',
};

export default function CartItem() {
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
      <VscClose className={styles.delete_button} />
    </div>
  );
}
