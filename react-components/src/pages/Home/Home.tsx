import { SearchBar } from '../../components/Searchbar/Searchbar.component';
import React from 'react';

import { CardList } from '../../components/CardList/CardList.component';
import { Modal } from '../../components/Modal/Modal.component';
import { LoadingSpinner } from '../../components/Spinner/Spinner.component';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetCharactersQuery } from '../../features/api/apiSlice';

export function Home() {
  const queryValue = useSelector((state: RootState) => state.search.queryValue);
  const isModalOpen = useSelector((state: RootState) => state.characters.isModalOpen);

  const {
    data: reduxCharacters,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCharactersQuery({ name: queryValue });

  let CharacterListcontent;

  if (isLoading) {
    CharacterListcontent = <LoadingSpinner />;
  } else if (isSuccess) {
    CharacterListcontent = <CardList data={reduxCharacters.results} />;
  } else if (isError) {
    CharacterListcontent = (
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
      {CharacterListcontent}
      {isModalOpen && <Modal />}
    </div>
  );
}
