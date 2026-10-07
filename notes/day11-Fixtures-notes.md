# 🎭 Playwright — Day 11 Notes
### Fixtures — Reusable Test Setup
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 11 Summary)

Aaj humne **Fixtures** seekhe — poore framework mein reusable setup banana!

---

## 🎯 Fixtures Kya Hain?

> *"Fixtures ek reusable setup hai — jo test ko jo chahiye wo provide karta hai — poore framework mein kahin bhi!"*

**Real life analogy:**
- `beforeEach` = Har roz ghar mein khana banana 🏠
- Fixture = Tiffin service — ready meal deliver karo kahan bhi! 🚀

---

## 🆚 `beforeEach` vs Fixtures

| | `beforeEach` | Fixtures |
|--|-------------|---------|
| **Scope** | Sirf us ek file mein | Poore framework mein |
| **Reusability** | Limited — ek file tak | Multiple files mein import karo |
| **Flexibility** | Basic | Zyada powerful |
| **Use kaise karo** | File mein directly likho | Import karke use karo |

> 💡 **Interview Answer:**
> *"`beforeEach` sirf us ek file mein kaam karta hai jahan likha ho. Fixtures poore framework mein import karke use kar sakte hain — kahin bhi!"*

---

## 📁 Project Structure — Fixtures ke Baad

```
playwright-practice/
├── 📁 fixtures/
│   └── basePage.js      ← Custom fixtures yahan
├── 📁 pages/
│   ├── LoginPage.js
│   └── InventoryPage.js
├── 📁 tests/
│   └── day11.spec.js
└── playwright.config.js
```

---

## 📝 Fixture File — Complete Code

### `fixtures/basePage.js`

```javascript
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export const test = base.extend({
  // loginPage fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(loginPage);  // test ko loginPage do
  },

  // inventoryPage fixture
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);  // test ko inventoryPage do
  },
});

export { expect } from '@playwright/test';
```

---

## 🔍 Har Part Ka Kaam

### `import { test as base }`

```javascript
import { test as base } from '@playwright/test';
```

**Kyun `base` rakha?**

> Playwright ke original `test` ko **extend** karna tha — usmein apne fixtures add karne the!

```javascript
// Original test — sirf { page } milta hai
import { test } from '@playwright/test';

// Extended test — { page, loginPage, inventoryPage } milta hai
import { test as base } from '@playwright/test';
export const test = base.extend({ ... });
```

**Real life analogy:**
- `base` = Plain chai ☕
- `test` = Chai + sugar + milk — customize ki! 😄

> ⚠️ Agar seedha `test` naam rakhte toh **conflict** hota — original `test` aur hamara `test` same naam ke ho jaate!

---

### `base.extend({ })`

```javascript
export const test = base.extend({
  loginPage: async ({ page }, use) => { ... },
  inventoryPage: async ({ page }, use) => { ... },
});
```

> Original `test` mein apne **custom fixtures add** kar rahe hain!

---

### `async ({ page }, use)`

```javascript
loginPage: async ({ page }, use) => {
  // setup code
  await use(loginPage);  // test ko de do
}
```

| Part | Kaam |
|------|------|
| `{ page }` | Playwright ka built-in page object |
| `use` | Test ko fixture ki value do |
| `await use(loginPage)` | "Le bhai test — ye raha loginPage!" |

---

### `use()` — Sabse Important!

```javascript
await use(loginPage);
```

> `use()` matlab: *"Setup ho gaya — ab test ko ye object de do!"*

**`use()` ke pehle** = Setup (login karo, navigate karo)
**`use()` ke baad** = Cleanup (agar kuch cleanup karna ho)

---

## 📝 Test File — Fixtures Use Karke

```javascript
import { test, expect } from '../fixtures/basePage';
//       ↑ apna extended test import kiya — @playwright/test se nahi!

test('Verify inventory page loaded', async ({ loginPage, inventoryPage }) => {
  await expect(loginPage.page).toHaveURL(/inventory/);
  await inventoryPage.isLoaded();
});

test('Verify backpack visible', async ({ loginPage, inventoryPage }) => {
  await expect(inventoryPage.backpack).toBeVisible();
});
```

> ⚠️ **Important:** Test file mein `@playwright/test` se import nahi kiya — `../fixtures/basePage` se import kiya!

---

## ⚠️ Common Mistakes — Yaad Rakhna!

```javascript
// ❌ Capital letter — fail hoga!
LoginPage: async ({ page }, use) => { ... }

// ✅ Lowercase — sahi!
loginPage: async ({ page }, use) => { ... }

// ❌ inventoryPage fixture missing — error aayega!
export const test = base.extend({
  loginPage: async ({ page }, use) => { ... }
  // inventoryPage nahi likha!
});

// ✅ Dono fixtures hone chahiye!
export const test = base.extend({
  loginPage: async ({ page }, use) => { ... },
  inventoryPage: async ({ page }, use) => { ... },
});
```

---

## 💡 Fixtures Ka Flow — Step by Step

```
1. Test start hota hai
         ↓
2. Fixture automatically run hota hai
   (loginPage navigate + login karta hai)
         ↓
3. use(loginPage) — test ko loginPage milta hai
         ↓
4. Test apna kaam karta hai
         ↓
5. Test khatam — cleanup (agar koi ho)
```

---

## 🏆 Interview Questions — Prepared!

**Q1: "Fixtures kya hote hain?"**
> *"Fixtures ek reusable setup hai jo test ko jo chahiye wo provide karta hai. Ye poore framework mein import karke use kar sakte hain — `beforeEach` sirf ek file tak limited hota hai!"*

**Q2: "`beforeEach` aur Fixtures mein kya fark hai?"**
> *"`beforeEach` sirf us file mein kaam karta hai jahan likha ho. Fixtures `base.extend()` se banate hain aur poore framework mein import karke use kar sakte hain — kahin bhi reuse ho sakta hai!"*

**Q3: "`test as base` kyun likhte hain?"**
> *"Playwright ke original `test` ko extend karna hota hai — usmein apne custom fixtures add karne hote hain. `base` naam isliye rakha taaki original `test` se conflict na ho. Phir `base.extend()` se naya customized `test` banate hain!"*

---

## 🎯 Day 12 — Fixtures Deep Revision

Kal:
- Fixtures ke saare concepts dobara practice karenge
- Questions se concept aur clear karenge
- Koi bhi doubt clear ho jayega!

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*