---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { <%=name%> } from './<%=name%>';

describe('<%=name%>', () => {
  it('should render', () => {
    render(<<%=name%> />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<<%=name%> />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
