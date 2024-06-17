import React from 'react';

const Product = ( props ) => {

  const products = props.products
  
  return (
    <div className="container">
      <h1>상품 목록</h1>
      <div className="card-list">
        {products.map((product, index) => (
            <div className="card">
                <img src={product.img} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
