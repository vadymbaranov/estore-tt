import React from 'react';
import style from './ProductList.module.scss';
import { Product } from '../../types/Product';
import { ProductItem } from '../ProductItem';

type Props = {
  products: Product[];
};

export const ProductList: React.FC<Props> = React.memo(({ products }) => {
  const electronics: Product[] = products;

  return (
    <div className={style.products__container}>
      {electronics.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
});
