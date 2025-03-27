import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';

export class TargetLoginPage {
    private get targetLogo(): Locator {
        return this.page.locator('a[aria-label="Target home"]:first-of-type');
    }

    private get welcomeAccountLink(): Locator {
        return this.page.locator('//a[@data-test="@web/AccountLink"]');
    }

    private get popUpLogInWindow(): Locator {
        return this.page.locator('//div[@data-test="content-wrapper"]//button[text()=\'Sign in\']');
    }

    private get askRightEmail(): Locator {
        return this.page.locator('//span[text()=\'Not you?\']');
    }

    private get emailDateSession(): Locator {
        return this.page.locator('#invalidateSession');
    }

    private get emailInput(): Locator {
        return this.page.locator('#username');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginButton(): Locator {
        return this.page.locator('#login');
    }

    private get userAccount(): Locator {
        return this.page.locator('//*[@id="account-sign-in"]/span');
    }

    public get introducingPasskeys(): Locator {
        return this.page.locator('//h1[text()="Introducing passkeys"]');
    }

    public get buttonPasskeysLater(): Locator {
        return this.page.locator('//button[text()="Maybe later"]');
    }

    public get headerMyTarget(): Locator {
        return this.page.locator('//span[@aria-label="My Target Hello, Olha"]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://www.target.com/');
        await this.targetLogo.waitFor();
    }

    public async loginWithEmail(username: string, password: string): Promise<void> {
        console.log('[login] Navigating to Target');
        await this.goto();

        console.log('[login] Clearing cookies and storage');
        await this.context.clearCookies();
        await this.page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });

        console.log('[login] Reloading page after clearing storage');
        await this.page.reload();
        await this.targetLogo.waitFor();
        await this.welcomeAccountLink.click();

        console.log('[login] Checking if already logged in...');
        const alreadyLoggedIn = await this.headerMyTarget.isVisible().catch(() => false);
        if (alreadyLoggedIn) {
            console.log('[login] User already logged in — skipping login.');
            return;
        }

        console.log('[login] Waiting for popup sign-in button');
        await this.popUpLogInWindow.waitFor({ timeout: 10000 });
        await this.popUpLogInWindow.click();

        console.log('[login] Waiting for email input');
        await this.emailInput.waitFor();

        const askRightEmailVisible = await this.askRightEmail.isVisible().catch(() => false);
        if (askRightEmailVisible) {
            console.log('[login] Detected "Not you?" prompt — clearing session');
            await this.emailDateSession.click();
            await this.emailInput.waitFor();
            await this.emailInput.fill(username);
        }else {
            console.log('[login] Filling in email');
            await this.emailInput.fill(username);
        }
        console.log('[login] Filling in password');
        await this.passwordInput.fill(password);

        console.log('[login] Clicking login button');
        await this.loginButton.click();

        console.log('[login] Waiting for page to settle after login');
        await this.page.waitForLoadState('load');

        const isUserVisible = await this.targetLogo.waitFor({ timeout: 10000}).catch(() => false);

        if (!isUserVisible) {
            if (await this.introducingPasskeys.isVisible()) {
                console.log('[login] Handling "Introducing Passkeys" modal');
                await this.buttonPasskeysLater.click();
            }
        }
        console.log('[login] Clicking user icon to open account menu');
        await this.targetLogo.waitFor({timeout: 10000});
        await this.userAccount.click();

        console.log('[login] Waiting for headerMyTarget to confirm login');
        await this.headerMyTarget.waitFor({timeout: 10000});

        console.log('[login] Saving browser storage state');
        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));

        console.log('[login] Login flow complete');
    }
}
