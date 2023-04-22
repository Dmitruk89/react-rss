/// <reference types="cypress" />
describe('Home page interaction', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  it('should render initial cards', () => {
    cy.visit('/');
    cy.get('[data-testId="card-list-element"]')
      .find('[data-testId="card-element"]')
      .should('have.length', 20);
  });
  it('should show error if could not render cards', () => {
    cy.visit('/');
    cy.get('[data-testId="search-bar-element"] input').type('bugaga');
    cy.get('[data-testId="search-button-element"]').click();
    cy.get('[data-testId="request-error-element"]').should('exist');
  });
  it('should show open the modal and close on close-button click', () => {
    cy.visit('/');
    cy.get('[data-testId="card-element"]').eq(0).click();
    cy.get('[data-testId="modal-element"]').should('exist');
    cy.get('[data-testId="modal-close-btn"]').click();
    cy.get('[data-testId="modal-element"]').should('not.exist');
  });
  it('should show open the modal and close on modal overlay click', () => {
    cy.visit('/');
    cy.get('[data-testId="card-element"]').eq(0).click();
    cy.get('[data-testId="modal-element"]').should('exist');
    cy.document().then((doc) => {
      const x = 10;
      const y = 10;
      cy.wrap(doc.documentElement).click(x, y);
    });
    cy.get('[data-testId="modal-element"]').should('not.exist');
  });
});
