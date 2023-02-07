import * as React from "react";
import * as renderer from "react-test-renderer";

import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("should match a snapshot", () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
