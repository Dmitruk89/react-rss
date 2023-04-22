/// <reference types="cypress" />
describe('Home page interaction', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  it('should visit Home page', () => {
    cy.visit('/');
    cy.get('h2').contains('home');
    cy.get('.active').contains('Home');
  });
  it('should visit About page', () => {
    cy.visit('/');
    cy.get('a').contains('About us').click();
    cy.get('.active').contains('About us');
  });
  it('should visit Form page', () => {
    cy.visit('/');
    cy.get('a').contains('Form').click();
    cy.get('.active').contains('Form');
  });
  it('should show not found page', () => {
    cy.visit('/not-existing');
    cy.get('h1').contains('Not Found');
  });
});
