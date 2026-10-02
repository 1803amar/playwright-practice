import {test , expect } from '@playwright/test';

test.beforeEach(async({page})=>{

    // yha par '/' ye automatically hi 'https://www.saucedemo.com/' isko playwright.config.js se import kr lega kyuki isko playwright.config.js file me as a baseURL declare kr diya gya hai 
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

test('Verify product page' , async({page}) => {
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify product item visible', async({page})=>{
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('Verify page title' , async({page})=>{
    await expect(page).toHaveTitle('Swag Labs');
});