import { storiesOf } from "@storybook/react-native";
import React from "react";

import { SignIn } from "./SignIn";

storiesOf("Pages/SignIn", module).add("default", (args) => (
  <SignIn {...args} />
));
