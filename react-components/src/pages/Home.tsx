import { SearchBar } from '../components/Searchbar/Searchbar.component';
import React, { useEffect, useState } from 'react';

import { CardLIst } from '../components/CardList/CardList.component';

export function Home() {
  const [characters, setCharachters] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharachters(data.results));
  });
  return (
    <div>
      <SearchBar />
      {characters && <CardLIst data={characters} />}
    </div>
  );
}
