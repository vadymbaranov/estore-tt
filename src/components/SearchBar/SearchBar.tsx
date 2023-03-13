import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.scss';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';
import filterOpen from '../../assets/filterButtonOpen.svg';
import filterClose from '../../assets/filterButtonClose.svg';
import activeDot from '../../assets/filterApplied.svg';
import { SortByPrice } from '../../types/PriceSort';

type Props = {
  onSort: (sortType: SortByPrice) => void;
};

export const SearchBar: React.FC<Props> = React.memo(({
  onSort,
}) => {
  const [filterOpened, setFilterOpened] = useState<boolean>(false);

  const visibleArea = window.innerWidth;

  // if (filterOpen) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'auto';
  // }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.matchMedia('(min-width: 999px)').matches) {
        setFilterOpened(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // eslint-disable-next-line no-console
  console.log('rendering SearchBar');

  return (
    <>
      {visibleArea <= 999 ? (
        <div className={style.search__container}>
          <div className={style.filter__container}>
            <button
              type="button"
              className={style.filter__high}
              onClick={() => onSort(SortByPrice.High)}
            >
              Price: Low to High
              <img
                src={arrowUp}
                alt="filter button low to high"
                className={style.filter__arrow__up}
              />
            </button>
            <button
              type="button"
              className={style.filter__low}
              onClick={() => onSort(SortByPrice.Low)}
            >
              Price: High to Low
              <img
                src={arrowDown}
                alt="filter button high to low"
                className={style.filter__arrow__down}
              />
            </button>
            {filterOpened ? (
              <button
                type="button"
                className={style.filter__close}
                onClick={() => setFilterOpened(false)}
              >
                <img src={filterClose} alt="Filter" />
              </button>
            ) : (
              <button
                type="button"
                className={style.filter__open}
                onClick={() => setFilterOpened(true)}
              >
                <img
                  src={filterOpen}
                  alt="Filter"
                  className={style.filter__open_image}
                />
                <img
                  src={activeDot}
                  alt="Filter applied"
                  className={style.filter__open_active}
                />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={style.search__container}>
          <div className={style.filter__bar}>
            <input
              type="text"
              className={style.input__search}
              placeholder=""
            />
            <div className={style.filter__container}>
              <button
                type="button"
                className={style.filter__high}
                onClick={() => onSort(SortByPrice.High)}
              >
                Price: Low to High
                <img
                  src={arrowUp}
                  alt="filter button low to high"
                  className={style.filter__arrow__up}
                />
              </button>
              <button
                type="button"
                className={style.filter__low}
                onClick={() => onSort(SortByPrice.Low)}
              >
                Price: High to Low
                <img
                  src={arrowDown}
                  alt="filter button high to low"
                  className={style.filter__arrow__down}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
