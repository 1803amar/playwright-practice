# 🎭 Playwright — Day 5 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 5 Summary)

Aaj humne **XPath** seekha — HTML structure mein navigate karke elements dhundhna!

---

## 🎯 XPath Kya Hai?

> XPath ek **path** hai jo HTML ke structure mein navigate karke element dhundhta hai — jaise file system mein folder path hota hai!

---

## 📋 XPath — 2 Types

| Type | Example | Nature |
|------|---------|--------|
| **Absolute XPath** | `/html/body/div/input` | Root se poora path — fragile! |
| **Relative XPath** | `//input[@id='user-name']` | Kahin se bhi dhundho — preferred! |

> ⚠️ **Always Relative XPath use karo!**
> Absolute XPath bahut fragile hota hai — HTML structure change hone par toot jaata hai!

---

## 🔑 XPath Symbols — Meaning

| Symbol | Matlab | Example |
|--------|--------|---------|
| `//` | Relative XPath — kahin se bhi dhundho | `//input` |
| `@` | Attribute selector | `@id`, `@class`, `@value` |
| `text()` | Tag ke andar ka text | `text()='Products'` |

---

## 📝 XPath Syntax — Alag Alag Tarike

### 1️⃣ Attribute Se Dhundhna — `@`

```javascript
// ID se
await page.locator("//input[@id='user-name']").fill('standard_user');

// Password field
await page.locator("//input[@id='password']").fill('secret_sauce');

// Value attribute se
await page.locator("//input[@value='Login']").click();
```

---

### 2️⃣ Text Se Dhundhna — `text()`

```javascript
await expect(page.locator("//span[text()='Products']")).toBeVisible();
```

> **`text()` sirf tab kaam karta hai jab element ke andar text ho!**

---

## ⚠️ Important — `text()` vs `@value`

| | `text()` | `@value` |
|--|---------|---------|
| **Kya hai** | Tag ke andar ka text | Element ka attribute |
| **Example HTML** | `<span>Products</span>` | `<input value="Login"/>` |
| **XPath** | `//span[text()='Products']` | `//input[@value='Login']` |
| **Kab use karo** | span, button, p, h1 tags | input tag ke liye |

---

## ❌ Common Mistake — `input` Tag mein `text()` Kaam Nahi Karta!

```javascript
// ❌ Ye fail hoga
await page.locator("//input[text()='Login']").click();

// ✅ Ye sahi hai
await page.locator("//input[@value='Login']").click();
```

**Kyun?**

```html
<!-- input tag ka content text nahi hota — value hoti hai -->
<input type="button" value="Login"/>  ← @value use karo

<!-- ye tags text() se dhundh sakte hain -->
<span>Products</span>    ← text() kaam karega ✅
<button>Click</button>   ← text() kaam karega ✅
```

---

## 🆚 CSS Selector vs XPath — Interview Question!

| Cheez | CSS Selector | XPath |
|-------|-------------|-------|
| Syntax | `#user-name` | `//input[@id='user-name']` |
| Speed | Fast ⚡ | Thoda slow |
| Readability | Simple | Complex |
| Text se dhundhna | ❌ Nahi kar sakta | ✅ Kar sakta hai |
| Parent navigate karna | ❌ Nahi | ✅ Haan |

> 💡 **Interview Answer:**
> *"CSS Selector fast aur simple hai — prefer karta hoon. XPath tab use karta hoon jab CSS se element na mile ya text se dhundhna ho!"*

---

## 📝 Aaj Ki Complete Script

```javascript
import { test, expect } from '@playwright/test';

test('xpath using text', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Attribute se dhundhna
  await page.locator("//input[@id='user-name']").fill('standard_user');
  await page.locator("//input[@id='password']").fill('secret_sauce');

  // Value attribute se button click
  await page.locator("//input[@value='Login']").click();

  // URL verify karo
  await expect(page).toHaveURL(/inventory/);

  // text() se verify karo
  await expect(page.locator("//span[text()='Products']")).toBeVisible();
});
```

---

## 📊 XPath — Quick Reference

```javascript
//input[@id='user-name']          // ID se
//input[@class='btn_action']      // Class se
//input[@placeholder='Username']  // Placeholder se
//input[@type='password']         // Type se
//input[@value='Login']           // Value se
//span[text()='Products']         // Text se
```

---

## 🏆 Overall Locator Priority — Yaad Rakh!

```
1st → getByRole()         ← Sabse preferred
2nd → getByPlaceholder()  ← Input fields ke liye
3rd → getByText()         ← Visible text se
4th → getByLabel()        ← Form labels se
5th → locator()           ← CSS Selector — last resort
6th → locator('xpath=')   ← XPath — jab kuch aur na chale
```

> 💡 **Trick:** R P T L L X — **R**ole **P**laceholder **T**ext **L**abel **L**ocator **X**path

---

## 🎯 Day 6 Mein Kya Hoga

- **Assertions** — deep dive
- `toHaveText()`, `toHaveValue()`, `toBeEnabled()`, `toBeDisabled()`
- **Multiple assertions** ek test mein
- **Interview Question Prep** — "CSS vs XPath fark kya hai?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*