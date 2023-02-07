import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from './Notification';

export default {
  title: 'Atoms/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Primary = Template.bind({});
Primary.args = { setShow: () => null, headerText: '', error: false };
