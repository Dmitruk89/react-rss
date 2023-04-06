import { queryData, SearchBar } from '../components/Searchbar/Searchbar.component';
import React, { useEffect, useState } from 'react';

import { CardLIst } from '../components/CardList/CardList.component';
import { Modal } from '../components/Modal/Modal.component';
import LoadingSpinner from '../components/Spinner/Spinner.component';

export function Home() {
  const [characters, setCharachters] = useState(null);
  const [character, setCharachter] = useState(null);
  const [isCharacterPending, setIsCharacterPending] = useState(false);
  const [isCharactersPending, setIsCharactersPending] = useState(false);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiGet = (url: string) => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          setIsRequestSuccessful(true);
        }
        return response.json();
      })
      .then((data) => {
        if (data.results) {
          setCharachters(data.results);
          setIsCharactersPending(false);
        } else {
          setCharachter(data);
          setIsCharacterPending(false);
        }
        setIsRequestSuccessful(false);
      });
  };

  const handleSearchSubmit = (data: queryData | null) => {
    if (data) {
      apiGet(`https://rickandmortyapi.com/api/character/?name=${data.name}`);
      setIsCharactersPending(true);
    } else {
      console.log('no such character!');
    }
  };

  const onCardClick = (id: number) => {
    console.log(id);

    apiGet(`https://rickandmortyapi.com/api/character/${id}`);
    setIsCharacterPending(true);
  };

  useEffect(() => {
    apiGet('https://rickandmortyapi.com/api/character');
    setIsCharactersPending(true);
  }, []);

  useEffect(() => {
    if (isRequestSuccessful) {
      setIsModalOpen(true);
    }
  }, [isRequestSuccessful]);

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {!isCharactersPending && characters && (
        <CardLIst data={characters} onCardClick={onCardClick} />
      )}
      {(isCharacterPending || isCharactersPending) && <LoadingSpinner />}
      {!isCharacterPending && character && isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} content={character} />
      )}
    </div>
  );
}
