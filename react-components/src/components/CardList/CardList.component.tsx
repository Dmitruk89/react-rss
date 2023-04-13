import React from 'react';
import { Character } from 'types/character';
import { Card } from '../Card/Card.component';
import './CardList.component.css';
import { useGetCharactersQuery } from '../../features/api/apiSlice';
import { LoadingSpinner } from '../Spinner/Spinner.component';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function CardList() {
  const queryValue = useSelector((state: RootState) => state.search.queryValue);
  const {
    data: reduxCharacters,
    isLoading,
    isSuccess,
    isError,
  } = useGetCharactersQuery({ name: queryValue });

  let CharacterListcontent;

  if (isLoading) {
    CharacterListcontent = <LoadingSpinner />;
  } else if (isSuccess) {
    CharacterListcontent = reduxCharacters.results.map((character: Character) => (
      <Card key={character.id} content={character} />
    ));
  } else if (isError) {
    CharacterListcontent = (
      <div className="error__message" data-testid="request-error-element">
        No characters begins with your query!
      </div>
    );
  }
  return (
    <ul data-testid="card-list-element" className="card__container">
      {CharacterListcontent}
    </ul>
  );
}
