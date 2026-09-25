# 🎭 Playwright — Day 6 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 6 Summary)

Aaj humne **Assertions Deep Dive** kiya — aur pehla Interview Question bhi prepare kiya!

---

## 🎯 Assertion Kya Hota Hai?

> *"Ye check karna ki jo expect kiya tha — wo actually hua ya nahi!"*

Agar assertion fail ho → **Test Fail** ❌
Agar assertion pass ho → **Test Pass** ✅

---

## ⚡ Actions vs Assertions — Interview Question!

> **"Actions aur Assertions mein kya fark hai Playwright mein?"**

| | Actions | Assertions |
|--|---------|------------|
| **Kya karta hai** | Browser par kuch karta hai | Result verify karta hai |
| **Examples** | `click()`, `fill()`, `goto()` | `toBeVisible()`, `toHaveText()` |
| **Fail hone par** | Error aata hai | Test fail ho jaata hai |

> 💡 **Interview Ready Answer:**
> *"Actions wo steps hain jo browser par kuch karte hain — jaise `click()`, `fill()`, `goto()`. Assertions wo steps hain jo verify karte hain ki expected result mila ya nahi — jaise `toBeVisible()`, `toHaveText()`. Agar assertion fail ho toh test fail ho jaata hai."*

---

## 📋 Important Assertions — Aaj Seekhe

### 1️⃣ `toHaveTitle()` — Page Title Check

```javascript
await expect(page).toHaveTitle('Swag Labs');
```

> Page ka title "Swag Labs" hona chahiye — nahi hua toh fail!

---

### 2️⃣ `toBeVisible()` — Element Dikhna Chahiye

```javascript
await expect(page.locator('#login-button')).toBeVisible();
```

> Element screen par dikhna chahiye — hidden hai toh fail!

---

### 3️⃣ `toBeEnabled()` — Element Enabled Hona Chahiye

```javascript
await expect(page.locator('#login-button')).toBeEnabled();
```

> Element enabled hona chahiye — disabled hai toh fail!

---

### 4️⃣ `toHaveValue()` — Input Field Ki Value Check

```javascript
await expect(page.locator('#user-name')).toHaveValue('standard_user');
await expect(page.locator('#password')).toHaveValue('secret_sauce');
```

> Input field mein jo value fill ki — wahi value honi chahiye!

---

### 5️⃣ `toHaveURL()` — URL Check

```javascript
await expect(page).toHaveURL(/inventory/);
```

> URL mein "inventory" contain hona chahiye!

---

### 6️⃣ `toHaveText()` — Element Ka Text Check

```javascript
await expect(page.locator('.title')).toHaveText('Products');
```

> `.title` class wale element ka text "Products" hona chahiye!

---

## 💡 `toBeVisible()` vs `toBeEnabled()` — Important Difference!

| | `toBeVisible()` | `toBeEnabled()` |
|--|----------------|----------------|
| **Matlab** | Element dikhta hai | Element par action le sakte hain |
| **Disabled element** | Pass ✅ — dikhta hai | Fail ❌ — action nahi le sakte |

> **Real life analogy:**
> - **Visible** = Shop ka shutter dikhta hai — but band hai 👀
> - **Enabled** = Shop khuli hai — andar ja sakte ho, kuch kar sakte ho ✅

> 💡 **Practical Example:**
> OTP button — page par dikhta hai (`toBeVisible` = pass) but jab tak OTP enter na karo — disabled rehta hai (`toBeEnabled` = fail)

---

## 📝 Aaj Ki Complete Script

```javascript
import { test, expect } from '@playwright/test';

test('Assertion Practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // 1. Title check karo
  await expect(page).toHaveTitle('Swag Labs');

  // 2. Login button visible hai?
  await expect(page.locator('#login-button')).toBeVisible();

  // 3. Login button enabled hai?
  await expect(page.locator('#login-button')).toBeEnabled();

  // 4. Username fill karo aur value check karo
  await page.locator('#user-name').fill('standard_user');
  await expect(page.locator('#user-name')).toHaveValue('standard_user');

  // 5. Password fill karo aur value check karo
  await page.locator('#password').fill('secret_sauce');
  await expect(page.locator('#password')).toHaveValue('secret_sauce');

  // 6. Login karo
  await page.locator('#login-button').click();

  // 7. URL check karo
  await expect(page).toHaveURL(/inventory/);

  // 8. Heading text check karo
  await expect(page.locator('.title')).toHaveText('Products');
});
```

---

## 📊 Assertions — Quick Reference Table

| Assertion | Syntax | Kab Use Karo |
|-----------|--------|-------------|
| `toHaveTitle()` | `expect(page).toHaveTitle('text')` | Page title verify karo |
| `toBeVisible()` | `expect(locator).toBeVisible()` | Element dikhna chahiye |
| `toBeEnabled()` | `expect(locator).toBeEnabled()` | Element enabled hona chahiye |
| `toBeDisabled()` | `expect(locator).toBeDisabled()` | Element disabled hona chahiye |
| `toHaveValue()` | `expect(locator).toHaveValue('text')` | Input field ki value check karo |
| `toHaveText()` | `expect(locator).toHaveText('text')` | Element ka text check karo |
| `toHaveURL()` | `expect(page).toHaveURL(/regex/)` | URL check karo |

---

## 🏆 Interview Question — Prepared!

**Q: "Actions aur Assertions mein kya fark hai?"**

> *"Actions wo steps hain jo browser par kuch karte hain — jaise `click()`, `fill()`, `goto()`. Assertions wo steps hain jo verify karte hain ki expected result mila ya nahi — jaise `toBeVisible()`, `toHaveText()`. Agar assertion fail ho toh test fail ho jaata hai."*

---

## 🎯 Day 7 Mein Kya Hoga

- **Hooks** — `test.beforeEach()`, `test.afterEach()`
- **Multiple test cases** ek file mein manage karna
- **DRY principle** — Don't Repeat Yourself
- **Interview Question** — "Hooks kya hote hain aur kyun use karte hain?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*