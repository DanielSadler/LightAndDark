---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { <%=Name%> } from './<%=name%>';

export default {
  title: '<%=h.changeCase.sentence(atomic)%>s/<%=Name%>',
  component: <%=Name%>,
} as ComponentMeta<typeof <%=Name%>>;

export const <%=Name%>Template: ComponentStory<typeof <%=Name%>> = (args) => (
  <<%=Name%> {...args} />
);

<%=Name%>Template.storyName = '<%=Name%>';
