import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </Link>
    </div>
  );
}

export default Product;
