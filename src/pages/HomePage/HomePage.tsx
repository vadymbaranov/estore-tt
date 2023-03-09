import React, { useState, useCallback } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export function HomePage() {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  return (
    <div className="home-page page">
      <div className="home-page__container">
        <SearchBar query={query} onChange={handleQueryChange} />
      </div>
    </div>
  );
}
