import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Notification } from './Notification';

describe('Notification', () => {
  it('should render', () => {
    render(<Notification setShow={() => null} headerText="" error={false} />);
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(<Notification setShow={() => null} headerText="" error={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
