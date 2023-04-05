import React from 'react';
import './Card.component.css';
import { Character } from 'types/character';

type cardProps = {
  key: number;
  content: Character;
};

export function Card(props: cardProps) {
  return (
    <div className="product_card">
      <img src={props.content.image} alt="product-image" />
      <p className="product_name">{props.content.name}</p>
    </div>
  );
}
