const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/orangeHRM.cy.js',
      ]
      return config;
    },
  },
});
