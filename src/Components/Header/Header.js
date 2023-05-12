import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './header.css';

function Header({backToHomePage, currentMovie}) {

  return (
    <header className='header-bar'>
      <h1>Rancid Tomatillos</h1>
      { currentMovie && <button className='button-home' onClick = { backToHomePage }>Home</button>}

    </header>

  );
};

export default Header;