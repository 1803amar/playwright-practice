# 🎭 Playwright — Day 8 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 8 Summary)

Aaj humne **`playwright.config.js`** deep dive kiya — poore project ka master control room!

---

## 🎯 `playwright.config.js` Kya Hai?

> Playwright ka **"master control room"** — poore project ki settings ek jagah!

Ismein define hota hai:
- Test files kahan hain
- Kaunse browsers mein run karna hai
- Timeout kitna hoga
- BaseURL kya hai
- Reports kaise generate ho

---

## 📋 Config File — Ek Ek Part

### 1️⃣ `testDir`
```javascript
testDir: './tests',
```
> *"Meri test files `tests/` folder mein hain — wahan se dhundho!"*

---

### 2️⃣ `fullyParallel`
```javascript
fullyParallel: true,
```
> *"Saare tests ek saath run karo — ek ke baad ek nahi!"*

**Real life analogy:** 4 cashier counters ek saath open — line jaldi khatam! ⚡

---

### 3️⃣ `retries`
```javascript
retries: process.env.CI ? 2 : 0,
```

| Environment | Retries |
|-------------|---------|
| CI/CD mein | 2 baar retry |
| Local machine | 0 retry |

> *"CI mein fail hone par 2 baar aur try karo — local mein seedha fail karo!"*

---

### 4️⃣ `reporter`
```javascript
reporter: 'html',
```
> *"Test results HTML report mein dikhao!"*

`npx playwright show-report` se wahi report khulti hai! 😄

---

### 5️⃣ `baseURL` — Most Important! ⭐

```javascript
use: {
  baseURL: 'https://www.saucedemo.com',
  trace: 'on-first-retry',
},
```

**Faida:**

```javascript
// Pehle — bina baseURL ke
await page.goto('https://www.saucedemo.com/');

// Ab — baseURL set hai
await page.goto('/');  // bas itna!

// Kisi aur page par jaana ho
await page.goto('/inventory.html');
// = https://www.saucedemo.com/inventory.html
```

**Real life scenario:**
> Agar site ka URL change ho jaye:
> - **Bina baseURL:** Har test file mein URL change karo 😰
> - **BaseURL ke saath:** Sirf config mein ek jagah change karo ✅

> 💡 **DRY Principle** — Don't Repeat Yourself!

---

### 6️⃣ `projects` — Browsers Configure Karo

```javascript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
],
```

**Isliye 3 browsers mein run hota tha!**

---

## ⚡ Sirf Chromium — Speed Difference!

```
3 browsers:  9 passed (33.0s)  😴
1 browser:   3 passed (4.8s)   ⚡

= 8x FAST!
```

**Development ke time sirf Chromium rakho — CI/CD mein saare browsers!**

---

## 📝 Aaj Ki Complete Config

```javascript
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // firefox aur webkit comment out — development ke liye
  ],
});
```

---

## 📝 Aaj Ki Test Script — baseURL Use Karke

```javascript
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // '/' = baseURL + '/' = 'https://www.saucedemo.com/'
  // playwright.config.js se automatically baseURL lega
  await page.goto('/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
});

test('Verify product page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify product item visible', async ({ page }) => {
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('Verify page title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});
```

---

## 💡 Pro Tips — Yaad Rakhna

| Tip | Detail |
|-----|--------|
| `baseURL` use karo | URL ek jagah manage hoga |
| Development mein sirf Chromium | Fast feedback milega |
| CI/CD mein saare browsers | Cross-browser testing |
| Code mein comments likho | Self-explanatory code |
| `retries` CI mein set karo | Flaky tests handle ho jayenge |

---

## 🏆 Interview Question — Prepared!

**Q: "`playwright.config.js` mein kya kya configure kar sakte hain?"**

> *"Config mein `testDir` se test folder set karte hain, `baseURL` se common URL ek jagah rakhte hain taaki change easy ho, `retries` se CI mein automatic retry set karte hain, `reporter` se HTML report generate karte hain, aur `projects` se kaunse browsers mein run karna hai ye decide karte hain!"*

---

## 🎯 Day 9 Mein Kya Hoga

- **Page Object Model (POM)** — framework ka sabse important concept
- Code ko organize karna — pages aur tests alag alag
- **Interview Question** — "POM kya hai aur kyun use karte hain?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*