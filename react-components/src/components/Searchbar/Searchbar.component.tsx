import React, { ChangeEvent } from 'react';
import './Searchbar.component.css';
import { BsSearch } from 'react-icons/bs';

interface Props {
  children?: React.ReactNode;
}

interface State {
  value: string;
}

export class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: localStorage.getItem('inputValue') || '' };
  }

  hadleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    localStorage.setItem('inputValue', event.target.value);
  }

  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('inputValue') || '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.value);
  }

  render() {
    return (
      <div className="container">
        <form className="search-bar">
          <input
            type="text"
            value={this.state.value}
            placeholder="search"
            onInput={this.hadleChange.bind(this)}
          ></input>
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    );
  }
}
