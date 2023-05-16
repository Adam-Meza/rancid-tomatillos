describe('Tests for network request errors', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    });
    cy.visit('http://localhost:3000')
  });

  it('Should display a header with the title of the app', () => {
    cy.get('h1').should('have.text', 'Rancid Tomatillos');
  });

  it('Should render an error message if the network request sent on initial page load returns a 5xx server error', () => {
    cy.get('.error-title').contains('h2', 'Something\'s gone wrong.')
      .get('.error-detail').should('have.text', 'There was an unexpected issue with the server. Please try again later.');
  });
});