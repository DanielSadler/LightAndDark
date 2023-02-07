---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import { storiesOf } from "@storybook/react-native";
import React from "react";

import { <%=Name%>  } from "./<%=Name%>";

storiesOf("<%=h.changeCase.sentence(atomic)%>s/<%=Name%>", module).add("default", (args) => <<%=Name%> {...args} />);
