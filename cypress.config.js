const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wwwprep.medikeeper.com/accounts/v8/takehome/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
