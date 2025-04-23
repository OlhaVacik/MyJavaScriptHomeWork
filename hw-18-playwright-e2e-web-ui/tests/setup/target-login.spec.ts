import { expect, test } from '@playwright/test';
import { TargetLoginPage } from 'src/pages/target-login.page';

test.describe('Target Login', () => {
    test.skip('Target Login With Email', async ({page, context}) => {
        const targetLoginPage = new TargetLoginPage(page, context);

        await targetLoginPage.clearCookies();
        await targetLoginPage.loginWithEmail('vatsykolga@gmail.com', 'MyPassword1308CO##');

        await expect(targetLoginPage.isMyAccountHeaderVisible()).toBeVisible();
    });
});
