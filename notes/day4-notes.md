# 🎭 Playwright — Day 4 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 4 Summary)

Aaj humne **`locator()`** seekha — CSS Selectors se elements dhundhna!

---

## 🎯 `locator()` Kya Hai?

> Jab `getByRole`, `getByText`, `getByPlaceholder` se element na mile — tab **CSS Selector ya XPath** se dhundhte hain `locator()` se!

**Ye last resort hai** — pehle baaki locators try karo!

---

## 📋 CSS Selectors — Aaj Seekhe

### 1️⃣ ID Se Dhundhna — `#`

```javascript
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
```

**`#` = ID selector**

> ID page mein **always unique** hoti hai — isliye sabse reliable selector hai!

---

### 2️⃣ Class Se Dhundhna — `.`

```javascript
await page.locator('.btn_action').click();
```

**`.` = Class selector**

> Class multiple elements par ho sakti hai — isliye ID se thodi kam reliable hai!

---

### 3️⃣ Tag + Attribute Se Dhundhna

```javascript
await page.locator('input[id="user-name"]').fill('standard_user');
await page.locator('input[id="password"]').fill('secret_sauce');
await page.locator('input[id="login-button"]').click();
```

**Matlab:**
> *"Wo element dhundho jiska **tag `input`** ho aur jiska **ID `user-name`** ho"*

---

### 4️⃣ Tag + Class Combined

```javascript
await page.locator('input.btn_action').click();
```

**Matlab:**
> *"Wo `input` tag dhundho jisme `btn_action` class ho — chahe aur classes bhi hon!"*

---

## ⚠️ Important — Exact Class Match vs Partial

```javascript
// ❌ Fail karega — agar multiple classes hon
await page.locator('input[class="btn_action"]').click();

// ✅ Sahi tarika — partial class match
await page.locator('input.btn_action').click();
```

**Kyun?**

Agar HTML mein ye ho:
```html
<input class="submit-button btn_action" id="login-button"/>
```

Toh `input[class="btn_action"]` fail karega kyunki **exact match** chahiye — `"submit-button btn_action"` != `"btn_action"`

But `input.btn_action` pass karega kyunki ye **partial match** karta hai!

---

## 🆚 `#user-name` vs `input[id="user-name"]` — Fark Kya Hai?

| Selector | Matlab | Kab Use Karo |
|----------|--------|-------------|
| `#user-name` | Shorthand — sirf ID batao | Fast likhna ho |
| `input[id="user-name"]` | Detailed — tag + ID batao | Zyada specific hona ho |

**Dono same element dhundhte hain** — but `input[id="user-name"]` zyada specific hai!

---

## 📊 CSS Selector Priority — Yaad Rakh!

```
1. ID (#)           → Sabse best — unique hota hai ⭐⭐⭐⭐⭐
2. Class (.)        → Theek hai — multiple elements pe ho sakta hai ⭐⭐⭐
3. Tag+Attribute    → Specific case mein useful ⭐⭐⭐
4. Tag only (input) → Weak — bahut saare tags ho sakte hain ⭐
```

---

## 🏆 Overall Locator Priority — Playwright Mein

```
1st → getByRole()         ← Sabse preferred
2nd → getByPlaceholder()  ← Input fields ke liye
3rd → getByText()         ← Visible text se
4th → getByLabel()        ← Form labels se
5th → locator()           ← Last resort — CSS/XPath
```

> 💡 **Interview Tip:** Ye priority order yaad kar lo — interview mein zaroor puchha jata hai!

---

## 📝 Aaj Ki Complete Scripts

### Script 1 — ID aur Class Se Login

```javascript
import { test, expect } from '@playwright/test';

test('locator practice - CSS', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // ID se dhundhna
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // Class se dhundhna
  await page.locator('.btn_action').click();

  // URL verify karo
  await expect(page).toHaveURL(/inventory/);
});
```

---

### Script 2 — Tag + Attribute Se Login

```javascript
test('locator practice using css', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Tag + Attribute se dhundhna
  await page.locator('input[id="user-name"]').fill('standard_user');
  await page.locator('input[id="password"]').fill('secret_sauce');
  await page.locator('input[id="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});
```

---

## 💡 Key Takeaways — Yaad Rakhna

| Cheez | Detail |
|-------|--------|
| `#` | ID selector — unique hoti hai |
| `.` | Class selector — multiple elements pe ho sakti hai |
| `input[id="x"]` | Tag + Attribute — zyada specific |
| `input.btn_action` | Tag + Class — partial match karta hai |
| ID sabse reliable hai | Kyunki page mein unique hoti hai |
| `locator()` last resort hai | Pehle getByRole, getByPlaceholder try karo |

---

## 🎯 Day 5 Mein Kya Hoga

- **XPath** — `locator('xpath=...')` se elements dhundhna
- **`getByLabel()`** — form labels se dhundhna
- **Chained locators** — ek locator ke andar doosra
- **Interview Question** — "CSS Selector aur XPath mein fark kya hai?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*