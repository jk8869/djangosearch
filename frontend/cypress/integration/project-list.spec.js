/// <reference types="cypress" />

describe('load poject list', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('displays list of project with navbar and search', () => {
    cy.get('.header__menu li').should('have.length', 7);
  });
});
