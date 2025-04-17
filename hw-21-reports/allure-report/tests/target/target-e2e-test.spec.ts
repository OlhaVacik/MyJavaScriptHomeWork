import { expect, test } from '@playwright/test';
import { DealsPage } from 'src/pages/deals.page';
import { HomePage } from 'src/pages/home.page';

test.describe('Target Website Tests', () => {

    test('TC-1: Verify clicking "Top Deals" redirects to the correct page', async ({page, context}) => {
        const homePage = new HomePage(page, context);
        const dealsPage = new DealsPage(page, context);

        await homePage.goToDealMenu();
        await dealsPage.goToTopDeals();

        await expect(dealsPage.isTopDealsHeaderVisible()).toContainText('Top Deals');
    });

    test('TC-2: Verify clicking "Target Circle Deals" redirects correctly', async ({page, context}) => {
        const homePage = new HomePage(page, context);
        const dealsPage = new DealsPage(page, context);

        await homePage.goToDealMenu();
        await dealsPage.goToTargetCircleDeals();

        await expect(dealsPage.isTargetCircleDealsHeaderVisible()).toBeVisible();
    });

    test('TC-3: Verify clicking "Weekly Ad" redirects correctly', async ({page, context}) => {
        const homePage = new HomePage(page, context);
        const dealsPage = new DealsPage(page, context);

        await homePage.goToDealMenu();
        await dealsPage.goToWeeklyAd();

        await expect(dealsPage.isWeeklyAdHeaderVisible()).toContainText('Weekly Ad');
    });

    test('TC-4: Verify clicking "Clearance" redirects correctly', async ({page, context}) => {
        const homePage = new HomePage(page, context);
        const dealsPage = new DealsPage(page, context);

        await homePage.goToDealMenu();
        await dealsPage.goToClearance();

        await expect(dealsPage.isClearanceHeaderVisible()).toContainText('Clearance');
    });
});
