import {test , expect} from '../fixtures/basePage-1';

test('inventory page loaded verify -fixture practice' , async({loginpage , invetorypage})=>{
await expect(loginpage.page).toHaveURL(/inventory/);
await invetorypage.isLoaded();
})

test('verify backpack visible -fixture practice' , async({loginpage , invetorypage})=>{
    await expect(invetorypage.backpack).toBeVisible();
})