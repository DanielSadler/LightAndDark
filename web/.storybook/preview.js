import '../styles/globals.css';
import { Wrapper } from '../src/mocks/QueryClientProvider';
import { RouterContext } from "next/dist/shared/lib/router-context";
import { worker } from '../src/mocks/browser';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: "en",
  },
};

export const decorators = [
  (Story) => (
    <Wrapper>
			<Story />
    </Wrapper>
  )
];

worker.start();
