import React from 'react';
import movies from './movies-test-data.js'
{/* <reference types="cypress" /> */}

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

  it('Should display a movie container with all the movies when on the root URL', () => {
    cy.url().should('eq', 'http://localhost:3000/')
      .get('.movie-container').children().should('have.length', 6);
  });

  it('Should display movie cards with the movie title, image, release date, and average rating', () => {
    cy.get('.movie-card').first().contains('h2', 'Black Adam')
      .get('.movie-card').last().contains('h2', 'Paradise City');
    cy.get('.movie-card').first().find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-card').last().find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//xdmmd437QdjcCls8yCQxrH5YYM4.jpg');
    cy.get('.rating-text').first().contains('p', '4 / 10')
      .get('.rating-text').last().contains('p', '1 / 10');
    cy.get('.movie-card').first().contains('p', '2022')
      .get('.movie-card').last().contains('p', '2022');
  });
});
