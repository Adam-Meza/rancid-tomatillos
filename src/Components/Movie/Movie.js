import React from 'react';
import dayjs from 'dayjs'
import './movie.css';
import star from './star.png';

function Movie({ id, title, posterPath, releaseDate, averageRating, fetchCurrentMovie }) {
  return (
    <article className="movie-card" id={id} onClick={ () => fetchCurrentMovie(id) } >
      <div className='image-cont'>
        <img src={`${posterPath}`} alt={title} />
      </div>
      <h2>{title}</h2>
        <p>{ releaseDate }</p>
        <div className='rating-row'>
          <img className='star' src={star} alt='Rating star icon'/>
          <p className='rating-text'>{ averageRating }</p>
        </div>
    </article>
  );
}

export default Movie;