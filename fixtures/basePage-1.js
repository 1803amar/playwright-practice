import {test as base } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';

export const test = base.extend({
    loginpage : async ({page} , use )=> {
        const loginPAGE = new LoginPage(page);
        await loginPAGE.navigate();
        await loginPAGE.login('standard_user', 'secret_sauce');
        await use(loginPAGE);

    },
    invetorypage : async({page}, use)  =>{
        const inventoryPAGE = new InventoryPage(page);
        await use(inventoryPAGE);
    }
})

export {expect} from '@playwright/test';