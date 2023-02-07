import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

const { Primary } = composeStories(stories);

describe('Button component', () => {
  it('mounts correctly', () => {
    cy.mount(<Primary />);
  });
});
