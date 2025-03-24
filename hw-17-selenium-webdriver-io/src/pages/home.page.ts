import {ChainablePromiseElement} from 'webdriverio';
import { $, browser } from '@wdio/globals';

export class HomePage {
    public get dealsMenu(): ChainablePromiseElement {
        return $('[aria-label="Deals"]');
    }

    public async open(): Promise<void> {
        await browser.url('https://www.target.com/');
        await this.dealsMenu.waitForExist();
    }

    public async clickDealMenu(): Promise<void> {
        await this.dealsMenu.click();
    }

}
