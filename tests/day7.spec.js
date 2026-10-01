import {test , expect} from "@playwright/test";

test.beforeEach(async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

});

test('Verify product page', async({page})=>{
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify product item visible', async({page})=>{
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('Verify page title', async({page})=>{
    await expect(page).toHaveTitle('Swag Labs');
});