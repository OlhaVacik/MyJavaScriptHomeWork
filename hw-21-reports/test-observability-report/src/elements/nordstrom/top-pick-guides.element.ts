import { expect, Locator } from '@playwright/test';

export class NordstromTopPickGuidesElement {
    private get guideLink(): Locator {
        return this.baseLocator.locator('nav>ul>li');
    }

    private get topPicksHeader(): Locator {
        return this.baseLocator.locator('h2', {hasText: 'Top Picks for You'});
    }

    public constructor(private baseLocator: Locator) {}

    public async getTopPicksHeader(): Promise<void> {
        await this.topPicksHeader.scrollIntoViewIfNeeded();
        await expect(this.topPicksHeader).toBeVisible({ timeout: 8000 });
    }

    public async getGuidesNames(): Promise<string[]> {
        const guideNames: string[] = [];

        const guides = await this.guideLink.all();

        for (const guide of guides) {
            const text = await guide.textContent();

            let count = '';
            if (await guide.locator('.ZgHf6').isVisible()) {
                count = await guide.locator('.ZgHf6').textContent() ?? '';
            }
            guideNames.push(text?.trim().replace(count, '') ?? '');
        }
        return guideNames;
    }

    public async selectGuide(guideName: string): Promise<void> {
        const guideNames = await this.getGuidesNames();
        if (!guideNames.includes(guideName)) {
            throw new Error(`Tab with name "${guideName}" not found.`);
        }

        const tabs = await this.guideLink.all();
        await tabs[guideNames.indexOf(guideName)].click();
    }

    public async getActiveGuideName(): Promise<string> {
        const activeTab = this.baseLocator.locator('nav>ul>li.ZgHf6.CtGs9');

        await expect(activeTab).toBeVisible();

        const text = await activeTab.textContent();
        return text?.trim() ?? '';
    }
}
