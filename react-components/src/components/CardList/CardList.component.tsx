import React from 'react';
import { Character } from 'types/character';
import { Card } from '../Card/Card.component';
import './CardList.component.css';

type Props = {
  data: Character[];
  onCardClick: () => void;
};

export function CardLIst(props: Props) {
  const characters = props.data.map((product, i) => {
    return (
      <div key={i} onClick={props.onCardClick}>
        <Card key={i} content={product} />;
      </div>
    );
  });
  return <ul className="card__container">{characters}</ul>;
}
