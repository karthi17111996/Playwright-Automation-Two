class LoginPage {
    constructor(page) {
        this.page = page;

        // Login Locators
        this.usernameInput = page.locator('#userName');
        this.passwordInput = page.locator('#password');
        this.loginButton   = page.locator('button[onclick="Logincheck()"]');
   

    }

    async navigate() {
        // ✅ Correct URL
        await this.page.goto('https://uatmedic.ardhas.com/Account/Login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle'); 
    }

    async auditandinspection(){

        await this.auditandinspection.click();
        await this.corporateaudit.click();
        await this.addaudit.click();

    } 

    
}

module.exports = { LoginPage };