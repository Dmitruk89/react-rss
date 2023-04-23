/// <reference types="cypress" />
describe('Form interaction', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  it('should not submit with invalid inputs', () => {
    cy.visit('/form');
    cy.get('.form input[type="submit"]').click();
    cy.get('.notification-message').should('have.text', 'Form was not submitted');
    cy.get('.validation').should('not.have.text', '');
    cy.wait(3000);
    cy.get('.notification-message').should('not.exist');
  });
  it('should submit with valid inputs', () => {
    cy.visit('/form');
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="agree"]').click();
    cy.get('input[type="file"]').selectFile('cypress/fixtures/rslogo.jpg');
    cy.get('.form input[type="submit"]').click();
    cy.get('.notification-message').should('have.text', 'Form was successfully submitted');
    cy.get('.validation').should('have.text', '');
    cy.get('.notification-message').click();
    cy.get('.notification-message').should('not.exist');
  });
});
