import { Locator, BrowserContext, Page } from '@playwright/test';
import * as fs from 'fs';

export class HomePage {
    private get dealsMenu(): Locator {
        return this.page.locator('[aria-label="Deals"]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async open(): Promise<void> {
        await this.page.goto('https://www.target.com/');
        await this.dealsMenu.waitFor();
    }

    public async goToDealMenu(): Promise<void> {
        await this.open();
        await this.dealsMenu.click();

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }
}
