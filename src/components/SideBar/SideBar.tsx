import React from 'react';
import style from './SideBar.module.scss';

export const SideBar: React.FC = () => {
  const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];

  return (
    <div className={style.sidebar__container}>
      <div className={style.brands__filter}>
        <h5 className={style.brands__title}>Brands</h5>
        {brands.map((brand: string) => (
          <label
            key={brand}
            htmlFor="brand"
            className={style.brands__item}
          >
            <input
              id="brand"
              type="checkbox"
              value=""
              className={style.brands__checkbox}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className={style.price__filter}>
        <h5 className={style.price__title}>Price range</h5>
        <div className={style.range__wrap}>
          <input min="0" max="3000" type="range" />
          <input min="0" max="3000" type="range" />
        </div>
        <div className={style.range__box}>
          <div className={style.number__container}>
            <label htmlFor="min-input" className={style.number__min}>
              Min
              <input id="min-input" type="number" className={style.number__min_box} />
            </label>
            <label htmlFor="max-input" className={style.number__max}>
              Max
              <input id="max-input" type="number" className={style.number__max_box} />
            </label>
          </div>

          <button type="button" className={style.price__button}>Apply</button>
        </div>

        <button type="button" className={style.price__reset}>Reset filter</button>
      </div>
    </div>
  );
};
