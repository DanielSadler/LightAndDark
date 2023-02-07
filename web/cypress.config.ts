import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/component.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
