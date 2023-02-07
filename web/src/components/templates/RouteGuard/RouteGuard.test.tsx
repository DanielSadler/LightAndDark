import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { RouteGuard } from './RouteGuard';

describe('RouteGuard', () => {
  it('should render', () => {
    render(
      <RouteGuard>
        <div />
      </RouteGuard>
    );
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <RouteGuard>
          <div />
        </RouteGuard>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
