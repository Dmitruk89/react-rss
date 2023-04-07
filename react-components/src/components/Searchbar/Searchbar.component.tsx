import React, { ChangeEvent, useState } from 'react';
import './Searchbar.component.css';
import { BsSearch } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  onSearchSubmit: (data: queryData | null) => void;
}

export interface queryData {
  name?: string;
}

export function SearchBar(props: Props) {
  const { onSearchSubmit } = props;
  const [query, setQuery] = useState(localStorage.getItem('inputValue') || '');
  const { register, handleSubmit } = useForm<queryData>();

  const hadleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  const onSubmit: SubmitHandler<queryData> = (formData) => {
    onSearchSubmit(formData);
  };

  return (
    <div className="container">
      <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          type="text"
          value={query}
          placeholder="search"
          onInput={hadleChange}
        ></input>
        <button type="submit" data-testid="search-button-element">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
