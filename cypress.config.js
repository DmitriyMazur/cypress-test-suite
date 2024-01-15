const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Set the default viewport size
  viewportWidth: 1200,
  viewportHeight: 800,

  //take screenshot on failure
  screenshotOnRunFailure: true,
  "screenshotsFolder": "cypress/screenshots",

  // Specify the reporter(s) for test results
  reporter: 'mochawesome',

  e2e: {
    baseUrl: 'https://www.cypress.io', // Specify the base URL for your application

    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // You can include your previous setupNodeEvents logic here
    },

    // Configure the test files to include or exclude
    specPattern: 'cypress/e2e/*.js',

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
