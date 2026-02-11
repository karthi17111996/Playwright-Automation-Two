const { test, expect } = require('../Fixtures/LumutFixture');




  test.skip('User provides wrong credentials', async ({ loginPage }) => {
    // loginPage is already initialized and at the URL!
    await loginPage.login('Karthi', '12545678');
    
  });

  test.skip('User leaves username empty', async ({ loginPage }) => {
    await loginPage.login('', '12545678');
    
  });

  test.skip('User logins successfully', async ({ loginPage, page }) => {
    await loginPage.login('SUP00001', '36gbv3as');
    await expect(page).toHaveURL(/.*dashboard/);
  });



test('Process: Login and then Create Incident', async ({ loginPage, incidentPage }) => {
  // Step 1: Use the Login POM
  await loginPage.login('SUP00001', '36gbv3as');

  // Step 2: Use the Incident POM (on the same page/session!)
  await incidentPage.openIncidentModule();
  await incidentPage.clickNotification();
  await incidentPage.clickAddIncident();
  await incidentPage.selectLocation('LMT');
  await incidentPage.selectSpecificLocation('LMT Office');
  await incidentPage.eventrelatedcheckbox();
  await incidentPage.selectDate('11');
});