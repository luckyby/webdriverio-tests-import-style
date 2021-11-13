const LoginPage = require('../pageobjects/login.page_old');
// import * as LoginPage  from '../pageobjects/login.page.mjs';
const SecurePage = require('../pageobjects/secure.page_old');
// import * as SecurePage from '../pageobjects/secure.page.mjs';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


