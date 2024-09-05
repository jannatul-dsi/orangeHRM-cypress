const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    watchForFileChanges: false,
    autoRefresh: false,
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/*.js',
      ]
      return config;
    },
  },
});
