import { queryData, SearchBar } from '../components/Searchbar/Searchbar.component';
import React, { useEffect, useState } from 'react';

import { CardLIst } from '../components/CardList/CardList.component';
import { Modal } from '../components/Modal/Modal.component';

export function Home() {
  const [characters, setCharachters] = useState(null);
  const [character, setCharachter] = useState(null);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCharacter = (url: string) => {
    setIsRequestPending(true);
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          setIsRequestSuccessful(true);
        }
        return response.json();
      })
      .then((data) => {
        setCharachter(data);
        setIsRequestPending(false);
        setIsRequestSuccessful(false);
      });
  };

  const getCharacters = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharachters(data.results));
  };

  const handleSearchSubmit = (data: queryData | null) => {
    if (data) {
      getCharacters(`https://rickandmortyapi.com/api/character/?name=${data.name}`);
    } else {
      console.log('no such character!');
    }
  };

  const onCardClick = (id: number) => {
    console.log(id);

    getCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  };

  useEffect(() => {
    getCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  useEffect(() => {
    if (isRequestSuccessful) {
      setIsModalOpen(true);
    }
  }, [isRequestSuccessful]);

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {characters && <CardLIst data={characters} onCardClick={onCardClick} />}
      {!isRequestPending && character && isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} content={character} />
      )}
    </div>
  );
}
