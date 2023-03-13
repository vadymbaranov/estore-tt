/* eslint-disable no-console */
import React, { MutableRefObject } from 'react';
import Slider from '@mui/material/Slider';
import style from './SideBar.module.scss';

function valuetext(value: number) {
  return `${value}`;
}

const minDistance = 10;

type Props = {
  brandInput: MutableRefObject<T>;
  price: number[];
  onPrice: (price: number[]) => void;
  onBrandsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterReset: () => void;
  onFilterApplied: () => void;
};

export const SideBar: React.FC<Props> = ({
  brandInput,
  price,
  onPrice,
  onBrandsChange,
  onFilterReset,
  onFilterApplied,
}) => {
  const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];

  const visibleArea = window.innerWidth;

  const handlePriceRangeChange = (
    event: Event,
    newPrice: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newPrice)) {
      return;
    }

    if (newPrice[1] - newPrice[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newPrice[0], 100 - minDistance);

        onPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newPrice[1], minDistance);

        onPrice([clamped - minDistance, clamped]);
      }
    } else {
      onPrice(newPrice as number[]);
    }
  };

  const handleMinPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onPrice([Number(event.currentTarget.value), price[1]]);
  };

  const handleMaxPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onPrice([price[0], Number(event.currentTarget.value)]);
  };

  return (
    <>
      {visibleArea <= 999 ? (
        <div className={style.sidebar__container}>
          <button
            type="button"
            className={style.price__reset}
            onClick={() => onFilterReset()}
          >
            Reset filter
          </button>

          <div className={style.price__filter}>
            <div className={style.price__confirm}>
              <h5 className={style.price__title}>Price range, $</h5>
              <button
                type="button"
                className={style.price__button}
                onClick={() => onFilterApplied()}
              >
                Apply
              </button>
            </div>

            <div className={style.number__container}>
              <div className={style.wrap__min}>
                <label htmlFor="min-input" className={style.number__min}>
                  Min
                  <input
                    id="min-input"
                    type="number"
                    value={price[0]}
                    className={style.number__min_box}
                    onChange={handleMinPriceChange}
                  />
                </label>
              </div>
              <div className={style.wrap__max}>
                <label htmlFor="max-input" className={style.number__max}>
                  Max
                  <input
                    id="max-input"
                    type="number"
                    value={price[1]}
                    className={style.number__max_box}
                    onChange={handleMaxPriceChange}
                  />
                </label>
              </div>
            </div>

            <div className={style.range__wrap}>
              <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={price}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={5000}
                className={style.slider}
                disableSwap
              />
            </div>
          </div>

          <div className={style.brands__filter}>
            <div className={style.brands__confirm}>
              <h5 className={style.brands__title}>Brands</h5>
              <button
                type="button"
                className={style.brands__button}
              >
                Apply
              </button>
            </div>
            <div className={style.brands__wrap}>
              {brands.map((brand: string) => (
                <label key={brand} htmlFor="brand" className={style.brands__item}>
                  {brand}
                  <input
                    id="brand"
                    type="checkbox"
                    ref={brandInput}
                    value={brand}
                    className={style.brands__checkbox}
                    onChange={(event) => onBrandsChange(event)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={style.sidebar__container}>
          <div className={style.brands__filter}>
            <h5 className={style.brands__title}>Brands</h5>
            {brands.map((brand: string) => (
              <label key={brand} htmlFor="brand" className={style.brands__item}>
                <input
                  id="brand"
                  type="checkbox"
                  ref={brandInput}
                  value={brand}
                  className={style.brands__checkbox}
                  onChange={(event) => onBrandsChange(event)}
                />
                {brand}
              </label>
            ))}
          </div>

          <div className={style.price__filter}>
            <h5 className={style.price__title}>Price range</h5>
            <div className={style.range__wrap}>
              <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={price}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className={style.slider}
                min={150}
                max={3000}
                disableSwap
              />
            </div>
            <div className={style.range__box}>
              <div className={style.number__container}>
                <label htmlFor="min-input" className={style.number__min}>
                  Min
                  <input
                    id="min-input"
                    type="number"
                    value={price[0]}
                    className={style.number__min_box}
                    onChange={handleMinPriceChange}
                  />
                </label>
                <label htmlFor="max-input" className={style.number__max}>
                  Max
                  <input
                    id="max-input"
                    type="number"
                    value={price[1]}
                    className={style.number__max_box}
                    onChange={handleMaxPriceChange}
                  />
                </label>
              </div>

              <button
                type="button"
                className={style.price__button}
                onClick={() => onFilterApplied()}
              >
                Apply
              </button>
            </div>

            <button
              type="button"
              className={style.price__reset}
              onClick={() => onFilterReset()}
            >
              Reset filter
            </button>
          </div>
        </div>
      )}
    </>
  );
};
