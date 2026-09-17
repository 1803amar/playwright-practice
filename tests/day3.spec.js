import {test,expect} from '@playwright/test';

// test('locators practice', async({page})=>{

//     await page.goto('https://www.saucedemo.com/');

//     // getByPlaceholder -input field dhundhana
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');

//     // getByRole - buttton dhundhna
//     await page.getByRole('button' , {name: 'Login'}).click();

//     // URL check karo
//     await expect(page).toHaveURL(/inventory/);

//     // getByText - text se element dhundhna
//     await expect(page.getByText('Products')).toBeVisible();
// })

test('Locators practice -bonus',async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button' , {name: 'Login'}).click();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
})