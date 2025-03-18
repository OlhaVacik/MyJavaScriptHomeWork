import { Page, ElementHandle } from 'puppeteer';

export class PetsPage {
    private goodsSelector = 'ul.h-flex-direction-row > li.sc-c5abeb58-1';

    public constructor(private page: Page) {}

    private async searchInput(): Promise<ElementHandle<Element> | null> {
        return await this.page.$('#search');
    }

    private async searchButton(): Promise<ElementHandle<Element> | null> {
        return await this.page.$('button[aria-label=\'search\']');
    }

    private async goodsElements(): Promise<ElementHandle<Element>[]> {
        return await this.page.$$(this.goodsSelector);
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.target.com/');
        await this.page.waitForSelector('#search');
    }

    public async fillSearchInput(value: string): Promise<void> {
        const input = await this.searchInput();
        if (input) await input.type(value);
    }

    public async clickSearchButton(): Promise<void> {
        const button = await this.searchButton();
        if (button) await button.click();
    }

    public async waitForSearchResults(): Promise<void> {
        await this.page.waitForSelector(this.goodsSelector);
    }

    public async getSearchResults(): Promise<string[]> {
        const goods = await this.goodsElements();
        const goodsText: string[] = [];

        for (const good of goods) {
            const text = (await good.evaluate((el) => el.textContent?.trim() || '')) as string;
            goodsText.push(text);
        }

        return goodsText;
    }
}
