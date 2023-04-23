/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />
// About API testing: https://docs.cypress.io/api/commands/request#Method-and-URL
describe('Check https://rickandmortyapi.com/api/character/ request', () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/`,
    }).as('getEntries');

    cy.get('@getEntries').should((response: any) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response.body).to.have.property('results');
    });
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});
