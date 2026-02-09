const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/Login');  // <-- path relative to tests folder

test.describe('Login Page Validations', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page); // create POM instance
    await loginPage.navigate();       // navigate to login page
  });

  test('Wrong username and password shows side popup error', async ({ page }) => {
    await loginPage.login('Karthi', '12545678');
    await expect(loginPage.sidePopupError).toBeVisible();
  });

  test('Empty username shows inline error', async ({ page }) => {
    await loginPage.login('', '1254');
    await expect(loginPage.usernameError).toBeVisible();
  });

  test('Empty password shows inline error', async ({ page }) => {
    await loginPage.login('Karthi', '');
    await expect(loginPage.passwordError).toBeVisible();
  });

  test('Empty username and password shows both inline errors', async ({ page }) => {
    await loginPage.login('', '');
    await expect(loginPage.usernameError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();

    
  });
  test('Correct Username and Password',async({page}) => {
   await loginPage.login('admin','asdF@1234567')
   

  });
});

