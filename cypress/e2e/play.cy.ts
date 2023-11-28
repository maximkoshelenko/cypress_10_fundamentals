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
    })
  })
})