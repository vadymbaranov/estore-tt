import React from 'react';
import style from './ProductItem.module.scss';

export const ProductItem: React.FC = () => {
  return (
    <div className={style.product__container}>
      <div className={style.product__image}>
        <img
          src="../../../public/assets/image23.png"
          alt="product"
          className={style.product__image}
        />
      </div>

      <div className={style.product__info}>
        <h2 className={style.product__name}>Product name</h2>
        <p className={style.product__price}>$257</p>
        <p className={style.product__brand}>brand name</p>
        <article className={style.product__description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Rerum quaerat officiis quisquam eius minima mollitia porro earum. Ab, iste exercitationem!
        </article>
        <button type="button" className={style.product__description_full}>View details</button>
      </div>
    </div>
  );
};
