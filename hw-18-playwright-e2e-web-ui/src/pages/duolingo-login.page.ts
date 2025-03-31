import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import * as fs from 'fs';

export class DuolingoLoginPage {
    private get duolingoLogo(): Locator {
        return this.page.locator('//*[@id="root"]/div[1]/header/div[1]/nav/a/img');
    }

    private get haveAccountButton(): Locator {
        return this.page.locator('//button[@data-test="have-account"]');
    }

    private get emailInput(): Locator {
        return this.page.locator('//input[@data-test="email-input"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('//input[@data-test="password-input"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('//button[@data-test="register-button"]');
    }

    private get myAccountHome(): Locator {
        return this.page.locator('//a[@data-test="home-nav"]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async clearCookies(): Promise<void> {
        console.log('[clear Cookies] Clearing all cookies and storage data');
        await this.context.clearCookies();
        await this.context.clearPermissions();
        console.log('[clearCookies] Done');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.duolingo.com/');
        await this.duolingoLogo.waitFor({state: 'visible', timeout: 10000});
    }

    public async loginWithEmail(username: string, password: string): Promise<void> {
        console.log('[login] Navigating to Duolingo');
        await this.goto();

        await this.haveAccountButton.click();

        console.log('[login] Filling in email');
        await this.emailInput.fill(username);

        console.log('[login] Filling in password');
        await this.passwordInput.fill(password);

        console.log('[login] Clicking login button');
        await this.loginButton.click();

        await this.myAccountHome.waitFor({state: 'visible', timeout: 10000});

        console.log('[login] Saving browser storage state');
        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));

        console.log('[login] Login flow complete');
    }

    public async expectLoggedIn(): Promise<void> {
        await expect(this.myAccountHome).toBeVisible();
    }
}
