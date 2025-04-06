import { Locator, Page } from '@playwright/test';
import { NordstromTopPickGuidesElement } from 'src/elements/nordstrom/top-pick-guides.element';
import { NordstromBasePage } from './header.page';
import { ItemDetailsPageModel } from 'src/models/item-details.pm';
import { TopPicksProductsElement } from 'src/elements/nordstrom/top-picks-products.element';

export class NordstromHomePage extends NordstromBasePage {
    private get summaryIcon(): Locator {
        return this.page.locator('div.Gk0sK>ul>li.fOGa1');
    }

    public nordstromTopPickGuidesElement: NordstromTopPickGuidesElement;

    public constructor(page: Page) {
        super(page);
        this.nordstromTopPickGuidesElement = new NordstromTopPickGuidesElement(this.page.locator('div.dls-ihm460>nav'));
    }

    public async getGuideNames(): Promise<string[]> {
        return this.nordstromTopPickGuidesElement.getGuidesNames();
    }

    public async clickGuide(name: string): Promise<void> {
        await this.nordstromTopPickGuidesElement.selectGuide(name);
    }

    public async getActiveGuide(): Promise<string> {
        return this.nordstromTopPickGuidesElement.getActiveGuideName();
    }

    public async getTopPicksItemsByGuide(guideName: string): Promise<ItemDetailsPageModel[]> {
        await this.page.locator('h2:has-text("Top Picks for You")').scrollIntoViewIfNeeded();
        await this.page.locator('h2:has-text("Top Picks for You")').waitFor({ state: 'visible', timeout: 8000 });

        await this.nordstromTopPickGuidesElement.selectGuide(guideName);

        await this.summaryIcon.first().scrollIntoViewIfNeeded();
        await this.summaryIcon.first().waitFor({ state: 'visible', timeout: 8000 });

        const summaryItems = await this.summaryIcon.all();
        const summaryDetails: ItemDetailsPageModel[] = [];

        for (const item of summaryItems) {
            const itemElement = new TopPicksProductsElement(item);
            const details = await itemElement.getItemDetails();
            summaryDetails.push(details);
        }

        return summaryDetails;
    }
}
