import * as React from "react";
import * as renderer from "react-test-renderer";

import { Button } from "./Button";

describe("Button", () => {
  it("should match a snapshot", () => {
    const tree = renderer
      .create(<Button title="Test" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
