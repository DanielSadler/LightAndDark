import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render', () => {
    render(<Checkbox label="Test" data-testid="checkbox" />);
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(<Checkbox label="Test" data-testid="checkbox" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
