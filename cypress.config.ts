import { defineConfig } from 'cypress';

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  env: {
    await: 1000,
  },
  projectId: 'r2ifyk',
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 832,
  video: false,
  defaultCommandTimeout: 10000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  retries: 2,
  experimentalStudio: true,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
  },
});
