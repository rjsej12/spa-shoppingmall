import ProductItem from '@/components/productItem';
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
    desc: '탈모케어를 위한 최고의 제품',
    imageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914274085.jpg',
    productOptions: [
      {
        id: 1,
        name: '모이스처',
        price: 1000,
        stock: 100,
      },
      {
        id: 2,
        name: '세범',
        price: 2000,
        stock: 200,
      },
      {
        id: 24,
        name: '센서티브',
        price: 3000,
        stock: 300,
      },
    ],
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
    desc: '',
    imageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914379618.jpg',
    productOptions: [
      {
        id: 1,
        name: '모이스처',
        price: 1000,
        stock: 100,
      },
      {
        id: 2,
        name: '세범',
        price: 2000,
        stock: 200,
      },
      {
        id: 24,
        name: '센서티브',
        price: 3000,
        stock: 300,
      },
    ],
  },
  {
    id: 3,
    name: '헤어 리커버리 사이토카인™ 이펙터 플러스',
    originPrice: 62000,
    price: 24000,
    tag: '',
    desc: '',
    imageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/theconst.kr/condor-img/202207/1656914379618.jpg',
    productOptions: [],
  },
];

export default function ShopPage() {
  return (
    <>
      <h2 className={styles.title}>
        <span>사이토카인.</span>
        <span className={styles.description}>완벽한 탈모케어를 위한 선택</span>
      </h2>
      <ul className={styles.product_list}>
        {productList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
