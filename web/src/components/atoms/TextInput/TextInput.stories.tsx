import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './TextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email address',
  id: 'email',
  name: 'email',
  type: 'email',
  autoComplete: 'email',
};
export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  id: 'password',
  name: 'password',
  type: 'password',
  autoComplete: 'current-password',
};
