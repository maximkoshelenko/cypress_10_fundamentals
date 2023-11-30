import React from 'react';
import { Numbers } from './Numbers';
import '../App.css';

describe('Numbers', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('show numbers', () => {
    cy.mount(
      React.createElement(
        'div',
        { className: 'innercontainer' },
        React.createElement(
          'section',
          { className: 'status' },
          React.createElement(Numbers),
        ),
      ),
    );
    cy.get('.status__number').should('have.length', 9);
  });
});
