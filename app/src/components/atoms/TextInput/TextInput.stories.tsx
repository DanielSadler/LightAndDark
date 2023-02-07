import { storiesOf } from "@storybook/react-native";
import React from "react";

import { TextInput } from "./TextInput";

storiesOf("Atoms/TextInput", module)
  .add("label", () => (
    <TextInput label="Email Address" keyboardType="email-address" />
  ))
  .add("placeholder", () => (
    <TextInput placeholder="Email Address" keyboardType="email-address" />
  ));
