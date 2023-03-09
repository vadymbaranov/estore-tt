import React from 'react';
import style from './SearchBar.module.scss';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';

type Props = {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
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
  );
};
