import { queryData, SearchBar } from '../components/Searchbar/Searchbar.component';
import React, { useEffect, useState } from 'react';

import { CardLIst } from '../components/CardList/CardList.component';
import { Modal } from '../components/Modal/Modal.component';

export function Home() {
  const [characters, setCharachters] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCards = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharachters(data.results));
  };

  const handleSearchSubmit = (data: queryData | null) => {
    if (data) {
      getCards(`https://rickandmortyapi.com/api/character/?name=${data.name}`);
    } else {
      console.log('no such character!');
    }
  };

  useEffect(() => {
    getCards('https://rickandmortyapi.com/api/character');
  }, []);

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {characters && <CardLIst data={characters} onCardClick={() => setIsModalOpen(true)} />}
      {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
    </div>
  );
}
