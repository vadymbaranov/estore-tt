import React from 'react';
// import products from '../../assets/products.json';
// import { Product } from '../../types/Product';
import { ProductItem } from '../ProductItem';

export const ProductList: React.FC = () => {
  // const electronics: Product[] = products;

  return (
    <div className="products__container">
      <ProductItem />
    </div>
  );
};
