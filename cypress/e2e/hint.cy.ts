
describe('hint', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('hint', () => {
    cy.get('.game__cell--filled').should('have.length', 45);
    cy.get('.game__cell').not('.game__cell--filled').each((cell) => {
      cy.wrap(cell).click();
      cy.get('.status__action-hint').click();
    });
    cy.contains('.overlay__text', 'You solved it!').should('be.visible');
  })
})