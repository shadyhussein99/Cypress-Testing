const { defineConfig } = require("cypress");

// We added "baseUrl" to add the path directly in cy.visit instead of specifying localhost each time 
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
