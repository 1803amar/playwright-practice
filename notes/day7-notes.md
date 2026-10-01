# 🎭 Playwright — Day 7 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 7 Summary)

Aaj humne **Hooks** seekhe — test se pehle aur baad mein automatically code run karna!

---

## 🎯 Hooks Kya Hote Hain?

> Hooks wo code hota hai jo **har test se pehle ya baad mein automatically** run hota hai!

**Real life analogy:**
Jaise office mein:
- **Pehle aao** — ID card swipe karo, laptop on karo = `beforeEach`
- **Jaate waqt** — laptop off karo, ID card swipe karo = `afterEach`

Har din same kaam — baar baar likhne ki zaroorat nahi! 😄

---

## 📋 4 Main Hooks

| Hook | Kab Chalta Hai |
|------|---------------|
| `test.beforeEach()` | Har test se **pehle** — har baar |
| `test.afterEach()` | Har test ke **baad** — har baar |
| `test.beforeAll()` | Saare tests se **sirf ek baar pehle** |
| `test.afterAll()` | Saare tests ke **sirf ek baar baad** |

---

## 💡 `beforeEach` vs `beforeAll` — Important Difference!

```
beforeEach:                    beforeAll:
───────────                    ──────────
Test 1 shuru → Login ✅        Login ✅ (sirf ek baar)
Test 2 shuru → Login ✅        Test 1 chala
Test 3 shuru → Login ✅        Test 2 chala
                               Test 3 chala
```

| Hook | Kab Use Karo |
|------|-------------|
| `beforeEach` | Jab har test ke liye fresh state chahiye — jaise login |
| `beforeAll` | Jab ek baar setup kaafi ho — jaise DB connection |

> 💡 **Interview Answer:**
> *"Login ke liye `beforeEach` prefer karta hoon — kyunki har test independent hona chahiye. `beforeAll` tab use karta hoon jab expensive setup ek baar hi karna ho!"*

---

## 🧹 DRY Principle — Don't Repeat Yourself

> *"Jo code baar baar likhna pade — usse ek jagah likho!"*

**Bina `beforeEach`:**
```javascript
test('test 1', async ({ page }) => {
  // login code ✍️
  // test steps
});

test('test 2', async ({ page }) => {
  // login code ✍️ — repeat!
  // test steps
});

test('test 3', async ({ page }) => {
  // login code ✍️ — repeat!
  // test steps
});
```

**`beforeEach` ke saath:**
```javascript
test.beforeEach(async ({ page }) => {
  // login code ✍️ — sirf ek baar!
});

test('test 1', async ({ page }) => { /* sirf assertions */ });
test('test 2', async ({ page }) => { /* sirf assertions */ });
test('test 3', async ({ page }) => { /* sirf assertions */ });
```

**3 baar likhne ki jagah — 1 baar likha!** 💪

---

## 📝 Aaj Ki Complete Script

```javascript
import { test, expect } from '@playwright/test';

// Har test se pehle — login karo
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
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

## 🔢 3 Tests × 3 Browsers = 9!

```
3 test cases × 3 browsers (Chromium, Firefox, WebKit) = 9 tests run!
```

Playwright automatically saare browsers mein run karta hai — `playwright.config.js` mein set hota hai!

---

## 📊 Hooks — Quick Reference

```javascript
// Har test se PEHLE chalta hai
test.beforeEach(async ({ page }) => {
  // setup code — jaise login
});

// Har test ke BAAD chalta hai
test.afterEach(async ({ page }) => {
  // cleanup code — jaise logout
});

// Saare tests se SIRF EK BAAR pehle
test.beforeAll(async ({ browser }) => {
  // expensive setup — jaise DB connection
});

// Saare tests ke SIRF EK BAAR baad
test.afterAll(async () => {
  // cleanup — jaise DB close
});
```

---

## 🏆 Interview Questions — Prepared!

**Q1: "Hooks kya hote hain aur kyun use karte hain?"**
> *"Hooks wo code hai jo automatically test se pehle ya baad mein run hota hai. `beforeEach` mein common setup code likhte hain jaise login — taaki har test mein repeat na karna pade. Ye DRY principle follow karta hai — Don't Repeat Yourself!"*

**Q2: "`beforeEach` aur `beforeAll` mein kya fark hai?"**
> *"Login ke liye `beforeEach` prefer karta hoon — kyunki har test independent hona chahiye aur fresh state mile. `beforeAll` tab use karta hoon jab expensive setup ek baar hi karna ho jaise database connection!"*

---

## 🎯 Day 8 Mein Kya Hoga

- **`playwright.config.js`** — deep dive
- Timeout, base URL, screenshots configure karna
- **Sirf ek browser** mein test run karna
- **Interview Question** — "Playwright config mein kya kya set kar sakte hain?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*