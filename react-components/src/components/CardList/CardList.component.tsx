import React from 'react';
import { Character } from 'types/character';
import { Card } from '../Card/Card.component';
import './CardList.component.css';

type Props = {
  data: Character[];
};

export function CardList(props: Props) {
  const characters = props.data.map((character) => <Card key={character.id} content={character} />);
  return (
    <ul data-testid="card-list-element" className="card__container">
      {characters}
    </ul>
  );
}
