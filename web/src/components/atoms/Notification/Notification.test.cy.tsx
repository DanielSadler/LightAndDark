import { composeStories } from '@storybook/testing-react';
import * as stories from './Notification.stories';

const { Primary } = composeStories(stories);

describe('Notification component', () => {
  it('mounts correctly', () => {
    cy.mount(<Primary />);
  });
});
