import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RouteGuard } from './RouteGuard';

export default {
  title: 'Templates/RouteGuard',
  component: RouteGuard,
} as ComponentMeta<typeof RouteGuard>;

const Template: ComponentStory<typeof RouteGuard> = (args) => (
  <RouteGuard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
