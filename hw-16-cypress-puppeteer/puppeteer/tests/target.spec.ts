import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { PetsPage } from '../src/pom/target.page';

describe('Puppeteer target tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let petsPage: PetsPage;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        petsPage = new PetsPage(page);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should find Pets goods', async () => {
        await page.goto('https://www.target.com/', { waitUntil: 'domcontentloaded' });
        await petsPage.fillSearchInput('pets');
        await petsPage.clickSearchButton();
        await petsPage.waitForSearchResults();

        const goodsText = await petsPage.getSearchResults();

        goodsText.forEach((text) => {
            expect(text).to.match(/pets|pet|dog|kindfull|cat/i);
        });
    });

    it('should redirect to home page when clicking the Target logo', async () => {
        await page.goto('https://www.target.com/c/bullseye-s-playground/-/N-tr36l', { waitUntil: 'domcontentloaded' });

        const homeLink = await page.$('a[aria-label="Target home"]');
        if (homeLink) {
            await homeLink.click();
            await page.waitForNavigation();
        }

        const url = page.url();
        expect(url).to.equal('https://www.target.com/');
    });
});
