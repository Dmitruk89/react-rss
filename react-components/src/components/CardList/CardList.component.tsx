import React from 'react';
import { Character } from 'types/character';
import { Card } from '../Card/Card.component';
import './CardList.component.css';

type Props = {
  data: Character[];
};

export function CardLIst(props: Props) {
  const characters = props.data.map((product, i) => {
    return <Card key={i} content={product} />;
  });
  return <ul className="card__container">{characters}</ul>;
}
