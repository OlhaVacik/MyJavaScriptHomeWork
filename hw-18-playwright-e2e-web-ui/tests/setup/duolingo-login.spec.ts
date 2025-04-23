import { test } from '@playwright/test';
import { DuolingoLoginPage } from 'src/pages/duolingo-login.page';

test.describe('Duolingo Login', () => {
    test.skip('Duolingo Login With Email', async ({page, context}) => {
        const duolingoLoginPage = new DuolingoLoginPage(page, context);

        await duolingoLoginPage.clearCookies();
        await duolingoLoginPage.loginWithEmail('vatsykolga@gmail.com', 'MyPassword1308CO##');

        await duolingoLoginPage.expectLoggedIn();
    });
});
