import React from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductPage.module.scss';
import products from '../../assets/products.json';
import cart from '../../assets/cart.svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types/Product';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  // const location = useLocation();
  const items: Product[] = products;
  const product: Product = items.find(item => item.id === Number(productId));
  const {
    name,
    price,
    description,
    category,
    type,
    material,
    design,
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
            <p className={style.item__price}>{`$${price}`}</p>
            <button
              type="button"
              className={style.item_buy__button}
            >
              <img
                src={cart}
                alt="Buy button"
                className={style.item_buy__logo}
              />
              Buy
            </button>
            <div className={style.info}>
              <div className={style.info__category}>
                <p className={style.category__title}>Category:</p>
                <p className={style.category__name}>{category}</p>
              </div>
              <div className={style.info__container}>
                <div className={style.info__type}>
                  <p className={style.type__title}>Type:</p>
                  <p className={style.type__name}>{type}</p>
                </div>
                <div className={style.info__material}>
                  <p className={style.material__title}>Material:</p>
                  <p className={style.material__name}>{material}</p>
                </div>
                <div className={style.info__design}>
                  <p className={style.design__title}>Design:</p>
                  <p className={style.design__name}>{design}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.item__description}>
          <article className={style.description}>
            {description}
          </article>
        </div>
      </div>
    </div>
  );
};
