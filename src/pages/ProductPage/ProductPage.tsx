import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import style from './ProductPage.module.scss';
import products from '../../assets/products.json';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types/Product';

export const ProductPage: React.FC = () => {
  // const productId: number = useParams();
  // const location = useLocation();
  const items: Product[] = products;
  const product: Product = items.find(item => item.id === 3);
  const {
    name,
    price,
    description,
    image,
  } = product;

  return (
    <div className={style.item_page}>
      <div className={style.item_page__container}>
        <Breadcrumbs
          crumbs={[
            { title: 'home', path: '/' },
            { title: 'Electronics', path: '/electronics' },
            // { title: `${name}`, path: '/item' },
          ]}
        />

        <div className={style.item__info}>
          <div className={style.item_image__container}>
            <img src={image} alt="" className={style.item__image} />
          </div>

          <div className={style.item__details}>
            <h2 className={style.item__name}>
              {name}
            </h2>
            <p className={style.item__price}>{`$ ${price}`}</p>
            <button
              type="button"
              className={style.item_buy__button}
            >
              Buy
            </button>
            <div className={style.info}>
              <p className={style.item__category}>Electronics</p>
              <div className={style.info__container}>
                <p className={style.info__type}>Smart watch</p>
                <p className={style.info__material}>Aluminium</p>
                <p className={style.item__design}>Modern</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.item__description}>
          <article className={style.description}>{description}</article>
        </div>
      </div>
    </div>
  );
};
