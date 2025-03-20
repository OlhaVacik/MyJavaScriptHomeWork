
import { browser, expect } from '@wdio/globals';
import HomePage from 'src/pages/home.page';
import DealsPage from 'src/pages/deals.page';


describe('Target Website Tests', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.target.com/');
    });

    it('TC-1: Verify clicking "Top Deals" redirects to the correct page', async () => {
        await HomePage.clickDealMenu();
        await DealsPage.clickTopDeals();
        expect(await DealsPage.isTopDealsPageDisplayed()).toBe(true);
    });

    it('TC-2: Verify clicking "Target Circle Deals" redirects correctly', async () => {
        await HomePage.clickDealMenu();
        await DealsPage.clickTargetCircleDeals();
        expect(await DealsPage.isTargetCircleDealsPageDisplayed()).toBe(true);
    });

    it('TC-3: Verify clicking "Weekly Ad" redirects correctly', async () => {
        await HomePage.clickDealMenu();
        await DealsPage.clickWeeklyAd();
        expect(await DealsPage.isWeeklyAdPageDisplayed()).toBe(true);
    });

    it('TC-4: Verify clicking "Clearance" redirects correctly', async () => {
        await HomePage.clickDealMenu();
        await DealsPage.clickClearance();
        expect(await DealsPage.isClearancePageDisplayed()).toBe(true);
    });
});
