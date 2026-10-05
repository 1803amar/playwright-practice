import { expect } from '@playwright/test';

export class InventoryPage{
    constructor (page) {
        this.page = page;
        this.title = page.locator('.title');
        this.backpack = page.getByText('Sauce Labs Backpack');
    }

    async isLoaded () {
        await expect(this.title).toHaveText('Products');
    }
}