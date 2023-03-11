import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductItem.module.scss';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  const {
    id,
    name,
    price,
    brand,
    // description,
    image,
  } = product;

  return (
    <div className={style.product__container}>
      <div className={style.product__image_container}>
        <Link to={`/electronics/${id}`}>
          <img
            src={image}
            alt={name}
            className={style.product__image}
          />
        </Link>
      </div>

      <div className={style.product__info}>
        <Link className={style.name__link} to={`/electronics/${id}`}>
          <h2 className={style.product__name}>{name}</h2>
        </Link>
        <p className={style.product__price}>{`$${price}`}</p>
        <p className={style.product__brand}>{brand}</p>
        <article className={style.product__description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Rerum quaerat officiis quisquam eius minima mollitia porro
          {/* {description} */}
        </article>
        <button type="button" className={style.product__description_full}>View details</button>
      </div>
    </div>
  );
};
