import React from 'react';
import './Card.component.css';
import { Character } from 'types/character';
import { useDispatch } from 'react-redux';
import { selectCharacter, toggleModal } from '../../features/characters/charactersSlice';

type cardProps = {
  key: number;
  content: Character;
};

export function Card(props: cardProps) {
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(toggleModal(true));
    dispatch(selectCharacter(props.content.id));
  };
  return (
    <div className="product_card" data-testid="card-element" onClick={onCardClick}>
      <img src={props.content.image} alt="product-image" />
      <p className="product_name">{props.content.name}</p>
    </div>
  );
}
