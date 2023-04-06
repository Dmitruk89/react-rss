import React, { MouseEventHandler } from 'react';
import { Character } from 'types/character';
import { Card } from '../Card/Card.component';
import './CardList.component.css';

type Props = {
  data: Character[];
  onCardClick: (id: number) => void;
};

export function CardLIst(props: Props) {
  const characters = props.data.map((character) => {
    return <Card key={character.id} content={character} onCardClick={props.onCardClick} />;
  });
  return <ul className="card__container">{characters}</ul>;
}
