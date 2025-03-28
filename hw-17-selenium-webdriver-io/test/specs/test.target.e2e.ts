
import { browser, expect } from '@wdio/globals';
import {HomePage} from 'src/pages/home.page';
import {DealsPage} from 'src/pages/deals.page';


describe('Target Website Tests', () => {
    const homePage = new HomePage;
    const dealsPage = new DealsPage;

    beforeEach(async () => {
        await browser.maximizeWindow();
        await homePage.open();
    });

    it('TC-1: Verify clicking "Top Deals" redirects to the correct page', async () => {
        await homePage.clickDealMenu();
        await dealsPage.clickTopDeals();

        expect(await dealsPage.isTopDealsPageDisplayed()).toBeDisplayed(true);
    });

    it('TC-2: Verify clicking "Target Circle Deals" redirects correctly', async () => {
        await homePage.clickDealMenu();
        await dealsPage.clickTargetCircleDeals();

        expect(await dealsPage.isTargetCircleDealsPageDisplayed()).toBeDisplayed(true);
    });

    it('TC-3: Verify clicking "Weekly Ad" redirects correctly', async () => {
        await homePage.clickDealMenu();
        await dealsPage.clickWeeklyAd();

        expect(await dealsPage.isWeeklyAdPageDisplayed()).toBeDisplayed();
    });

    it('TC-4: Verify clicking "Clearance" redirects correctly', async () => {
        await homePage.clickDealMenu();
        await dealsPage.clickClearance();

        expect(await dealsPage.isClearancePageDisplayed()).toBeDisplayed();
    });
});
