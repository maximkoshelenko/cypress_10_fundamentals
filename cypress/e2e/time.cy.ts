describe('empty spec', () => {
  beforeEach(() => {
    // cy.visit('/');
  });

  it('show minutes and seconds since game started', () => {
    cy.clock();
    cy.visit('/');
    cy.contains('.status__time', '00:00');
    cy.tick(20_000); // Simulate a shift of 20 seconds
    cy.contains('.status__time', '00:20');
  })
})