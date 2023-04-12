import React, { ChangeEvent } from 'react';
import './Searchbar.component.css';
import { BsSearch } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { save } from '../../features/search/searchSlice';

interface Props {
  onSearchSubmit: (data: queryData | null) => void;
}

export interface queryData {
  name?: string;
}

export function SearchBar(props: Props) {
  const queryValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const { onSearchSubmit } = props;
  const { register, handleSubmit } = useForm<queryData>();

  const hadleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(save(event.target.value));
  };

  const onSubmit: SubmitHandler<queryData> = (formData) => {
    onSearchSubmit(formData);
  };

  return (
    <div className="container" data-testid="search-bar-element">
      <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          type="text"
          value={queryValue}
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
