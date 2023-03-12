import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.scss';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';
import filterOpen from '../../assets/filterButtonOpen.svg';
import filterClose from '../../assets/filterButtonClose.svg';

type Props = {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  const [filterOpened, setFilterOpened] = useState<boolean>(false);

  const visibleArea = window.innerWidth;

  if (filterOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

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

  return (
    <>
      {visibleArea <= 999 ? (
        <div className={style.search__container}>
          <div className={style.filter__container}>
            <button type="button" className={style.filter__high}>
              Price: Low to High
              <img
                src={arrowUp}
                alt="filter button low to high"
                className={style.filter__arrow__up}
              />
            </button>
            <button type="button" className={style.filter__low}>
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
                className={style.filter__open}
                onClick={() => setFilterOpened(false)}
              >
                <img src={filterClose} alt="Filter" />
              </button>
            ) : (
              <button
                type="button"
                className={style.filter__close}
                onClick={() => setFilterOpened(true)}
              >
                <img src={filterOpen} alt="Filter" />
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
              placeholder="Start searching"
              value={query}
              onChange={onChange}
            />
            <div className={style.filter__container}>
              <button type="button" className={style.filter__high}>
                Price: Low to High
                <img
                  src={arrowUp}
                  alt="filter button low to high"
                  className={style.filter__arrow__up}
                />
              </button>
              <button type="button" className={style.filter__low}>
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
};
