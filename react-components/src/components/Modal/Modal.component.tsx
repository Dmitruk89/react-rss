import React from 'react';
import './Modal.component.css';
import { RiCloseLine } from 'react-icons/ri';

type Props = {
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export const Modal = ({ setIsOpen }: Props) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <h5 className="heading">Dialog</h5>

          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modalContent">Are you sure you want to delete the item?</div>
        </div>
      </div>
    </>
  );
};
