import Image from 'next/image';
import Tag from '@/shared/tag';
import { getDiscountRate, getNumberWithComma } from '@/utils/math';
import { useState } from 'react';
import Modal from '@/shared/modal';
import ProductOption from '@/components/productOption';
import styles from './index.module.scss';

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  const { name, originPrice, price, tag, desc, imageUrl } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <li className={styles.item}>
        <button type="button" onClick={toggleModal}>
          <Image width="168" height="168" alt={name} src={imageUrl} />
          <div className={styles.info_wrapper}>
            {tag && <Tag text={tag.text} color={tag.color} />}
            <span className={styles.name}>{name}</span>
            <span className={styles.description}>{desc}</span>
          </div>
          <div>
            {originPrice ? (
              <>
                <span className={styles.origin_price}>{getNumberWithComma(originPrice)}원</span>
                <div className={styles.price_wrapper}>
                  <span className={styles.discount_rate}>
                    {getDiscountRate(originPrice, price)}%
                  </span>
                  <span className={styles.price}>{getNumberWithComma(price)}원</span>
                </div>
              </>
            ) : (
              <span className={styles.price}>{getNumberWithComma(price)}원</span>
            )}
          </div>
        </button>
      </li>
      {isModalOpen ? (
        <Modal toggleModal={toggleModal}>
          <ProductOption
            product={product}
            contentRef={undefined as never}
            handleFocusCloseButton={undefined as never}
            toggleModal={toggleModal}
          />
        </Modal>
      ) : null}
    </>
  );
}
