import { composeStories } from '@storybook/testing-react';
import * as stories from './Checkbox.stories';

const { Primary } = composeStories(stories);

describe('Checkbox component', () => {
  it('mounts correctly', () => {
    cy.mount(<Primary />);
  });
  it('displays the checkbox and the label', () => {
    cy.mount(<Primary />);
    cy.get('[data-testid="checkbox"]').should('be.visible');
    cy.get('[data-testid="checkbox-label"]').should('be.visible');
  });
  it('allows checking and unchecking the box', () => {
    cy.mount(<Primary />);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="checkbox"]').should('be.checked');
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="checkbox"]').should('not.be.checked');
  });
});
