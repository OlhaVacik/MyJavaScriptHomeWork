import {Locator, Page } from '@playwright/test';

export class NordstromPage {
    public get userLogo(): Locator {
        return this.page.locator('figure.rq8ns');
    }
    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.nordstrom.com/');
        await this.userLogo.waitFor();
    }
}
