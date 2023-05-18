import movies from './movies-test-data.js';

describe('Tests for bad URLs', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: movies
      }
    });
    cy.visit('http://localhost:3000/movies')
  });

  it('Should display a header with the title of the app', () => {
    cy.get('h1').should('have.text', 'Rancid Tomatillos');
  });

  it('Should render an error message if the user goes to a path that doesn\'t exist', () => {
    cy.get('.error-title').contains('h2', 'This page doesn\'t exist.')
      .get('.error-detail').contains('a', 'Go back to Home').should('have.attr', 'href')
  });

  it('Should should take the user back to all movies view after clicking the displayed link', () => {
    cy.get('.error-detail').contains('Home').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('.movie-container').children().should('have.length', 6);
  });
});