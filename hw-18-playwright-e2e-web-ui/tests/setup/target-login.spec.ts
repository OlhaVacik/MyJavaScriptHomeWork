import { expect, test } from '@playwright/test';
import { TargetLoginPage } from 'src/pages/target-login.page';

test.describe('Target Login', () => {
    test('Target Login With Email', async ({page, context}) => {
        const targetLoginPage = new TargetLoginPage(page, context);

        await targetLoginPage.loginWithEmail('vatsykolga@gmail.com', 'MyPassword1308CO##');

        await expect(page.locator('//span[@aria-label="My Target Hello, Olha"]')).toBeVisible();
    });
});
