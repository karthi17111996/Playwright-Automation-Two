
const { test, expect } = require('../Mediclinic Fixtures/AllModuleFixture')


test('User provides wrong credentials', async ({ loginPage }) => {
    await loginPage.login('Karthi', '12545678');
});

test('User leaves username empty', async ({ loginPage }) => {
    await loginPage.login('', '12545678');
});

test('User logins successfully', async ({ loginPage, page }) => {
    await loginPage.login('80101967', 'Med@2026');
    await expect(page).toHaveURL('https://uatmedic.ardhas.com/Home/Index');
});

test.skip('Logout', async ({ loginPage }) => {
    await loginPage.logout();
});

test('Audit Management',async ({ AuditPage }) => {
      
    await AuditPage.auditandinspection();
    await AuditPage.corporateaudit();
    await AuditPage.AddCAP();

}

)