/// <reference types="cypress">

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    for (let index = 0; index < 10; index++) {
      cy.contains('.status__time', `00:0${index}`, { timeout: 10_500 })
    }
  })

  it.only('hint', () => {
    cy.get('.game__cell--filled').should('have.length', 45);
    cy.get('.game__cell').not('.game__cell--filled').each((cell) => {
      cy.wrap(cell).click();
      cy.get('.status__action-hint').click();
    });
    cy.contains('.overlay__text', 'You solved it!').should('be.visible');
  })
})