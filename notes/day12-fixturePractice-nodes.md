# 🎭 Playwright — Day 12 Notes
### Fixtures Deep Revision + Khud Se Likha!
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 12 Summary)

Aaj **Fixtures ka deep revision** kiya — saare doubts clear kiye aur khud se fixture file likhi!

---

## 🎯 Fixtures — Final Clarity

### `test as base` kyun?

```javascript
import { test as base } from '@playwright/test';
export const test = base.extend({ ... });
```

**Reason:**
> Playwright ke original `test` ko extend karna tha — usmein custom fixtures add karne the. Agar dono ka naam `test` hota toh **conflict** ho jaata — isliye original ko `base` naam diya!

```javascript
// ❌ Conflict — dono ka naam same
import { test } from '@playwright/test';
export const test = base.extend({ ... }); // ERROR!

// ✅ Sahi — alag naam
import { test as base } from '@playwright/test';
export const test = base.extend({ ... }); // Works!
```

**Real life analogy:**
- `base` = Plain chai ☕
- `test` = Chai + sugar + milk — customize ki! 😄

---

### `use()` ka kaam

```javascript
loginPage: async ({ page }, use) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await use(loginPage);  // ← test ko de do!
}
```

> **`use()` = Setup ho gaya — ab ye object test ko de do!**

**Bina `use()` ke:**
> Chef ne khana banaya — but table par serve nahi kiya! ❌

**`use()` ke saath:**
> Khana table par serve kiya — test use kar sakta hai! ✅

---

### Import — Kahan Se Karo?

```javascript
// ❌ Galat — fixtures nahi milenge
import { test, expect } from '@playwright/test';

// ✅ Sahi — saari fixtures milti hain
import { test, expect } from '../fixtures/basePage';
```

**Rule:**
> *"Jis file mein fixtures use karne hain — wahan `@playwright/test` ki jagah apna `basePage` import karo!"*

---

### Lowercase Convention — Important!

```javascript
// ❌ Galat — Capital letter
LoginPage: async ({ page }, use) => { ... }

// ✅ Sahi — lowercase
loginPage: async ({ page }, use) => { ... }
```

**Kyun?**
> Test mein jo naam maanga — `{ loginPage }` — wahi naam fixture mein hona chahiye — **exact match!**

```javascript
// Fixture mein:
loginPage: ...     // lowercase

// Test mein:
{ loginPage }      // same — lowercase — match! ✅
```

---

## 📝 Fixtures Flow — Step by Step

```
1️⃣ Test start hota hai
        ↓
2️⃣ Playwright dekha — "loginPage chahiye!"
        ↓
3️⃣ loginPage fixture automatically run hua:
   - LoginPage object bana
   - navigate() chala
   - login() chala
        ↓
4️⃣ use(loginPage) — "le test, ye raha loginPage!"
        ↓
5️⃣ Test ka kaam hua
        ↓
6️⃣ Test khatam ✅
```

---

## 🌟 Aaj Ka Achievement — Khud Se Likha!

### Khud Se Likhi File — `fixtures/basePage-1.js`

```javascript
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export const test = base.extend({
  loginpage: async ({ page }, use) => {
    const loginPAGE = new LoginPage(page);
    await loginPAGE.navigate();
    await loginPAGE.login('standard_user', 'secret_sauce');
    await use(loginPAGE);
  },
  invetorypage: async ({ page }, use) => {
    const inventoryPAGE = new InventoryPage(page);
    await use(inventoryPAGE);
  }
});

export { expect } from '@playwright/test';
```

### Khud Se Fix Ki Mistakes:
- ✅ Import — `@playwright/test` → `../fixtures/basePage-1`
- ✅ Fixture names — test mein match kiya
- ✅ `isVisible()` → `toBeVisible()`

### Result:
```
2 passed ✅
0 failed ✅
```

---

## 💡 Learning Levels — Tu Kahan Hai?

```
Level 1 → Copy paste karna          ❌ Kuch nahi seekha
Level 2 → Dekh ke samajh ke likhna  ✅ Tune yehi kiya! — Aaj
Level 3 → Bina dekhe likhna         🎯 Aage yahan pahunchna hai
```

> **Bhai Level 2 bilkul sahi hai — Level 3 framework banate waqt aayega!**

---

## 🏆 Fixtures — 3 Line Summary

> 1. **Banao** — `base.extend()` se `basePage.js` mein
> 2. **Import karo** — test file mein `basePage` se
> 3. **Use karo** — `{ loginPage }` as parameter — automatically run hoga!

---

## 🏆 Interview Questions — Prepared!

**Q1: "Fixtures kya hote hain?"**
> *"Fixtures ek reusable setup hai jo test ko jo chahiye wo provide karta hai. `base.extend()` se banate hain aur poore framework mein import karke use kar sakte hain!"*

**Q2: "`beforeEach` aur Fixtures mein kya fark hai?"**
> *"`beforeEach` sirf us file mein kaam karta hai. Fixtures poore framework mein reuse ho sakte hain — kahin bhi import karo!"*

**Q3: "`test as base` kyun likhte hain?"**
> *"Original `test` ko extend karna hota hai — conflict avoid karne ke liye `base` naam dete hain. Phir `base.extend()` se naya customized `test` banate hain!"*

**Q4: "`use()` ka kaam kya hai?"**
> *"`use()` setup complete hone ke baad test ko fixture object deta hai — jaise chef ka khana table par serve karna!"*

---

## 🎯 Day 13 Mein Kya Hoga

- **API Testing in Playwright**
- `request` object use karna
- GET, POST requests likhna
- **Interview Question** — "UI testing aur API testing mein kya fark hai?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*