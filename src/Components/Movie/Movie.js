import React from 'react';
import dayjs from 'dayjs'
import './movie.css';

function Movie({ id, title, posterPath, releaseDate, averageRating, fetchCurrentMovie }) {
  return (
    <article className="movie-card" id={id} onClick={ () => fetchCurrentMovie(id) } >
      <div className='image-cont'>
        <img src={`${posterPath}`} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{ releaseDate } | { averageRating } </p>
    </article>
  );
}

export default Movie;