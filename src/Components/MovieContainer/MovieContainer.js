import React from 'react';
import Movie from '../Movie/Movie';
import './MovieContainer.css';

function MovieContainer( props ) {
  console.log(props.movies)
  const movieCards = props.movies.map(movie => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        releaseDate={movie.release_date}
        averageRating={movie.average_rating}
        fetchCurrentMovie={props.fetchCurrentMovie}
      />
    );
  });

  return (
    <section className="movie-container" >
    { movieCards }
    </section>
  );
}

export default MovieContainer;