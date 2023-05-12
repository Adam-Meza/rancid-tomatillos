import React from 'react';
import './header.css';

function Header(currentMovie) {
  let pageState;
  
  if (currentMovie.currentMovie) {
    pageState = <header className='header-bar'>
                  <h1>Rancid Tomatillos</h1>
                  <button className='button-home'>Home</button>
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