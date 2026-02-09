class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('input[placeholder="Username"]');
    this.passwordInput = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button:has-text("Log In")');

    this.sidePopupError = page.locator('text=Invalid Username and Password');
    this.usernameError = page.locator('text=Please enter your Username');
    this.passwordError = page.locator('text=Please enter your Password');
  }

  async navigate() {
    await this.page.goto('https://devsiemensehs.neoehs.com/Testing/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click(); // auto-wait handled by Playwright
  }

  async isSidePopupErrorVisible() {
    return await this.sidePopupError.isVisible();
  }

  async isUsernameErrorVisible() {
    return await this.usernameError.isVisible();
  }

  async isPasswordErrorVisible() {
    return await this.passwordError.isVisible();
  }
}

module.exports = { LoginPage };

