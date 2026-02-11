class LoginPage {
  constructor(page) {
    this.page = page;

    // LoginLocators
    this.usernameInput = page.locator('input[placeholder="Username"]');
    this.passwordInput = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button:has-text("Enter")');

    //Incident locators
   
  }

  async navigate() {
    await this.page.goto('http://104.211.139.218/Lumut_Port/Dev/V3_demo/login');
  }

  /**
   * Universal Login Method
   * Use this for both valid and invalid testing.
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}


module.exports = { LoginPage };
