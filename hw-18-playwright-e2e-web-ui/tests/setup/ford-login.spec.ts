import { test } from '@playwright/test';
import { FordLoginPage } from 'src/pages/ford-login.page';

test.describe('Ford Login', () => {
    test.skip('Ford Login With Email', async ({page, context}) => {
        const fordLoginPage = new FordLoginPage(page, context);

        await fordLoginPage.loginWithEmail('vatsykolga@gmail.com', 'MyPassword1308CO##');

        await fordLoginPage.expectLoggedIn();
    });
});
