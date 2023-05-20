import React from 'react';
import './movie.css';
import star from './star.png';
import { NavLink } from 'react-router-dom';

function Movie({ id, title, posterPath, releaseDate, averageRating }) {
  return (
    <NavLink to={`/movies/${id}`}
      style={{ color: 'inherit', textDecoration: 'inherit'}}
      className="movie-card" id={id} >
      <div className='image-cont'>
        <img src={`${posterPath}`} alt={title} />
      </div>
      <h2>{title}</h2>
        <p>{ releaseDate }</p>
        <div className='rating-row'>
          <img className='star' src={star} alt='Rating star icon'/>
          <p className='rating-text'>{ averageRating }</p>
        </div>
    </NavLink>
  );
}

export default Movie;