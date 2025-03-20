import {ChainablePromiseElement} from 'webdriverio';
import { $, browser } from '@wdio/globals';

export class HomePage {
    public get dealsMenu(): ChainablePromiseElement {
        return $('[aria-label="Deals"]');
    }

    public async open(): Promise<void> {
        await browser.url('https://www.target.com/');
    }

    public async clickDealMenu(): Promise<void> {
        await this.dealsMenu.waitForExist();
        await this.dealsMenu.click();
    }

}
export default new HomePage();
