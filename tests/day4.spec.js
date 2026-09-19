import { test, expect} from '@playwright/test';

// test('Locator practice -CSS', async({page})=>{

//     await page.goto("https://www.saucedemo.com/");
    
//     //ID se dundhna
//     await page.locator('#user-name').fill('standard_user');
//     //ID se dhundhna
//     await page.locator('#password').fill('secret_sauce');
//     //class se dhundhna
//     await page.locator('.btn_action').click();

//     // URL verify karo
//     await expect(page).toHaveURL(/inventory/);

// });

test ('locator practice using css', async({page})=>{
    
    await page.goto('https://www.saucedemo.com/');

    await page.locator('input[id="user-name"]').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");

    // await page.locator('input[id="login-button"]').click();
    await page.locator('input[class="submit-button btn_action"]').click();


    await expect(page).toHaveURL(/inventory/);
})