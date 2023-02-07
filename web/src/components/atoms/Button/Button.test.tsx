import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
