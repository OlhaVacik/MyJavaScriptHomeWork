import { Page } from '@playwright/test';
import { NordstromTopPickGuidesElement } from 'src/elements/nordstrom/top-pick-guides.element';

export class NordstromPage {
    private page: Page;

    public topPickGuidesHeader: NordstromTopPickGuidesElement;

    public constructor(page: Page) {
        this.page = page;
        this.topPickGuidesHeader = new NordstromTopPickGuidesElement(this.page.locator('div#product-recommendations-shelf-hp-story-path-sub-1'));
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.nordstrom.com/');
        await this.topPickGuidesHeader.getTopPicksHeader();
    }
}
