import React from 'react';
import Movie from '../Movie/Movie';
import './MovieContainer.css';

function MovieContainer( {movies, fetchCurrentMovie} ) {
  const movieCards = movies.map(movie => {
    return (
      <> { movies && 
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          averageRating={movie.average_rating}
          fetchCurrentMovie={fetchCurrentMovie}
        /> }
      </>
    );
  });

  return (
    <section className="movie-container" >
    { movieCards }
    </section>
  );
}

export default MovieContainer;