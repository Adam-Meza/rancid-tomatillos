import React from 'react';
import './movie.css';

function Movie({ id, title, posterPath, releaseDate, voteAverage }) {
  return (
    <article className="movie-card" id={id}>
      <div className='image-cont'>
        <img src={`${posterPath}`} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>Rating: {voteAverage}</p>
    </article>
  );
}

export default Movie;