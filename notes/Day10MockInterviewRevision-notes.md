# 🎭 Playwright — Day 10 Notes
### Mock Interview + Roadmap Review
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 10 Summary)

Aaj **Full Mock Interview** hua — Day 1 se Day 9 tak ke saare concepts ka revision!

---

## 🎤 Mock Interview — Questions & Ideal Answers

### Q1: Playwright kya hai?

**Tera Score: 9/10** ⭐

> **Ideal Answer:**
> *"Playwright ek Microsoft ka open-source automation testing tool hai jo JavaScript, TypeScript, Java, Python aur C# support karta hai. Isse hum web applications ke end-to-end tests likhte hain. Ye Chromium, Firefox aur WebKit — teeno browsers mein simultaneously test run kar sakta hai. Iska ek bada faida ye hai ki isme built-in HTML reporter hota hai — kisi extra tool ki zaroorat nahi!"*

---

### Q2: `async` aur `await` kya hote hain?

**Tera Score: 8/10** ⭐

> **Ideal Answer:**
> *"`async` matlab ye function mein time lagne wale kaam hain — jaise browser open karna, page load karna. `await` matlab us step ke complete hone ka wait karo — phir aage badho. Dono saath isliye use karte hain kyunki browser ke saare operations time lete hain. Bina `await` ke script aage bhaag jaati hai aur test fail ho jaata hai!"*

> 💡 **Improvement:** `async/await` ka explanation thoda aur confident karo!

---

### Q3: Locators kitne types ke hote hain — Priority order?

**Tera Score: 9/10** ⭐

> **Ideal Answer:**
> ```
> 1st → getByRole()         — button, link, heading
> 2nd → getByPlaceholder()  — input fields
> 3rd → getByText()         — visible text se
> 4th → getByLabel()        — form labels se
> 5th → locator()           — CSS selector
> 6th → locator('xpath=')   — XPath — last resort
> ```
> **Trick: R P T L L X**

---

### Q4: CSS Selector vs XPath — kya fark hai?

**Tera Score: 8/10** ⭐

> **Ideal Answer:**
> *"CSS Selector fast aur simple hai — ID (`#`), class (`.`), attribute se element dhundhta hai. XPath powerful hai — HTML structure navigate karta hai aur `text()` se bhi element dhundh sakta hai jo CSS nahi kar sakta. Priority mein CSS pehle use karta hoon — agar na mile toh XPath!"*

| | CSS Selector | XPath |
|--|-------------|-------|
| Speed | Fast ⚡ | Slow |
| Simplicity | Simple | Complex |
| Text se dhundhna | ❌ | ✅ |
| Parent navigate | ❌ | ✅ |

---

### Q5: `beforeEach` vs `beforeAll`?

**Tera Score: 9.5/10** ⭐

> **Ideal Answer:**
> *"`beforeEach` har test se pehle run hota hai — jaise login. Ye har test ko independent banata hai. `beforeAll` sirf ek baar saare tests se pehle run hota hai — jaise database connection ya expensive setup. Login ke liye `beforeEach` prefer karta hoon kyunki har test fresh state mein hona chahiye!"*

---

### Q6: `toBeVisible()` vs `toBeEnabled()`?

**Tera Score: 10/10** ⭐

> **Ideal Answer:**
> *"`toBeVisible()` check karta hai ki element screen par dikhta hai — but disabled bhi ho sakta hai. `toBeEnabled()` check karta hai ki element par action le sakte hain. Example: OTP button page par dikhta hai (`toBeVisible` = pass) but jab tak OTP enter na karo — disabled rehta hai (`toBeEnabled` = fail)!"*

---

### Q7: POM kya hai?

**Tera Score: 10/10** ⭐

> **Ideal Answer:**
> *"POM — Page Object Model — ek design pattern hai jisme har page ke locators aur actions ek alag class mein likhte hain. Test files mein sirf test logic hota hai. Faida: agar koi locator change ho toh sirf ek jagah update karo — saare tests automatically theek ho jaate hain. Code maintainable, readable aur reusable banta hai!"*

---

### Q8: `playwright.config.js` mein kya hota hai?

**Tera Score: 9/10** ⭐

> **Ideal Answer:**
> *"Config mein `testDir` se test folder, `baseURL` se common URL ek jagah, `retries` se CI mein automatic retry, `reporter: 'html'` se HTML report, aur `projects` se browsers configure karte hain. BaseURL ka faida — URL ek jagah change karo toh saare tests update ho jaate hain!"*

---

## 🏆 Overall Mock Interview Score

| Question | Score |
|----------|-------|
| Playwright kya hai | 9/10 |
| async/await | 8/10 |
| Locators + Priority | 9/10 |
| CSS vs XPath | 8/10 |
| beforeEach vs beforeAll | 9.5/10 |
| toBeVisible vs toBeEnabled | 10/10 |
| POM | 10/10 |
| playwright.config.js | 9/10 |
| **Overall** | **8.9/10** 🔥 |

---

## 💡 Improvement Areas

### 1. "Uh Uh" Kam Karo — Confidence Badhao!
Interview mein zyada "uh uh" confidence kam dikhata hai.

**Tips:**
- Jawab dene se pehle 2 second sochlo
- Slowly bolो — rush mat karo
- Practice: Khud se mirror ke saamne questions poochho

### 2. `async/await` — Thoda Aur Polish Karo
Ye concept clear hai — bas delivery improve karo!

### 3. Answers Short Aur Crisp Rakho
Interview mein 1-2 minute ka answer kaafi hota hai — zyada lamba mat karo!

---

## 🗺️ ROADMAP — Pura Plan

### ✅ Phase 1 — Basics (COMPLETE!)

| Day | Topic | Status |
|-----|-------|--------|
| Day 1 | Setup & Project Structure | ✅ |
| Day 2 | First Script, async/await | ✅ |
| Day 3 | Locators — getByRole, getByText | ✅ |
| Day 4 | CSS Selectors | ✅ |
| Day 5 | XPath | ✅ |
| Day 6 | Assertions | ✅ |
| Day 7 | Hooks | ✅ |
| Day 8 | Config File | ✅ |
| Day 9 | POM — Page Object Model | ✅ |
| Day 10 | Mock Interview — Revision | ✅ |

---

### 🔜 Phase 2 — Intermediate (Aage Ka Plan)

| Day | Topic | Framework Ka Part? |
|-----|-------|-------------------|
| Day 11 | Fixtures | ✅ Haan |
| Day 12 | API Testing in Playwright | ✅ Haan |
| Day 13 | CI/CD — GitHub Actions | ✅ Haan |
| Day 14 | Full Framework Build | ✅ Core |
| Day 15 | Resume Based Interview Questions | 🎯 Interview Prep |

---

### 🎯 Phase 3 — Advanced (Baad Mein)

| Topic | Framework Ka Part? |
|-------|-------------------|
| Visual Testing | ✅ Haan |
| Parallel Execution Deep Dive | ✅ Haan |
| Mock Interview — Full | 🎯 Interview Prep |
| Salary Negotiation Prep | 💰 Career |

---

## ❓ Tere Sawaalon Ka Jawab

### Q: "Fixtures ke liye ready hoon ya POM aur karna hai?"

> **Haan bhai — Fixtures ke liye ready hai!** 💪
> POM solid samajh aa gaya — 10/10 answer diya tune!
> Fixtures POM ke upar build hota hai — aur tu ready hai!

---

### Q: "Framework banane ke liye abhi ready hoon ya Fixtures + API + CI/CD ke baad?"

> **Fixtures + API + CI/CD ke BAAD framework banao!** 🎯
>
> Kyunki:
> - **Fixtures** — Framework mein test setup handle karta hai
> - **API Testing** — Backend validation framework mein hota hai
> - **CI/CD** — Framework ko pipeline mein run karte hain
>
> Ye teeno framework ke **pillars** hain — inke bina framework incomplete hoga!

---

### Q: "Ye sab topics framework ka part hain kya?"

> **Haan bhai — 100%!** ✅

```
Framework = POM
           + Fixtures
           + API Testing
           + CI/CD
           + Config
           + Hooks
           + Reporting
```

> Ye sab milke ek **complete automation framework** banta hai — jo tera resume mein bhi hai!

---

## 🎯 Next Steps

**Day 11 — Fixtures:**
- `test.extend()` se custom fixtures banana
- Login fixture banana — `beforeEach` replace karna
- **Interview Q:** "Fixtures aur Hooks mein kya fark hai?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*