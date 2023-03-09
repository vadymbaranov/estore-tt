import React from 'react';
import style from './SearchBar.module.scss';

export function SearchBar({ query, onChange }) {
  return (
    <div className="filter__buttons">
      <input
        type="text"
        className="input__search"
        placeholder="Start searching"
        value={query}
        onChange={onChange}
      />
      <button type="button" className="filter__high">
        Price: Low to High
        <img
          src="./assets/arrow-up.png"
          alt="filter button low to high"
          className="arrow-logo__up"
        />
      </button>
      <button type="button" className="filter__low">
        Price: High to Low
        <img
          src="./assets/arrow-down.png"
          alt="filter button high to low"
          className="arrow-logo__down"
        />
      </button>
    </div>
  );
}
