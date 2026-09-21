import {test , expect} from '@playwright/test';

// test('xpath practice' , async({page})=>{

//     await page.goto("https://www.saucedemo.com/");

//     // xpath se username fill karo
//     await page.locator("//input[@id='user-name']").fill("standard_user");
//     // xpath se password fill karo
//     await page.locator("//input[@id='password']").fill("secret_sauce");
//     // xpath se login button click karo
//     await page.locator("//input[@id='login-button']").click();

//     await expect(page).toHaveURL(/inventory/);
// })

test('xpath using text', async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    // click on login button using text 
    await page.locator("//input[@value='Login']").click();
    await expect(page).toHaveURL(/inventory/);
})