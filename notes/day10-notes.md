# 🎭 Playwright — Day 9 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 9 Summary)

Aaj humne **Page Object Model (POM)** seekha — framework ka sabse important concept!

---

## 🎯 POM Kya Hai?

> *"Har page ke elements aur actions ek alag file mein likhte hain — test files mein sirf test logic hota hai!"*

**Real life analogy:**
- `LoginPage.js` = **Remote control** — buttons define karo
- `day9.spec.js` = **TV dekhne wala** — remote use karo

TV dekhne wale ko andar ki wiring nahi pata — bas button dabata hai! 😄

---

## 🆚 Bina POM vs POM ke Saath

**Bina POM — pehle:**
```
tests/
├── day7.spec.js  ← locators + login code + assertions sab ek jagah
├── day8.spec.js  ← locators + login code + assertions sab ek jagah
```

**POM ke saath:**
```
pages/
├── LoginPage.js      ← sirf login page ke elements aur actions
├── InventoryPage.js  ← sirf inventory page ke elements aur actions
tests/
├── day9.spec.js      ← sirf test logic
```

---

## 💡 POM Ka Sabse Bada Faida!

**Scenario:** Kal saucedemo ne `#user-name` ka ID change karke `#username` kar diya —

**Bina POM:**
```
har test file mein jaao aur change karo 😰
day7.spec.js → change
day8.spec.js → change
day9.spec.js → change
```

**POM ke saath:**
```
sirf LoginPage.js mein ek jagah change karo ✅
```

> 💡 **DRY Principle** — Don't Repeat Yourself!

---

## 📁 Project Structure — POM ke Baad

```
playwright-practice/
├── 📁 pages/
│   ├── LoginPage.js      ← Login page ka POM
│   └── InventoryPage.js  ← Inventory page ka POM
├── 📁 tests/
│   └── day9.spec.js      ← Test logic
├── playwright.config.js
└── package.json
```

---

## 📝 POM Files — Complete Code

### `pages/LoginPage.js`

```javascript
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');  // ← #user-name — # mat bhulna!
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);   // ← usernameInput
    await this.passwordInput.fill(password);   // ← passwordInput — galti mat karna!
    await this.loginButton.click();
  }
}
```

> ⚠️ **Common Mistakes — Yaad Rakhna:**
> - `page.locator('password')` ❌ — `#` missing!
> - `page.locator('#password')` ✅ — sahi!
> - `this.usernameInput.fill(password)` ❌ — wrong field!
> - `this.passwordInput.fill(password)` ✅ — sahi!

---

### `pages/InventoryPage.js`

```javascript
import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.backpack = page.getByText('Sauce Labs Backpack');
  }

  async isLoaded() {
    await expect(this.title).toHaveText('Products');
  }
}
```

---

### `tests/day9.spec.js`

```javascript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('Verify inventory page loaded', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.isLoaded();
});

test('Verify backpack visible', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.backpack).toBeVisible();
});
```

---

## 🔍 POM — Har Part Ka Kaam

| Part | Kaam |
|------|------|
| `constructor(page)` | Page object receive karo — elements define karo |
| `this.page = page` | Page ko class mein store karo |
| `this.usernameInput` | Element ko naam do — reuse kar sako |
| `async navigate()` | Page par jaane ka action |
| `async login()` | Login karne ka action |
| `export class` | Doosri files mein use karne ke liye export karo |
| `import { LoginPage }` | Test file mein import karo |
| `new LoginPage(page)` | LoginPage ka object banao |

---

## 💡 Key Concepts — Yaad Rakhna

| Concept | Matlab |
|---------|--------|
| `export class` | Class ko bahar use karne do |
| `import { }` | Doosri file se class lao |
| `new LoginPage(page)` | Class ka object banao |
| `constructor` | Object banate waqt automatically chalta hai |
| `this.` | Class ke andar variable store karo |

---

## 🏆 Interview Questions — Prepared!

**Q1: "POM kya hai aur kyun use karte hain?"**
> *"POM ek design pattern hai jisme har page ke locators aur actions ek alag class mein likhte hain. Test files mein sirf test logic hota hai. Faida ye hai ki agar koi locator change ho toh sirf ek jagah update karna padta hai — har test file mein nahi. Ye code maintainable aur reusable banata hai!"*

**Q2: "POM ka sabse bada faida kya hai?"**
> *"Maintainability! Agar UI change ho toh sirf Page Object file update karo — saare tests automatically theek ho jaate hain. Bina POM ke har test file mein change karna padta!"*

---

## 🎯 Day 10 Mein Kya Hoga

- **Full Revision** — Day 1 se Day 9 tak ke saare concepts
- **Mock Interview Questions** — sabhi topics se
- Ye check karna ki preparation solid hai ya nahi!

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*