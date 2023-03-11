import React, { useState, useCallback } from 'react';
import style from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SideBar } from '../../components/SideBar';
import { ProductList } from '../../components/ProductList';

export const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  return (
    <div className={style.home_page}>
      <div className={style.home_page__container}>
        <SearchBar
          query={query}
          onChange={handleQueryChange}
        />

        <div className={style.home_page_product__container}>
          <SideBar />

          <ProductList />
        </div>
      </div>
    </div>
  );
};
