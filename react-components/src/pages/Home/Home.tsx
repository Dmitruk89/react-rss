import { SearchBar } from '../../components/Searchbar/Searchbar.component';
import React, { useEffect, useState } from 'react';

import { CardList } from '../../components/CardList/CardList.component';
import { Modal } from '../../components/Modal/Modal.component';
import { LoadingSpinner } from '../../components/Spinner/Spinner.component';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetCharactersQuery, useGetCharacterQuery } from '../../features/api/apiSlice';

export function Home() {
  const queryValue = useSelector((state: RootState) => state.search.queryValue);
  const [character, setCharachter] = useState(null);
  const [isCharacterPending, setIsCharacterPending] = useState(false);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiGet = (url: string) => {
    setCharachter(null);
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          setIsRequestSuccessful(true);
          return response.json();
        }
      })
      .then((data) => {
        if (data.results) {
        } else {
          setCharachter(data);
          setIsCharacterPending(false);
        }
        setIsRequestSuccessful(false);
      });
  };

  const {
    data: reduxCharacters,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCharactersQuery({ name: queryValue });

  const onCardClick = (id: number) => {
    apiGet(`https://rickandmortyapi.com/api/character/${id}`);
    setIsCharacterPending(true);
  };

  useEffect(() => {
    if (isRequestSuccessful) {
      setIsModalOpen(true);
    }
  }, [isRequestSuccessful]);

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    content = <CardList data={reduxCharacters.results} onCardClick={onCardClick} />;
  } else if (isError) {
    content = (
      <div className="error__message" data-testid="request-error-element">
        No characters begins with your query!
      </div>
    );
  }

  return (
    <div>
      <div className="notion__message">
        Search by name of the character. e. g. Rick or Morty. The letters the name begins or empty
        query are also the valid values.
      </div>
      <SearchBar />
      {content}
      {!isCharacterPending && character && isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} content={character} />
      )}
    </div>
  );
}
