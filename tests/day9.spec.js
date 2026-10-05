import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('Verify inventory page loaded', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.isLoaded();
});

test('Verify backpack visible', async({page})=>{
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.backpack).toBeVisible();
})