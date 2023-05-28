# 리필드 FE 사전과제

> api를 활용해 SPA 쇼핑몰을 주어진 피그마와 동일하게 제작하세요.

진행 기간: 2023-05-26 ~ 2023-05-28

## 목차

- [리필드 FE 사전과제](#리필드-fe-사전과제)
  - [목차](#목차)
  - [배포 링크](#배포-링크)
  - [동작 화면](#동작-화면)
  - [사용한 라이브러리](#사용한-라이브러리)
  - [프로젝트 구조](#프로젝트-구조)
  - [프로젝트 실행 방법](#프로젝트-실행-방법)
  - [과제 수행 내용](#과제-수행-내용)
    - [Overview](#overview)
    - [Next/Image를 활용한 이미지 최적화](#nextimage를-활용한-이미지-최적화)
      - [Next/Image의 장점](#nextimage의-장점)
      - [리모트 이미지 세팅](#리모트-이미지-세팅)
    - [모달 컴포넌트 Troubleshooting](#모달-컴포넌트-troubleshooting)
      - [공통 컴포넌트](#공통-컴포넌트)
      - [키보드 트랩](#키보드-트랩)
      - [React.cloneElement을 이용해 children에게 props 전달하기](#reactcloneelement을-이용해-children에게-props-전달하기)
      - [Children에게 주입된 props의 Type](#children에게-주입된-props의-type)
    - [Context API를 사용해 장바구니 상태 관리](#context-api를-사용해-장바구니-상태-관리)
      - [커스텀 훅을 사용해 props drilling 제거](#커스텀-훅을-사용해-props-drilling-제거)
      - [Context API로 변경한 이유](#context-api로-변경한-이유)

<br/>

## 배포 링크

https://spa-shoppingmall.vercel.app

<br/>

## 동작 화면

![demo](https://github.com/rjsej12/spa-shoppingmall/assets/107838130/a66e128d-e0ae-4c13-bf13-9322a0b24278)

<br/>

## 사용한 라이브러리

<div align =center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                        Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/react_query-ff4154.svg?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> |

</div>

<br/>

## 프로젝트 구조

```
📦 src
├── 📂 api
├── 📂 components
│   ├── 📂 cartItem
│   ├── 📂 layout
│   │   └── 📂 header
│   ├── 📂 productItem
│   └── 📂 productOption
│   │    └── 📂 productOptionSelect
│   └── 📂 shared
│       ├── 📂 modal
│       └── 📂 tag
├── 📂 constants
├── 📂 context
├── 📂 pages
│   ├── 📂 cart
│   └── 📂 shop
├── 📂 styles
├── 📂 types
└── 📂 utils
```

<br/>

## 프로젝트 실행 방법

레파지토리 클론

```bash
$ git clone https://github.com/rjsej12/spa-shoppingmall.git
```

패키지 설치

```bash
$ npm install
```

애플리케이션 실행

```bash
$ npm run dev
```

<br/>

## 과제 수행 내용

### Overview

- **레이아웃**

  - 모든 페이지에서 보여야하는 레이아웃 컴포넌트들을 추가 했습니다.
  - 레이아웃의 좌,우 영역은 `Media Query`를 사용해 375px을 기준으로 변화하게 했습니다.
  - 헤더의 햄버거 버튼 클릭 시 제품 리스트 페이지로, 장바구니 버튼 클릭 시 장바구니 페이지로 이동하게 했습니다.

- **제품 리스트 페이지**

  - Next.js의 `getServerSideProps`를 사용해 제품 데이터를 페칭함으로써 프리렌더링을 구현 했습니다.
  - React-Query의 `useQuery`를 이용해 제품 데이터를 관리하고 있습니다.
  - 제품 클릭시 옵션을 선택하고 장바구니에 담는 기능을 하는 모달을 띄우도록 했습니다.
  - 옵션 선택시 옵션란이 선택한 옵션명으로 변하도록 했습니다.
  - 장바구니 담기 클릭시 제품이 장바구니에 추가되도록 했습니다.

- **장바구니 페이지**

  - `Context API`를 사용해 장바구니 상태를 관리하고 있습니다.
  - 로컬스토리지에 장바구니 데이터를 추가하고, `useEffect`를 이용해 첫 렌더링시 장바구니 데이터를 받아와 장바구니의 상태가 유지되도록 했습니다.
  - 상품 삭제 버튼 클릭시 상품이 장바구니에서 제거되도록 했습니다.

<br />

### Next/Image를 활용한 이미지 최적화

#### Next/Image의 장점

- 제품별 이미지를 보여줄 때 Next에서 제공하는 Image 컴포넌트를 사용했습니다. 이를 통해 다음과 같은 이점을 얻을 수 있었습니다.

  - lazy loading
  - 이미지 사이즈 최적화
  - placeholder를 통한 자동 스켈레톤 UI로 CLS 방지

#### 리모트 이미지 세팅

- 리모트 이미지의 경우 Next.js 서버에서 이미지를 가지고 있는 리모트 서버에 직접 요청을 하기 때문에 보안상의 이유로 모든 url에 대한 접근을 방지합니다. 따라서 리모트 이미지를 사용하기 위해 next.config.js 파일에 CDN의 host를 명시해 주었습니다.

```js
const nextConfig = {
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
};
```

- 또한 리모트 이미지의 경우 로컬 이미지와 다르게 빌드 타임에 이미지 파일에 접근하는 것이 불가능하기 때문에 placeholder를 blur로 설정해도 blur 이미지가 존재하지 않습니다. 이를 해결하기 위해 별도로 blurDataURL 속성에 base64로 인코딩된 이미지 데이터를 추가했습니다.

```tsx
<Image
  width="60"
  height="60"
  alt={name}
  src={imageUrl}
  placeholder="blur"
  blurDataURL={BLUR_DATA_URL}
/>
```

### 모달 컴포넌트 Troubleshooting

#### 공통 컴포넌트

- 제품 리스트 페이지의 상품 클릭 시 옵션 화면을 보여주기 위해 모달 컴포넌트를 추가하고자 했습니다. 이 때 재사용성을 고려하여 모달 컴포넌트를 공통 컴포넌트로 만들었습니다.

```tsx
export default function Modal({ children }) {
  return (
    <div>
      <div ref={modalRef}>{children}</div>
      <button>Close</button>
    </div>
  );
}
```

#### 키보드 트랩

- 기능 구현 후 컴포넌트의 동작을 테스트하던 중 모달창이 띄워져 있을 때 모달창 바깥의 요소로 Tab키를 사용해 접근이 가능한 현상을 발견했습니다.

- 키보드 접근성의 만족과 의도치 않은 동작을 방지하기 위해 키보드 트랩을 구현했습니다.

```tsx
const handleFocusModal = useCallback((e: React.KeyboardEvent) => {
  if (!contentRef.current) return;

  if (!e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    contentRef.current.focus();
  }
}, []);

const handleFocusCloseButton = useCallback((e: React.KeyboardEvent) => {
  if (!closeButtonRef.current) return;

  if (e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    closeButtonRef.current.focus();
  }
}, []);
```

#### React.cloneElement을 이용해 children에게 props 전달하기

- 키보드 트랩을 구현하기 위해서는 실질적으로 모달창에 띄워지는 content에게 contentRef와 handleFocusCloseButton 함수를 전달해야 했습니다.

- 공통 컴포넌트로 사용하기 위해 children을 이용했기에 children에게 props를 전달해야 했습니다.

- 이를 위해 React.cloneElement를 사용해 children에게 props를 전달했습니다.

```tsx
export default function Modal({ children }) {
  const childrenWithProps = cloneElement(children, { contentRef, handleFocusCloseButton });

  return (
    <div>
      <div>{childrenWithProps}</div>
      <button>Close</button>
    </div>
  );
}
```

#### Children에게 주입된 props의 Type

- React.cloneElement를 사용해 children에게 정상적으로 props는 전달했으나, 실제로 Modal 컴포넌트를 사용하는 곳에서 타입스크립트 오류가 발생했습니다.

- 이는 타입스크립트가 Modal 컴포넌트를 만들면서 정의한 props들을 child 요소에게 전달해주는것을 기대하지만 실제로는 부모 컴포넌트 내에서 주입되었기 때문입니다.

- 이를 해결하기 위해 undefined를 never로 추론한 타입을 전달함으로써 타입스크립트를 강제했습니다.

```tsx
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Modal>
      <ProductOption contentRef={undefined as never} handleFocusCloseButton={undefined as never} />
    </Modal>
  );
}
```

### Context API를 사용해 장바구니 상태 관리

#### 커스텀 훅을 사용해 props drilling 제거

- 장바구니 페이지의 기능 구현을 위해 3가지가 필요했습니다.

  - 장바구니 상태와 상태변화 함수(state, setState)
  - 장바구니에 상품을 추가하는 함수
  - 장바구니에서 상품을 제거하는 함수

- 각 상태 및 함수들이 필요한 컴포넌트들이 달라 상위 컴포넌트에서 하위 컴포넌트로의 props drilling이 필요했습니다.

- 재사용성과 가독성을 위해 useCarts라는 커스텀 훅을 만들어 props drilling을 제거했습니다.

```ts
export default function useCarts() {
  const [productList, setProductList] = useState<SelectedProduct[]>([]);

  const addCarts = (newProduct: SelectedProduct) => {
    ~
  };

  const removeItem = (index: number) => {
   ~
  };

  return { productList, addCarts, removeItem };
}
```

#### Context API로 변경한 이유

- 구현한 커스텀 훅을 이용해 기능을 구현하고 테스트를 진행하던 중 장바구니 페이지에서 삭제 버튼을 눌렀을 때 리렌더링이 일어나지 않는
  문제가 발생했습니다.

- 이는 여러 곳의 컴포넌트에서 커스텀 훅을 사용했을 때 하나의 상태가 공유되는 것이 아니였기 때문이였고, 커스텀 훅을 통해 하나의 상태를 만들어 사용하기 위해서는 또 다시 상위 컴포넌트에서 하위 컴포넌트로의 props drilling이 필요했습니다.

- 이를 해결하기 위해 Redux의 사용과 Context API의 사용을 고민하였고, 복잡한 상태관리가 목적이 아닌 단순 props drilling을 피하는 것이 목적이라면 Context API가 적절하다고 판단했습니다.
