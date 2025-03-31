import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';

export class TargetLoginPage {
    private get targetLogo(): Locator {
        return this.page.locator('a[aria-label="Target home"]:first-of-type');
    }

    private get welcomeAccountLink(): Locator {
        return this.page.locator('[data-test="\\@web\\/AccountLink"]');
    }

    private get popUpLogInWindow(): Locator {
        return this.page.locator('[data-test="accountNav-signIn"]');
    }

    private get emailInput(): Locator {
        return this.page.locator('#username');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginWithPasswordButton(): Locator {
        return this.page.getByRole('button', { name: 'Sign in with password' });
    }

    private get headerMyAccountTarget(): Locator {
        return this.page.locator('[data-test="modal-drawer-heading"]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async clearCookies(): Promise<void> {
        console.log('[clear Cookies] Clearing all cookies and storage data');
        await this.context.clearCookies();
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.target.com/');
        await this.targetLogo.waitFor();
    }

    public async loginWithEmail(username: string, password: string): Promise<void> {
        console.log('[login] Navigating to Target');
        await this.goto();

        await this.welcomeAccountLink.click();
        await this.popUpLogInWindow.click();
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginWithPasswordButton.click();

        await this.targetLogo.waitFor();
        await this.welcomeAccountLink.click();
        await this.headerMyAccountTarget.waitFor();

        console.log('[login] Saving browser storage state');
        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
        console.log('[login] Login flow complete');
    }

    public isMyAccountHeaderVisible(): Locator {
        return this.headerMyAccountTarget;
    }
}
