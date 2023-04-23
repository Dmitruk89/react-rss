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
    cy.visit('/about');
    cy.get('.active').contains('About us');
    cy.get('h1').contains('About us page');
  });
  it('should visit About page on nav-link clik', () => {
    cy.visit('/');
    cy.get('a').contains('About us').click();
    cy.get('.active').contains('About us');
    cy.get('h1').contains('About us page');
  });
  it('should visit Form page', () => {
    cy.visit('/form');
    cy.get('.active').contains('Form');
    cy.get('h1').contains('Form page');
  });
  it('should visit Form page on nav-link clik', () => {
    cy.visit('/');
    cy.get('a').contains('Form').click();
    cy.get('.active').contains('Form');
    cy.get('h1').contains('Form page');
  });
  it('should show not found page', () => {
    cy.visit('/not-existing');
    cy.get('h1').contains('Not Found');
  });
});
