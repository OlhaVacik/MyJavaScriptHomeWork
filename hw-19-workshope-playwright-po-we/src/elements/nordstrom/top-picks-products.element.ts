import { Locator } from '@playwright/test';
import { ItemDetailsPageModel } from 'src/models/item-details.pm';

export class TopPicksProductsElement {
    private get image(): Locator {
        return this.baseLocator.locator('img');
    }

    private get popularBadge(): Locator {
        return this.baseLocator.locator('text=Popular');
    }

    private get price(): Locator {
        return this.baseLocator.locator('span.He8hw', { hasText: 'Current Price' });
    }

    private get title(): Locator {
        return this.baseLocator.locator('div.Gk0sK>ul>li.fOGa1>div>div>a>div>div>div.KtWqU');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getItemDetails(): Promise<ItemDetailsPageModel> {
        const image = await this.getImage();
        const popularBadge = await this.getPopularBadge();
        const price = await this.getPrice();
        const title = await this.getTitle();

        return {
            image,
            popularBadge,
            price,
            title
        };
    }

    private async getImage(): Promise<string> {
        if (!(await this.image.isVisible())) {
            return '';
        }
        return (await this.image.getAttribute('src')) ?? '';
    }

    private async getPopularBadge(): Promise<string> {
        if (await this.popularBadge.isVisible()) {
            const badge = await this.popularBadge.textContent();
            return badge?.trim() ?? '';
        }
        return '';
    }

    private async getPrice(): Promise<string> {
        if (await this.price.isVisible()) {
            const price = await this.price.textContent();
            return price?.trim() ?? '';
        }
        return '';
    }

    private async getTitle(): Promise<string> {
        if (!(await this.title.isVisible())) {
            return '';
        }

        const status = await this.title.textContent();
        return status?.trim() ?? '';
    }
}
