import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class DealsPage {

    private get topDeals(): ChainablePromiseElement {
        return $('//span[text()="Top Deals"]');
    }

    private get targetCircleDeals(): ChainablePromiseElement {
        return $('//span[text()="Target Circle Deals"]');
    }

    private get weeklyAd(): ChainablePromiseElement {
        return $('//span[text()="Weekly Ad"]');
    }

    private get clearance(): ChainablePromiseElement {
        return $('//span[@class="styles_wrapper__YYaWP" and text()="Clearance"]');
    }

    public async clickTopDeals(): Promise<void> {
        await this.topDeals.click();
    }

    public async isTopDealsPageDisplayed(): Promise<boolean> {
        return (await $('//h1[text()="Top Deals"]')).isDisplayed();
    }

    public async clickTargetCircleDeals(): Promise<void> {
        await this.targetCircleDeals.click();
    }

    public async isTargetCircleDealsPageDisplayed(): Promise<boolean> {
        return (await $('//div[h1[text()="Target Circle™ Deals"]]')).isDisplayed();
    }

    public async clickWeeklyAd(): Promise<void> {
        await this.weeklyAd.click();
    }

    public async isWeeklyAdPageDisplayed(): Promise<boolean> {
        return (await $('//div[@data-test="global-header"]//div[h2[text()="Weekly Ad "]]')).isDisplayed();
    }

    public async clickClearance(): Promise<void> {
        await this.clearance.click();
    }

    public async isClearancePageDisplayed(): Promise<boolean> {
        return (await $('//div[@data-component-id="WEB-c_web_pagetitle_v01"]//div[h1[text()="Clearance"]]')).isDisplayed();
    }
}
