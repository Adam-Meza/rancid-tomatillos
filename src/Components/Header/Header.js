import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className='header-bar'>
      <h1>Rancid Tomatillos</h1>
      <NavLink to="/" 
        style={{ color: 'inherit', textDecoration: 'inherit'}}
        className='button-home'>Home</NavLink>
    </header>
  );
};

export default Header;