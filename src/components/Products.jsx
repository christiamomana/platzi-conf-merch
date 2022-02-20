import React, { useContext } from 'react';

import Product from './Product';

import '../styles/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCard = (product) => {
    addToCart(product);
  };

  return <div className="Products">
    <div className="Products-items">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCard={() => handleAddToCard(product)}
        />
      ))}
    </div>
  </div>;
};

export default Products;
