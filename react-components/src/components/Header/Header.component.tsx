import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.component.css';

interface Props {
  children?: React.ReactNode;
}

interface HeaderState {
  page: string;
}

export class Header extends React.Component<Props, HeaderState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: location.pathname,
    };
  }

  refreshLocation() {
    this.setState({ page: location.pathname });
  }

  render() {
    return (
      <header>
        <h2>{this.state.page == '/' ? 'home' : this.state.page == '/about' ? 'about' : ''}</h2>
        <nav className="app-navigation">
          <ul>
            <li onClick={this.refreshLocation.bind(this)}>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li onClick={this.refreshLocation.bind(this)}>
              <NavLink to={`about`}>About us</NavLink>
            </li>
            <li onClick={this.refreshLocation.bind(this)}>
              <NavLink to={`not-exist`}></NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
