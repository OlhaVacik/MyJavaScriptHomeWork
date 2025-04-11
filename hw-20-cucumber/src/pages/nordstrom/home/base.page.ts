import { Page } from 'playwright';
import { NordstromHeaderElement } from '../../../elements/nordstrom/header.element.ts';

export class NordstromBasePage {
    private readonly header: NordstromHeaderElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.header = new NordstromHeaderElement(this.page.locator('#global-header-desktop'));
    }

    // ToDo: Header interaction should be here

}
