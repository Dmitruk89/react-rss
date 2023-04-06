import React from 'react';
import './Card.component.css';
import { Character } from 'types/character';

type cardProps = {
  key: number;
  content: Character;
  onCardClick: (id: number) => void;
};

export function Card(props: cardProps) {
  const onCardClick = () => {
    props.onCardClick(props.content.id);
  };
  return (
    <div className="product_card" onClick={onCardClick}>
      <img src={props.content.image} alt="product-image" />
      <p className="product_name">{props.content.name}</p>
    </div>
  );
}
