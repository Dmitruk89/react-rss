import React from 'react';
import './Modal.component.css';
import { RiCloseLine } from 'react-icons/ri';
import { Character } from 'types/character';

type Props = {
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  content: Character;
};

export const Modal = ({ setIsOpen, content }: Props) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <h5 className="heading">{content.name}</h5>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className="modalContent">
            <img src={content.image} alt="product-image" />
            <div>
              <span className="modalContent__category">location: </span>
              <span>{content.location.name}</span>
            </div>
            <div>
              <span className="modalContent__category">gender: </span>
              <span>{content.gender}</span>
            </div>
            <div>
              <span className="modalContent__category">status: </span>
              <span>{content.status}</span>
            </div>
            <div>
              <span className="modalContent__category">species: </span>
              <span>{content.species}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
