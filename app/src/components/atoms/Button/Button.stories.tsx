import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";

import { Button } from "./Button";

const actions = {
  onPress: action("onPress"),
};

storiesOf("Atoms/Button", module).add("default", () => (
  <Button title="Button" {...actions} />
));
