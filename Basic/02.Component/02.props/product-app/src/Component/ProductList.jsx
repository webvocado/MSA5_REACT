import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = ({l}) => {
  const [products, setProducts] = useState([]);

  // hook : useEffect ();
  // useEffect : 아래 3가지 라이프 사이클 메소드를 결합한 리액트 훅(hook)
  // hook : 리액트의 함수형 컴포넌트가 가지는 특별한 의미의 함수
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);  // list state 를 업데이트 => componentDidUpdate
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Product products={products} />
    </>
  );
};

export default ProductList;






// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch("http://127.0.0.1:8080/products");
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>{product.name}</div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
