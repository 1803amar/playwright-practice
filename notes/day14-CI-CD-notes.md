# 🎭 Playwright — Day 14 Notes
### CI/CD & GitHub Actions
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 14 Summary)

Aaj humne **CI/CD aur GitHub Actions** setup kiya — code push hone par tests automatically run hone lage!

---

## 🎯 CI/CD Kya Hai?

> *"Har baar code push karo — tests automatically run ho jaayein — koi manually run na kare!"*

**Full form:**
- **CI** = Continuous Integration — code merge hone par tests run karo
- **CD** = Continuous Deployment — tests pass hone par automatically deploy karo

**Real life analogy:**
> Jaise airport par **security check** hota hai — koi bhi galat cheez andar nahi jaati!
> CI/CD waise hi **code ka security check** hai! ✈️

---

## 💡 CI/CD Ke Fayde

> 1. **Time bachata hai** — manually run nahi karna
> 2. **Automatic** — push hone par khud run hota hai
> 3. **Early bug detection** — galat code production mein nahi jaata
> 4. **Browsers bhi automatic install** — GitHub par khud setup hota hai
> 5. **Team ko turant pata chalta hai** — pass ✅ ya fail ❌

---

## 🔍 GitHub Actions Kya Hai?

> GitHub ka built-in CI/CD tool — **free** hai public repos ke liye!

**Kaise kaam karta hai:**
```
Tu code push karta hai
        ↓
GitHub Actions trigger hota hai
        ↓
Playwright tests automatically run hote hain
        ↓
Pass ✅ ya Fail ❌ — GitHub par dikhta hai
```

---

## 📁 File Structure

```
playwright-practice/
├── .github/              ← dot hona chahiye — hidden folder
│   └── workflows/
│       └── playwright.yml  ← CI/CD config file
├── tests/
├── pages/
└── playwright.config.js
```

> ⚠️ **Important:** `.github` — dot ke saath likhna! Bina dot ke kaam nahi karega!

---

## 📝 Complete `playwright.yml` File

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 🔍 Har Part Ka Kaam

### `name: Playwright Tests`
> Workflow ka naam — GitHub Actions tab mein dikhega!

---

### `on: push / pull_request`
```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
```
> **Trigger** — kab run karna hai:
> - `main` branch par push hone par
> - `main` branch par pull request aane par

---

### `runs-on: ubuntu-latest`
> GitHub ka Linux server use karo tests run karne ke liye!

---

### Steps — Ek Ek Kaam

| Step | Kaam |
|------|------|
| `actions/checkout@v3` | Tera code GitHub se download karo |
| `actions/setup-node@v3` | Node.js install karo |
| `npm ci` | Dependencies install karo |
| `npx playwright install --with-deps` | Browsers install karo |
| `npx playwright test` | Tests run karo |
| `actions/upload-artifact@v4` | Report save karo |

---

### `if: always()`
```yaml
- uses: actions/upload-artifact@v4
  if: always()
```
> *"Test pass ho ya fail — report hamesha upload karo!"*

---

## ⚠️ Errors Jo Aaye — Aur Fix!

### Error 1 — `github` folder — dot missing!
```
# ❌ Galat
github/workflows/playwright.yml

# ✅ Sahi
.github/workflows/playwright.yml
```

### Error 2 — Deprecated version
```yaml
# ❌ Outdated
- uses: actions/upload-artifact@v3

# ✅ Sahi
- uses: actions/upload-artifact@v4
```

### Error 3 — Node.js version
```yaml
# ❌ Playwright support nahi karta
node-version: 18

# ✅ Sahi
node-version: 20
```

### Error 4 — Case Sensitivity!
```javascript
// ❌ Windows mein kaam karta — Linux mein nahi!
import { LoginPage } from '../pages/loginPage';

// ✅ Exact filename match karo
import { LoginPage } from '../pages/LoginPage';
```

> 💡 **Important Lesson:**
> Windows case-insensitive hai — Linux case-sensitive hai!
> GitHub Actions Linux par run karta hai — isliye exact case match karo!

---

## 🏆 Final Result — ALL GREEN! ✅

```
✅ Set up job
✅ Run actions/checkout@v3
✅ Run actions/setup-node@v3
✅ Install dependencies
✅ Install Playwright browsers
✅ Run Playwright tests          ← Saare tests pass!
✅ Run actions/upload-artifact@v4
✅ Complete job

succeeded in 1m 14s 🚀
```

---

## 🏆 Interview Questions — Prepared!

**Q1: "CI/CD kya hai?"**
> *"CI/CD matlab Continuous Integration aur Continuous Deployment. Jab bhi code push hota hai — tests automatically run ho jaate hain. Agar tests pass hote hain toh code deploy hota hai. Ye time bachata hai, early bug detection karta hai aur team ko turant feedback milta hai!"*

**Q2: "GitHub Actions kya hai?"**
> *"GitHub ka built-in CI/CD tool hai — free hai public repos ke liye. `.github/workflows/` folder mein YAML file banate hain — jisme define karte hain ki kab aur kaise tests run hone chahiye!"*

**Q3: "CI/CD ka sabse bada faida kya hai?"**
> *"Early bug detection! Agar koi developer galat code push kare — CI/CD turant fail dikha deta hai — production mein nahi jaata. Jaise airport security check — koi galat cheez andar nahi jaati!"*

**Q4: "Windows aur Linux mein kya fark hai testing ke liye?"**
> *"Windows case-insensitive hai — `LoginPage` aur `loginPage` same maanta hai. Linux case-sensitive hai — exact match chahiye. GitHub Actions Linux par run karta hai — isliye import statements mein exact filename case likhna zaroori hai!"*

---

## 🎯 Abhi Tak Ka Safar — 14 Days!

| Phase | Topics | Status |
|-------|--------|--------|
| **Basics** | Setup, Scripts, Locators, Assertions | ✅ |
| **Intermediate** | Hooks, Config, POM | ✅ |
| **Advanced** | Fixtures, API Testing, CI/CD | ✅ |
| **Next** | Full Framework Build | 🔜 |

---

## 🎯 Day 15 Mein Kya Hoga

- **Full Framework Build** — sab kuch ek saath!
- POM + Fixtures + Config + CI/CD — complete structure
- **Resume ke saath connect karenge** — "Architected Playwright framework"
- Interview stories prepare karenge!

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*