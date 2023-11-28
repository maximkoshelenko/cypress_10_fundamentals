import { starting, solved } from '../fixtures/sudoku.json'

// Extend the Window interface with custom properties
interface CustomWindow extends Window {
  starting?: string[];
  solved?: string[];
}

describe('Sudoku', () => {
  it('Play the same game', () => {
    cy.visit('/', {
      onBeforeLoad: (window) => {
        (window as CustomWindow).starting = starting;
        (window as CustomWindow).solved = solved;
      },
    });
    cy.get('.game__cell:contains(0)').should('have.length', 3);
    starting.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click();
        cy.contains('.status__number', solved[index]).click();
      }
    })
    cy.contains('.overlay__text', 'You solved it!').should('be.visible');
  })
})