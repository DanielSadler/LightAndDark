---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.test.cy.tsx
---
import { composeStories } from '@storybook/testing-react';
import * as stories from './<%=name%>.stories';

const { <%=Name%>Template } = composeStories(stories);

describe('<%=name%> component', () => {
  it('mounts correctly', () => {
    cy.mount(<<%=Name%>Template />);
  });
});
