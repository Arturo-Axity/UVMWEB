const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    email: "Alopezv@qa.tutor.uvm.edu.mx",
    password: "NatArt0423",
    email2: "arturo.lopezvel@laureate.mx",
    password2: "MitArt0423??",
    executionTime: new Date().toISOString(),
  },
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    browser: "chrome",
    baseUrl: "https://laureateqa.axity.com/sdig/uvm", //QA
    baseUrl2: "https://laureateqa.axity.com/sdig/uvm/admin/", //QA
    // baseUrl2: "https://portal-admin.uvmnet.edu", //PROD uvm
    // baseUrl2: "https://portal-admin.unitec.mx", //PROD untc
    experimentalModifyObstructiveThirdPartyCode: true,
    video: false,
    screenshots: true,
    screenshotsOnRunFailure: true,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
