import React from 'react';
import style from './ProductList.module.scss';
import products from '../../assets/products.json';
import { Product } from '../../types/Product';
import { ProductItem } from '../ProductItem';

export const ProductList: React.FC = React.memo(() => {
  const electronics: Product[] = products;

  return (
    <div className={style.products__container}>
      {electronics.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
});
