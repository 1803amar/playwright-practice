# 🎭 Playwright — Day 3 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 3 Summary)

Aaj humne **Locators** seekhe — Playwright mein elements ko dhundhne ke alag alag tarike!

---

## 🎯 Locator Kya Hota Hai?

> Playwright ko batana ki **"Kaunsa element use karna hai"** — ye locator ka kaam hai!

**Real life analogy:**
Jaise bheed mein kisi ko dhundhna ho toh kehte ho:
- *"Wo banda jo **red shirt** pehne hai"* → `getByRole`
- *"Wo banda jiska naam **Amar** hai"* → `getByText`
- *"Wo banda jo **form fill** kar raha hai"* → `getByPlaceholder`

---

## 📋 Aaj Ke Locators

### 1️⃣ `getByRole()` — Role Se Dhundhna

```javascript
await page.getByRole('button', { name: 'Login' }).click();
```

**Kab use karo:**
- Buttons dhundhne ke liye
- Links dhundhne ke liye
- Headings dhundhne ke liye

**Common roles:**

| Role | Element |
|------|---------|
| `'button'` | Button |
| `'link'` | Anchor tag / Link |
| `'heading'` | H1, H2, H3 |
| `'textbox'` | Input field |

> 💡 **Interview Tip:** `getByRole` sabse preferred locator hai Playwright mein — kyunki ye accessibility standards follow karta hai!

---

### 2️⃣ `getByPlaceholder()` — Placeholder Se Dhundhna

```javascript
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
```

**Kab use karo:**
- Input fields ke liye — jahan placeholder text ho
- Login forms, search boxes, etc.

**Real life analogy:**
Input box mein jo **hint text** dikhta hai — jaise *"Enter your email"* — wahi placeholder hai. Usi se element dhundhte hain!

---

### 3️⃣ `getByText()` — Text Se Dhundhna

```javascript
await expect(page.getByText('Products')).toBeVisible();
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
```

**Kab use karo:**
- Kisi bhi visible text se element dhundhna ho
- Labels, headings, paragraphs, etc.

> ⚠️ **Important — Case Sensitive!**
> - `getByText('Products')` ✅ — milega
> - `getByText('products')` ❌ — nahi milega
> - `getByText('PRODUCTS')` ❌ — nahi milega
>
> **Spelling aur case bilkul same honi chahiye!**

---

## ⚡ Actions — Aaj Seekhe

### `fill()` — Input Field Mein Text Likhna

```javascript
await page.getByPlaceholder('Username').fill('standard_user');
```

> **`fill()` = Input box mein kuch likhna**

---

### `click()` — Element Par Click Karna

```javascript
await page.getByRole('button', { name: 'Login' }).click();
```

> **`click()` = Kisi bhi element par click karna**

---

## ✅ Assertions — Aaj Seekhe

### `toBeVisible()` — Element Dikhna Chahiye

```javascript
await expect(page.getByText('Products')).toBeVisible();
```

> Agar element page par visible nahi hai — **test fail!**
> Agar visible hai — **test pass!**

### `toHaveURL()` — URL Check Karna

```javascript
await expect(page).toHaveURL(/inventory/);
```

> URL mein "inventory" contain hona chahiye — regex use karo exact match ke liye nahi!

---

## 📝 Aaj Ki Complete Script

```javascript
import { test, expect } from '@playwright/test';

test('locators practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // getByPlaceholder — input field dhundhna
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // getByRole — button dhundhna
  await page.getByRole('button', { name: 'Login' }).click();

  // URL check karo
  await expect(page).toHaveURL(/inventory/);

  // getByText — text se element dhundhna
  await expect(page.getByText('Products')).toBeVisible();
});
```

---

## 🌟 Bonus Challenge — Khud Se Likha!

```javascript
test('Locators practice - bonus', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});
```

**Observation:** Login karne ke baad `Sauce Labs Backpack` product visible hota hai inventory page par! ✅

---

## 💡 Pro Tips — Yaad Rakhna

| Tip | Detail |
|-----|--------|
| `getByRole` preferred hai | Accessibility standards follow karta hai |
| `getByText` case sensitive hai | Spelling aur case same honi chahiye |
| Comment karo purana code | Delete mat karo — reference ke liye useful |
| `fill()` sirf input ke liye | Text type karne ke liye |
| `click()` kisi bhi element pe | Button, link, checkbox sab par |

---

## 📊 Locators — Quick Reference

| Locator | Syntax | Kab Use Karo |
|---------|--------|-------------|
| `getByRole()` | `page.getByRole('button', { name: 'Login' })` | Button, link, heading |
| `getByPlaceholder()` | `page.getByPlaceholder('Username')` | Input fields |
| `getByText()` | `page.getByText('Products')` | Visible text se |
| `getByLabel()` | `page.getByLabel('Email')` | Form labels se |
| `getByTestId()` | `page.getByTestId('login-btn')` | data-testid attribute se |
| `locator()` | `page.locator('.classname')` | CSS selector ya XPath |

---

## 🎯 Day 4 Mein Kya Hoga

- `locator()` — CSS selector aur XPath se elements dhundhna
- **Multiple elements** handle karna
- `getByLabel()` — form labels se dhundhna
- **Real form fill** karna end to end

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*