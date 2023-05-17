import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header({backToHomePage, currentMovie}) {

  return (
    <header className='header-bar'>
      <h1>Rancid Tomatillos</h1>
      <NavLink to="/" className='button-home' onClick={ () => backToHomePage() }>Home</NavLink>
    </header>
  );
};

export default Header;