import { getNumberWithComma, getTotalPrice } from '@/utils/math';
import CartItem from '@/components/cartItem';
import styles from './index.module.scss';

const productList = [
  {
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
  },
  {
    id: 2,
    name: '헤어 리커버리 사이토카인™ 부스터 플러스',
    originPrice: 76000,
    price: 29500,
    tag: {
      color: 'blue',
      text: 'BEST',
    },
    imageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914379618.jpg',
    selectedOption: '세럼',
  },
  {
    id: 3,
    name: '헤어 리커버리 사이토카인™ 이펙터 플러스',
    originPrice: 62000,
    price: 24000,
    tag: '',
    imageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914379618.jpg',
    selectedOption: '',
  },
];

export default function CartPage() {
  return (
    <div className={styles.wrapper}>
      <CartItem />
      <footer className={styles.footer}>
        <button type="button" className={styles.buy_button}>
          {productList.length}개 <div className={styles.vertical} />{' '}
          {getNumberWithComma(getTotalPrice(productList))}원 구매하기
        </button>
      </footer>
    </div>
  );
}
