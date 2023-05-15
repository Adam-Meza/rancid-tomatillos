import React from 'react';
import movies from './movies-test-data.js'
<reference types="cypress" />

describe('Tests for the main view displaying a library of movies', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: movies
      }
    });
    cy.visit('http://localhost:3000');
  });

  it('Should display a header with the title of the app', () => {
    cy.get('h1').should('have.text', 'Rancid Tomatillos');
  });

  it('Should display a movie container with all the movies', () => {
    cy.get('.movie-container').children().should('have.length', 6);
  });

  it('Should display movie cards with the movie title, image, release date, and average rating', () => {
    cy.get('.movie-card').first().contains('h2', 'Black Adam');
    cy.get('.movie-card').first().find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg');
    cy.get('.rating-text').first().contains('p', '4 / 10');
    cy.get('.movie-card').first().contains('p', '2022');
  });

});

describe('Tests for navigating to an individual movie details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: movies
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie: {
          id: 829799,
          title: "Paradise City",
          poster_path: "https://image.tmdb.org/t/p/original//xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
          release_date: "2022-11-11",
          overview: "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
          genres: [
          "Crime",
          "Action",
          "Thriller"
          ],
          budget: 20000000,
          revenue: 0,
          runtime: 93,
          tagline: "",
          average_rating: 1
          }
    }
  });
    cy.visit('http://localhost:3000');
  });

  it('Should redirect the user to an individual movie detail page upon click', () => {
    cy.get('#829799').first().click();
    // cy.url().should('include', '/829799');
    cy.get('.background').should('have.attr', 'style', 'background-image: url("https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg");');
    cy.get('h2').should('have.text', 'Paradise City');
    cy.get('p').should('have.text', 'Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.');
  });
});