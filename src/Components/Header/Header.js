import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './header.css';

function Header(props) {

  let pageState;
  
  if (props.currentMovie) {
    pageState = <header className='header-bar'>
                  <h1>Rancid Tomatillos</h1>
                  <button className='button-home' onClick = { props.backToHomePage}>Home</button>
                </header>;
  } else {
    pageState = <header className='header-bar'>
                  <h1>Rancid Tomatillos</h1>
                </header>;
  };

  return (
    pageState
  );
};

export default Header;