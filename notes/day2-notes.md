# 🎭 Playwright — Day 2 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 2 Summary)

Aaj humne:
- Playwright ka **default example file** samjha
- **Pehla bug fix** kiya (Firefox timeout issue)
- **Khud ki pehli script** likhi aur run ki
- Core Playwright concepts seekhe

---

## 📄 Default Example File — Samjha

`tests/example.spec.js` mein 2 test cases the:

```javascript
// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

---

## 🧠 Core Concepts — Ek Ek Karke

### 1️⃣ `import { test, expect } from '@playwright/test'`

Playwright se **2 cheezein import** karte hain:

| Import | Kaam |
|--------|------|
| `test` | Test case banana |
| `expect` | Assertion lagana — check karna ki sab sahi hua |

**Real life analogy:**
Jaise ek toolbox se **hammer aur screwdriver** nikale — test aur expect waise hi tools hain.

---

### 2️⃣ `test('name', async ({ page }) => { })`

Test case ka **structure/skeleton:**

```javascript
test('test ka naam', async ({ page }) => {
  // yahan test ke steps likhte hain
});
```

| Part | Matlab |
|------|--------|
| `'test ka naam'` | Test case ka naam — jo report mein dikhega |
| `async` | Ye function async hai — browser ke kaam time lete hain |
| `{ page }` | Browser ka ek tab — isi se sab kaam hoga |

---

### 3️⃣ `page` — Kya Hai?

> **`page` = Browser ka ek tab**

Jaise Chrome mein ek naya tab khola — wahi `page` hai.

Isi `page` se:
- Website open karte hain
- Elements dhundhte hain
- Click karte hain
- Text fill karte hain

---

### 4️⃣ `await` — Kyun Likhte Hain?

```javascript
await page.goto('https://www.google.com');
```

Browser ke kaam **time lete hain** — page load hona, click karna, element dhundhna.

`await` matlab:
> *"Ye kaam poora hone tak ruk — phir aage badh"*

**Bina `await` ke kya hoga:**
Script aage bhaag jayegi — page load hone se pehle hi next step run ho jayega — **test fail!**

---

### 5️⃣ `async` — Kya Hai?

```javascript
async ({ page }) => { ... }
```

`async` matlab: *"Is function mein kuch kaam time lega"*

> **Rule:** Jahan bhi `await` use karna ho — wahan function `async` hona chahiye.

Dono saath chalta hai — `async` + `await` ek team hai! 🤝

---

### 6️⃣ `expect` — Assertion

```javascript
await expect(page).toHaveTitle('Google');
```

**`expect` ka kaam:**
> *"Main expect karta hoon ki YE hona chahiye — agar nahi hua toh test FAIL kardo"*

**Real life analogy:**
Tune pizza order kiya — expect kiya ki **hot aayega:**
- Pizza hot aaya → **Test Pass** ✅
- Pizza thanda aaya → **Test Fail** ❌ (complain = assertion fail)

---

### 7️⃣ Common Assertions

| Assertion | Kaam |
|-----------|------|
| `toHaveTitle('Google')` | Page ka title check karo |
| `toHaveTitle(/Playwright/)` | Title mein "Playwright" contain ho (regex) |
| `toBeVisible()` | Element screen par dikhna chahiye |
| `toHaveURL('url')` | Page ka URL check karo |

---

### 8️⃣ `page.goto(url)` — Website Open Karna

```javascript
await page.goto('https://www.google.com');
```

Browser tab mein wo URL open karta hai.

---

### 9️⃣ `page.getByRole()` — Element Dhundhna

```javascript
await page.getByRole('link', { name: 'Get started' }).click();
```

| Part | Matlab |
|------|--------|
| `getByRole('link')` | Ek link element dhundho |
| `{ name: 'Get started' }` | Jiska naam "Get started" ho |
| `.click()` | Us par click karo |

---

### 🔟 Timeout — Milliseconds Mein

```javascript
await expect(page.getByRole('heading', { name: 'Installation' }))
  .toBeVisible({ timeout: 10000 });
```

| Value | Matlab |
|-------|--------|
| `1000` | 1 second |
| `5000` | 5 seconds |
| `10000` | 10 seconds |

> ⚠️ **Yaad rakhna:** Playwright mein **saari timings milliseconds mein** hoti hain!

---

## 🐛 Pehla Bug Fix — Firefox Timeout Issue

### Kya Hua:
```
5 passed ✅
1 failed ❌ — [firefox] › get started link
```

### Reason:
Firefox mein `Installation` heading load hone mein **zyada time laga** — Playwright default timeout se pehle hi fail ho gaya.

### Fix:
```javascript
// Pehle — bina timeout ke
await expect(page.getByRole('heading', { name: 'Installation' }))
  .toBeVisible();

// Fix ke baad — timeout add kiya
await expect(page.getByRole('heading', { name: 'Installation' }))
  .toBeVisible({ timeout: 10000 }); // 10 seconds wait karo
```

### Result After Fix:
```
6 passed ✅
0 failed ✅
```

> 💡 **Lesson:** Different browsers ki speed alag hoti hai — Firefox slow ho sakta hai. Timeout badha ke fix karte hain.

---

## ✍️ Khud Ki Pehli Script

`tests/day2.spec.js` file banayi aur ye likha:

```javascript
import { test, expect } from '@playwright/test';

test('my first test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');
});
```

### Kya Kiya Ye Script Ne:
1. Google.com open kiya browser mein
2. Check kiya ki page ka title **"Google"** hai

### Result:
```
Running 3 tests using 3 workers
3 passed ✅
```

---

## 🌐 1 Test = 3 Tests Kyun?

```
1 test case × 3 browsers = 3 tests run!

✅ Chromium  (Chrome) → passed
✅ Firefox             → passed
✅ WebKit   (Safari)  → passed
```

Playwright **automatically 3 browsers mein** test run karta hai — ye `playwright.config.js` mein set hota hai!

---

## 🔁 Day 2 — Full Summary

| Concept | Yaad Hai? |
|---------|-----------|
| `import { test, expect }` | Playwright se tools import karo |
| `test('naam', async ({ page }) => {})` | Test case ka structure |
| `page` = browser tab | ✅ |
| `await` = kaam hone tak ruko | ✅ |
| `async` = time lene wala function | ✅ |
| `expect` = assertion — check karo | ✅ |
| `timeout` milliseconds mein hota hai | ✅ |
| 1 test × 3 browsers = 3 results | ✅ |
| Firefox mein timeout issue fix kiya | ✅ |

---

## 🎯 Day 3 Mein Kya Hoga

- `page.locator()` — elements ko alag tarike se dhundhna
- `getByText()`, `getByPlaceholder()`, `getByLabel()` — different locators
- **Form fill karna** — input fields mein text likhna
- `page.fill()` aur `page.click()` — actions

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*