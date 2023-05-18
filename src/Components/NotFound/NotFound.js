import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ErrorMessage/ErrorMessage.css';

function NotFound() {
  return (
    <div className='error-message-wrapper'>
      <div className='error-message'>
        <h2 className="error-title">This page doesn't exist.</h2>
        <NavLink to='/' className="error-detail">Go back to Home</NavLink>
      </div>
    </div>
  );
};

export default NotFound;