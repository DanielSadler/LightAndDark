import * as React from "react";
import * as renderer from "react-test-renderer";

import { SignIn } from "./SignIn";

describe("SignIn", () => {
  it("should match a snapshot", () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
