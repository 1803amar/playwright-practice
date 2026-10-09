import { test, expect } from '../fixtures/basePage';

test('Verify inventory page Loaded', async ({ loginPage, inventoryPage }) => {

    await expect(loginPage.page).toHaveURL(/inventory/);
    await inventoryPage.isLoaded();

});

test('Verify backpack visible', async ({ loginPage, inventoryPage }) => {
    await expect(inventoryPage.backpack).toBeVisible();
})