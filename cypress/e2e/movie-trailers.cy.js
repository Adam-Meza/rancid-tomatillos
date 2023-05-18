import React from 'react';
import movies from './movies-test-data.js';
import MovieDetails from './movie-details-test-data.js';

describe( 'Tests for Movie Trailers functionality', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: movies
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        movie: MovieDetails.currentMovie
      }
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      body: {
        videos: [{id: 36, movie_id: 724495, key: '3RDaPV_rJ1Y', site: 'YouTube', type: 'Trailer'}]
      }
    }).visit('http://localhost:3000/movies/436270')
  })

  it('Should allow users to view a movie trailer page from the movie details page', () => {
    cy.get('button').click()
      .url().should('eq', 'http://localhost:3000/movies/436270/trailer')
  })

  it('Should be able to display the relevant embedded movie trailer', () => {
    cy.get('button').click()
      .get('iframe').should('have.attr', 'src', 'https://www.youtube.com/embed/3RDaPV_rJ1Y')
  })

  it('Should be able to return to the movie details page from the movie trailer page by using the browser back arrow', () => {
    cy.get('button').click()
      .url().should('eq', 'http://localhost:3000/movies/436270/trailer')
      .go('back')
      .url().should('eq', 'http://localhost:3000/movies/436270')
  });
})


