import React from 'react';
import './Modal.component.css';
import { RiCloseLine } from 'react-icons/ri';
import { useGetCharacterQuery } from '../../features/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { LoadingSpinner } from '../Spinner/Spinner.component';
import { toggleModal } from '../../features/characters/charactersSlice';

export const Modal = () => {
  const characterId = useSelector((state: RootState) => state.characters.selectedCharacterId);
  const dispatch = useDispatch();
  const {
    data: reduxCharacter,
    isLoading,
    isSuccess,
    isError,
  } = useGetCharacterQuery({ id: characterId });

  let modalContent;

  if (isLoading) {
    modalContent = <LoadingSpinner />;
  } else if (isSuccess) {
    modalContent = (
      <>
        <h5 className="heading">{reduxCharacter.name}</h5>
        <button
          className="closeBtn"
          data-testid="modal-close-btn"
          onClick={() => dispatch(toggleModal(false))}
        >
          <RiCloseLine />
        </button>
        <div className="modalContent">
          <img src={reduxCharacter.image} alt="product-image" />
          <div>
            <span className="modalContent__category">location: </span>
            <span>{reduxCharacter.location.name}</span>
          </div>
          <div>
            <span className="modalContent__category">gender: </span>
            <span>{reduxCharacter.gender}</span>
          </div>
          <div>
            <span className="modalContent__category">status: </span>
            <span>{reduxCharacter.status}</span>
          </div>
          <div>
            <span className="modalContent__category">species: </span>
            <span>{reduxCharacter.species}</span>
          </div>
        </div>
      </>
    );
  } else if (isError) {
    modalContent = (
      <div className="error__message" data-testid="request-error-element">
        something went wrong!
      </div>
    );
  }

  return (
    <>
      <div className="darkBG" onClick={() => dispatch(toggleModal(false))} />
      <div className="centered">
        <div className="modal" data-testid="modal-element">
          {modalContent}
        </div>
      </div>
    </>
  );
};
