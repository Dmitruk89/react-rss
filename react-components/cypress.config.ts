/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);

      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
