import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Remember me',
  'data-testid': 'checkbox',
};
