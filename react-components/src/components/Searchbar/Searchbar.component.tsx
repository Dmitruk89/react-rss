import React, { ChangeEvent } from 'react';
import './Searchbar.component.css';
import { BsSearch } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { query, inputChange } from '../../features/search/searchSlice';

export interface queryData {
  name?: string;
}

export function SearchBar() {
  const searchInputValue = useSelector((state: RootState) => state.search.searchInputvalue);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<queryData>();

  const hadleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(event.target.value));
  };

  const onSubmit: SubmitHandler<queryData> = () => {
    dispatch(query(searchInputValue));
  };

  return (
    <div className="container" data-testid="search-bar-element">
      <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          type="text"
          value={searchInputValue}
          placeholder="your query.."
          onInput={hadleChange}
        ></input>
        <button type="submit" data-testid="search-button-element">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
