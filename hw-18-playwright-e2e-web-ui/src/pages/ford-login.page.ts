import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import * as fs from 'fs';

export class FordLoginPage {
    private get fordLogo(): Locator {
        return this.page.locator('a#brand-nav-logo-lnk-center');
    }

    private get welcomeAccountLink(): Locator {
        return this.page.locator('#brand-nav-user-btn-dsk');
    }

    private get signInButton(): Locator {
        return this.page.locator('li#brand-nav-user-li1-dsk');
    }

    private get emailInput(): Locator {
        return this.page.locator('#signInName');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginButton(): Locator {
        return this.page.locator('button#next');
    }

    private get userAccount(): Locator {
        return this.page.locator('//button[@id="brand-nav-user-btn-dsk"]//span[text()="Hi, Olha"]');
    }

    private get myAccount(): Locator {
        return this.page.locator('//li[@id="brand-nav-user-li3-dsk"]//span[@class="link-text" and text()="Olha\'s Account"]');
    }

    private async waitForLoadingToFinish(): Promise<void> {
        const loading = this.page.locator('text=Please do not click the back button or refresh the page.');
        try {
            await loading.waitFor({state: 'visible', timeout: 5000});
        } catch {
            // If it doesn't show up, it's not essential.
        }
        await loading.waitFor({state: 'hidden', timeout: 45000});
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://www.ford.com/');
        await this.fordLogo.waitFor();
    }

    public async loginWithEmail(username: string, password: string): Promise<void> {
        console.log('[login] Navigating to Ford');
        await this.goto();

        console.log('[login] Checking if already logged in...');
        const alreadyLoggedIn = await this.userAccount.isVisible();
        if (alreadyLoggedIn) {
            console.log('[login] User already logged in — skipping login.');
            return;
        }
        await this.welcomeAccountLink.click();

        console.log('[login] Waiting for popup sign-in button');
        await this.signInButton.click();

        console.log('[login] Filling in email');
        await this.emailInput.fill(username);

        console.log('[login] Filling in password');
        await this.passwordInput.fill(password);

        console.log('[login] Clicking login button');
        await this.loginButton.click();

        console.log('[login] Waiting for MyAccount to confirm login');
        await this.waitForLoadingToFinish();

        console.log('[login] Saving browser storage state');
        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));

        console.log('[login] Login flow complete');
    }

    public async expectLoggedIn(): Promise<void> {
        await expect(this.myAccount).toBeVisible();
    }
}
