import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('should render', () => {
    render(<TextInput label="Test" />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<TextInput label="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
