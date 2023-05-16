import React from 'react';
import movies from './movies-test-data.js';
import MovieDetails from './movie-details-test-data.js';
<reference types="cypress" />

describe( 'Tests for Single Movie Details Display', () =>{
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
    }).visit('http://localhost:3000')
  })

  it("Should be able to get to Movie Details from the Main View", ()=> {
    cy.get('#436270').first().click()
  })

  it("Should Show All the Movie Details", ()=>{
    cy.get('#436270').first().click()
    .get('.individual-container')
    .get('.background')
    .should('have.attr', 'style', 'background-image: url("https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg");')
    .get('.poster')
    .get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('.info-container')
    .get('h2').should('have.text', 'Fake Name')
    .get('h4').should('have.text', 'tagline')
    .get('p').should('have.text', 'Its about Adam who is black')
    .get('ul')
    cy.contains('Average Rating').contains('0 / 10')
    cy.contains('Release Date:').contains('October 19, 2022')
    cy.contains('Runtime').contains('125 minutes')
    cy.contains('Revenue').contains('$384,571,691')
    cy.contains('Budget').contains('$420')
    cy.contains('Genre').contains('Action, Fantasy, Science Fiction')
  })
})

