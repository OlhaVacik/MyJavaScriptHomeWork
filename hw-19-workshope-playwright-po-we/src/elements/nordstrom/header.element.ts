import { Locator } from '@playwright/test';

export class NordstromHeaderElement {

    private get headerLogo(): Locator {
        return this.baseLocator.locator('div>a');
    }

    private get keywordSearchDesktop(): Locator {
        return this.baseLocator.locator('div>section');
    }

    private get hederYourMenu(): Locator {
        return this.baseLocator.locator('div>div>div');
    }

    private get siteNavigate(): Locator {
        return this.baseLocator.locator('nav>ul>li');
    }

    public constructor(private baseLocator: Locator) {}

    public async getHeadersNames(): Promise<string[]> {
        const tabNames: string[] = [];

        const tabs = await this.siteNavigate.all();

        for (const tab of tabs) {
            const text = await tab.textContent();

            let count = '';
            if (await tab.locator('button').isVisible()) {
                count = await tab.locator('button').textContent() ?? '';
            }

            tabNames.push(text?.trim().replace(count, '') ?? '');
        }

        return tabNames;
    }

    public async selectHeader(tabName: string): Promise<void> {
        const tabNames = await this.getHeadersNames();
        if (!tabNames.includes(tabName)) {
            throw new Error(`Tab with name "${tabName}" not found.`);
        }

        const tabs = await this.siteNavigate.all();
        await tabs[tabNames.indexOf(tabName)].click();
    }
}
