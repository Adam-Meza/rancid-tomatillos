import React from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types'
import './MovieContainer.css';

function MovieContainer( {movies} ) {
  const movieCards = movies.map(movie => {
    return (
        <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            averageRating={movie.average_rating}
          />
    );
  });

  return (
    <section className="movie-container" >
    { movieCards }
    </section>
  );
}

MovieContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      average_rating: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MovieContainer;
