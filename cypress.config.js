const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io', // Specify the base URL for your application

    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // You can include your previous setupNodeEvents logic here
    },

    // Set the default viewport size
    viewportWidth: 1200,
    viewportHeight: 800,

    // Configure the test files to include or exclude
    specPattern: 'cypress/e2e/*.js',

    "screenshotsFolder": "cypress/screenshots",

    // Specify the reporter(s) for test results
    reporter: 'mochawesome',

    // Set up environment variables if needed
    env: {
      // Your environment variables go here
    },

    // Enable experimental features if desired
    experimentalFetchPolyfill: true,

    // Configure retries for flaky tests
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
