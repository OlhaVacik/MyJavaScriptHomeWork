import  { expect, Page, test } from '@playwright/test';
import { NordstromHomePage } from 'src/pages/nordstrom/home/home.page';
import { NordstromPage } from 'src/pages/nordstrom/nordstrom.page';
import { getRandomTab } from 'src/utils/utils';

test.describe('Nordstrom sample test with POM and Web Elements', () => {
    let testPage: Page;

    test.beforeEach(async ({ page }) => {
        testPage = page;
        const nordstromPage = new NordstromPage(page);
        await nordstromPage.goTo();
    });

    test('Clicking on a random Top Pick Guides', async () => {
        const homePage = new NordstromHomePage(testPage);
        const guides = await homePage.getGuideNames();

        expect(guides.length).toBeGreaterThan(1);

        const randomGuideToClick = getRandomTab(guides);

        await expect(homePage.clickGuide(randomGuideToClick)).resolves.not.toThrow();
    });

    test('Randomly switches between Top Pick Guides', async () => {
        const homePage = new NordstromHomePage(testPage);
        const allGuides = await homePage.getGuideNames();
        const activeGuide = await homePage.getActiveGuide();

        const randomGuide = getRandomTab(allGuides, activeGuide);
        await homePage.clickGuide(randomGuide);

        const newActive = await homePage.getActiveGuide();

        await expect(newActive).toBe(randomGuide);
        await expect(newActive).not.toBe(activeGuide);
    });

    test('Products for the "Women\'s New Arrivals Under $100" guide should be loading', async () => {
        const homePage = new NordstromHomePage(testPage);

        const items = await homePage.getTopPicksItemsByGuide('Women\'s New Arrivals Under $100');

        expect(items.length).toBeGreaterThan(0);
        items.forEach((item) => {
            expect(item.price).not.toBeNull();
            expect(item.price).not.toBeUndefined();
        });
    });
});
