import { Page } from '@playwright/test';
import { NordstromHeaderElement } from 'src/elements/nordstrom/header.element';

export class NordstromBasePage {
    private readonly header: NordstromHeaderElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.header = new NordstromHeaderElement(this.page.locator('#global-header-desktop'));
    }

    // ToDo: Header interaction should be here

}
