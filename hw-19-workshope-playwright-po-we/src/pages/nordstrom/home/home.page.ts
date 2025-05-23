import { Locator, Page } from '@playwright/test';
import { NordstromTopPickGuidesElement } from 'src/elements/nordstrom/top-pick-guides.element';
import { ItemDetailsPageModel } from 'src/models/item-details.pm';
import { TopPicksProductsElement } from 'src/elements/nordstrom/top-picks-products.element';
import { NordstromBasePage } from 'src/pages/nordstrom/home/base.page';

export class NordstromHomePage extends NordstromBasePage {
    private get summaryIcon(): Locator {
        return this.page.locator('div.Gk0sK>ul>li.fOGa1');
    }

    public nordstromTopPickGuidesElement: NordstromTopPickGuidesElement;

    public constructor(page: Page) {
        super(page);
        this.nordstromTopPickGuidesElement = new NordstromTopPickGuidesElement(this.page.locator('div#product-recommendations-shelf-hp-story-path-sub-1'));
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
        await this.nordstromTopPickGuidesElement.selectGuide(guideName);

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
