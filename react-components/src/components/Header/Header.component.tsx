import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Paths } from '../../mock/paths';

import './Header.component.css';

export function Header() {
  const location = useLocation();

  function getPageName(location: string) {
    if (Object.values(Paths).includes(location)) {
      return location.slice(1);
    } else {
      return '';
    }
  }

  return (
    <header>
      <h2>{location.pathname == '/' ? 'home' : getPageName(location.pathname)}</h2>
      <nav className="app-navigation">
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`about`}>About us</NavLink>
          </li>
          <li>
            <NavLink to={`form`}>Form</NavLink>
          </li>
          <li>
            <NavLink to={`not-exist`}></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
