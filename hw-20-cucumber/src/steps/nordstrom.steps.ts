import { Given, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { getRandomTab } from '../utils/utils.ts';
import { expect } from 'playwright/test';

Given('the user is on the Nordstrom homepage', async function (this: RobotDreamsWorld) {
    // Empty container - nothing is added
});

When('the user navigates to the Nordstrom homepage', async function (this: RobotDreamsWorld) {
    await this.nordstromPage.goTo();
});

Then('the user is able to see its top pick content', async function (this: RobotDreamsWorld) {
    await this.nordstromPage.topPickGuidesHeader;
});

When('the user selects a random guide from Top Picks', async function (this: RobotDreamsWorld) {
    const guides = await this.homePage.getGuideNames();

    expect(guides.length).toBeGreaterThan(0);

    const guide = getRandomTab(guides);
    this.scenarioContext.set('selectedGuide', guide);
});

Then('the guide should open without an error', async function (this: RobotDreamsWorld) {
    const guide = this.scenarioContext.get('selectedGuide') as string;

    await expect(async () => {
        await this.homePage.clickGuide(guide);
    }).not.toThrow();
});

Given('the user sees a currently active guide', async function (this: RobotDreamsWorld) {
    const active = await this.homePage.getActiveGuide();
    this.scenarioContext.set('previousActive', active);
});

When('the user clicks on a different random guide', async function (this: RobotDreamsWorld) {
    const previous = this.scenarioContext.get('previousActive') as string;
    const all = await this.homePage.getGuideNames();
    const random = getRandomTab(all, previous);

    await this.homePage.clickGuide(random);
    this.scenarioContext.set('newActive', await this.homePage.getActiveGuide());
});

Then('the new guide should become active', async function (this: RobotDreamsWorld) {
    const newActive = this.scenarioContext.get('newActive') as string;
    expect(newActive).toBeTruthy();
});

Then('it should not be the same as the previous open', async function (this: RobotDreamsWorld) {
    const newActive = this.scenarioContext.get('newActive') as string;
    const previous = this.scenarioContext.get('previousActive') as string;
    expect(newActive).not.toBe(previous);
});

When('the user activates the guide', async function (this: RobotDreamsWorld) {
    const items = await this.homePage.getTopPicksItemsByGuide('Women\'s New Arrivals Under $100');
    this.scenarioContext.set('items', items);
});

Then('the products should be displayed with prices', async function (this: RobotDreamsWorld) {
    const items = this.scenarioContext.get('items') as { price: string }[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
        expect(item.price).not.toBeNull();
        expect(item.price).not.toBeUndefined();
    }
});
