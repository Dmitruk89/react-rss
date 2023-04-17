import { SearchBar } from '../../components/Searchbar/Searchbar.component';
import React from 'react';

import { CardList } from '../../components/CardList/CardList.component';
import { Modal } from '../../components/Modal/Modal.component';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function Home() {
  const isModalOpen = useSelector((state: RootState) => state.characters.isModalOpen);

  return (
    <div>
      <div className="notion__message">
        Search by name of the character. e. g. Rick or Morty. The letters the name begins or empty
        query are also the valid values.
      </div>
      <SearchBar />
      <CardList />
      {isModalOpen && <Modal />}
    </div>
  );
}
