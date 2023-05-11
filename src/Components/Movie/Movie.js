import React from 'react';
import './Movie.css';

function Movie({ id, title, posterPath, releaseDate, voteAverage }) {
  return (
    <article className="movie-card" id={id}>
      <img src={`${posterPath}`} alt={title} />
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>Rating: {voteAverage}</p>
      <p>{overview}</p>
    </article>
  );
}

export default Movie;