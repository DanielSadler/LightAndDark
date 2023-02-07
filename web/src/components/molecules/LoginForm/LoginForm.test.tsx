import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { LoginForm } from './LoginForm';
import { Wrapper } from '../../../mocks/QueryClientProvider';

describe('LoginForm', () => {
  it('should render', () => {
    render(
      <Wrapper>
        <LoginForm />
      </Wrapper>
    );
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
