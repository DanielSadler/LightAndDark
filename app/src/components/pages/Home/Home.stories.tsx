import { storiesOf } from "@storybook/react-native";
import React from "react";

import { Home } from "./Home";

storiesOf("Pages/Home", module).add("default", (args) => <Home {...args} />);
