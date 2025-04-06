import { expect, Locator } from '@playwright/test';

export class NordstromTopPickGuidesElement {
    private get guideLink(): Locator {
        return this.baseLocator.locator('ul>li');
    }

    public constructor(private baseLocator: Locator) {}

    public async getGuidesNames(): Promise<string[]> {
        const guideItems = this.guideLink;

        await guideItems.first().waitFor({state: 'visible', timeout: 5000});

        const guides = await guideItems.all();

        const guideNames: string[] = [];

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
        const activeTab = this.baseLocator.locator('ul>li.ZgHf6.CtGs9');

        await activeTab.scrollIntoViewIfNeeded();
        await expect(activeTab).toBeVisible({ timeout: 5000 });

        const text = await activeTab.textContent();
        return text?.trim() ?? '';
    }
}
