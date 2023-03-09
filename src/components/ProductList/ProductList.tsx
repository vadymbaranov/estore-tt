import React from 'react';
import products from '../../assets/products.json';
import { Product } from '../../types/Product';

export const ProductList: React.FC = () => {
  const electronics: Product[] = products;

  return (
    <div className="products__container">
      <div className="product__image">
        <img src="" alt="" />
      </div>

      <div className="product__info">
        
      </div>
    </div>
  );
};
