import React, { ChangeEvent, useState } from 'react';
import './Searchbar.component.css';
import { BsSearch } from 'react-icons/bs';

export function SearchBar() {
  const [query, setQuery] = useState(localStorage.getItem('inputValue') || '');

  const hadleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  return (
    <div className="container">
      <form className="search-bar">
        <input type="text" value={query} placeholder="search" onInput={hadleChange}></input>
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
