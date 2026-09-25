import{test, expect} from '@playwright/test';

test("Assertion Practice" , async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    // 1. title se check karo
    await expect(page).toHaveTitle("Swag Labs");
    // 2. login button visibe hai?
    await expect(page.locator("#login-button")).toBeVisible();
    // 3. login button enable hai?
    await expect(page.locator("#login-button")).toBeEnabled();
    // 4. username fill karo aur value check karo
    await page.locator("#user-name").fill("standard_user");
    await expect(page.locator("#user-name")).toHaveValue("standard_user");
    // 5. password fill karo aur value check karo 
    await page.locator("#password").fill("secret_sauce");
    await expect(page.locator("#password")).toHaveValue("secret_sauce");
    // 6. Login karo
    await page.locator("#login-button").click();
    // 7. URL Check karo
    await expect(page).toHaveURL(/inventory/);
    // 8. heading check karo
    await expect(page.locator(".title")).toHaveText("Products"); 


})