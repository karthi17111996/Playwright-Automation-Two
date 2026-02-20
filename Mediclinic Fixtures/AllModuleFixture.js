const base = require('@playwright/test');
const { LoginPage }   = require('../MediclinicPOM/LoginPOM');
const { AuditModule } = require('../MediclinicPOM/AuditPOM'); // ✅ AuditModule import

const test = base.test.extend({

    // ✅ Login Fixture
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await use(loginPage);
    }, // ✅ Comma இருக்கணும்!

    // ✅ Audit Fixture
    auditModule: async ({ page }, use) => {
        const auditmodule = new AuditModule(page);
        await auditmodule.navigate();
        await use(auditmodule);
    } // ✅ Last fixture-க்கு comma வேண்டாம்

});

module.exports = { test, expect: base.expect };