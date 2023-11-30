import React from 'react';
import { Game } from './Game';
import './App.css';
import { SudokuProvider } from './context/SudokuContext';
import { starting, solved } from '../cypress/fixtures/sudoku.json'

interface CustomWindow extends Window {
  starting?: string[];
  solved?: string[];
}

describe('Numbers', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('show numbers', () => {
    (window as CustomWindow).starting = starting;
    (window as CustomWindow).solved = solved;
    cy.mount(
      React.createElement(
        SudokuProvider,
        null,
        React.createElement(Game)
      )
    );

    cy.get('.game__cell:contains(0)').should('have.length', 3);
    starting.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click();
        cy.contains('.status__number', solved[index]).click();
      }
    })
    cy.contains('.overlay__text', 'You solved it!').should('be.visible');
  });
});
