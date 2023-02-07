import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Login } from './Login';
import { Wrapper } from '../../../mocks/QueryClientProvider';

describe('Login', () => {
  it('should render', () => {
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Login />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
