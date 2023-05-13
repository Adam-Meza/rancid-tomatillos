import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ error }) {
  return (
    <div className='error-message-wrapper'>
      <section className='error-message'>
        <h2 className="error-title">Something's gone wrong.</h2>
        {error === 'Server error' && <p className="error-detail">There was an unexpected issue with the server. Please try again later.</p>}
      </section>
    </div>
  );
}

export default ErrorMessage;