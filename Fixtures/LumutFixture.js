const base = require('@playwright/test');

// This 'LoginPage' must match the name in module.exports exactly
const { LoginPage } = require('../Pages/LumutPortLogin'); 
const { IncidentPage } = require('../Pages/LumutPortIncident');

const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    // You use the class name here to create the object
    const loginPage = new LoginPage(page); 
    await loginPage.navigate();
    await use(loginPage);
  },


  incidentPage: async ({ page }, use) => {
    const incidentPage = new IncidentPage(page);
    await use(incidentPage);
  }
});

module.exports = { test, expect: base.expect };