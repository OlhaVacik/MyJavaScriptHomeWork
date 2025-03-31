import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';


export class DealsPage {

    private get topDeals(): Locator {
        return this.page.locator('//span[text()="Top Deals"]');
    }

    private get targetCircleDeals(): Locator {
        return this.page.locator('//span[text()="Target Circle Deals"]');
    }

    private get weeklyAd(): Locator {
        return this.page.locator('//span[text()="Weekly Ad"]');
    }

    private get clearance(): Locator {
        return this.page.locator('//span[@class="styles_wrapper__YYaWP" and text()="Clearance"]');
    }

    private get topDealsHeader(): Locator {
        return this.page.locator('//h1[text()="Top Deals"]');
    }

    private get targetCircleDealsHeader(): Locator {
        return this.page.locator('//div[h1[text()="Target Circle™ Deals"]]');
    }

    private get weeklyAdHeader(): Locator {
        return this.page.locator('//div[@data-test="global-header"]//div[h2[text()="Weekly Ad "]]');
    }

    private get clearanceHeader(): Locator {
        return this.page.locator('//div[@data-component-id="WEB-c_web_pagetitle_v01"]//div[h1[text()="Clearance"]]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async goToTopDeals(): Promise<void> {
        await this.topDeals.click();
        await this.topDealsHeader.waitFor({timeout: 5000});

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }

    public isTopDealsHeaderVisible(): Locator {
        return this.topDealsHeader;
    }

    public async goToTargetCircleDeals(): Promise<void> {
        await this.targetCircleDeals.click();
        await this.targetCircleDealsHeader.waitFor({timeout: 5000});

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }

    public isTargetCircleDealsHeaderVisible(): Locator {
        return this.targetCircleDealsHeader;
    }

    public async goToWeeklyAd(): Promise<void> {
        await this.weeklyAd.click();
        await this.weeklyAdHeader.waitFor({timeout: 5000});

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }

    public isWeeklyAdHeaderVisible(): Locator {
        return this.weeklyAdHeader;
    }

    public async goToClearance(): Promise<void> {
        await this.clearance.click();
        await this.clearanceHeader.waitFor({timeout: 5000});

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }

    public isClearanceHeaderVisible(): Locator {
        return this.clearanceHeader;
    }
}
