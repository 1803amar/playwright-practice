# 🎭 Playwright — Day 1 Notes
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 1 Summary)

Aaj humne Playwright ka **poora environment setup** kiya — ek naye project mein scratch se.

---

## 🗂️ Step 1 — Project Folder Banaya aur Repo Clone Ki

```bash
cd playwright-practice
```

GitHub par repo banaya: `github.com/1803amar/playwright-practice`  
Aur locally clone karke us folder mein aaye.

**Kyun:** Saara practice kaam ek jagah organized rahega aur GitHub par dikhega — jo interview mein portfolio ka kaam karta hai.

---

## ⚡ Step 2 — Commands Jo Chalaye

### Command 1: `npm init -y`

```bash
npm init -y
```

**Kya karta hai:**  
Tere project ka **"ID card"** banata hai — `package.json` file create hoti hai.

Ismein hota hai:
- Project ka naam
- Version
- Dependencies (kaunsi libraries use ho rahi hain)
- Scripts

`-y` flag matlab: *"Sab default rakho, mujhse kuch mat pucho"*

**Real life analogy:** Jaise naye ghar mein shift hue toh pehle **address register** karna padta hai municipality mein — waise hi ye project ko register karta hai.

---

### Command 2: `npm install -D @playwright/test`

```bash
npm install -D @playwright/test
```

**Kya karta hai:**  
Playwright library ko tere project mein **download aur install** karta hai.

`-D` flag matlab: *"Ye sirf development ke liye chahiye"* (production build mein include mat karo)

**Real life analogy:** Naye ghar mein shift hue toh **furniture mangwaya** — ye Playwright ka poora samaan (library, test runner) tere project mein laata hai.

---

### Command 3: `npx playwright install`

```bash
npx playwright install
```

**Kya karta hai:**  
Teen browsers download karta hai:
- **Chromium** (Chrome ka base)
- **Firefox**
- **WebKit** (Safari ka base)

Playwright inhe apne controlled environment mein rakhta hai taaki testing consistent rahe.

**Real life analogy:** Testing ke liye **dedicated devices** mangwaye — Chromium, Firefox, Safari alag alag machines ki tarah.

> ⚠️ **Note:** Ye command alag se chalana zaroori nahi tha — `npm init playwright@latest` ye kaam khud kar leta hai. Lekin result same raha — koi nuksan nahi hua.

---

### Command 4: `npm init playwright@latest` ✅ (Main Setup Command)

```bash
npm init playwright@latest
```

**Kya karta hai:**  
Playwright ka **official setup wizard** — ye ek baar ka setup hai jo poora project configure karta hai.

Ye banata hai:
- `playwright.config.js` — master settings file
- `tests/` folder — test files yahan rahegi
- `.gitignore` — unnecessary files ko git se bahar rakhta hai
- `README.md` — project ka instruction manual

**Real life analogy:** Naya phone liya aur **initial setup wizard** chali — language, WiFi, account sab ek baar set karo.

---

## 📁 Step 3 — Project Structure Samjhi

Setup complete hone ke baad ye structure bana:

```
playwright-practice/
│
├── 📁 node_modules/        ← Godown
├── 📁 tests/               ← Tera kaam karne ki jagah
├── 📄 .gitignore           ← Git ko kya ignore karna hai
├── 📄 package-lock.json    ← Exact versions ka record
├── 📄 package.json         ← Project ka ID card
├── 📄 playwright.config.js ← Master control room
└── 📄 README.md            ← Project ka manual
```

---

## 🗂️ Har File/Folder Ka Kaam

### 📁 `node_modules/`
**Kya hai:** Playwright aur uski saari dependencies ka **"godown"**

- `npm install` karne par internet se jo packages download hue — sab yahan hain
- Kabhi is folder ko manually **touch mat karna**
- Ye automatically manage hota hai
- GitHub par push nahi hota (`.gitignore` mein listed hai)

---

### 📁 `tests/`
**Kya hai:** Tera **"kaam karne ki jagah"** — saari test files yahan

- Teri Playwright scripts yahan banegi
- Abhi ek default `example.spec.js` file hogi andar
- Aage jaake aur files yahan add karenge

> 📝 **Convention:** Test files ka naam hamesha `.spec.js` ya `.test.js` se khatam hota hai

---

### 📄 `.gitignore`
**Kya hai:** Git ko batata hai — **"ye files/folders mat track karna"**

By default ismein likha hota hai:
```
node_modules/
test-results/
playwright-report/
```

`node_modules/` bahut bada hota hai — usse GitHub par push nahi karte.

---

### 📄 `package-lock.json`
**Kya hai:** Tera **"exact bill"** — konsa package konse exact version mein install hua

- `package.json` kehta hai: *"Mujhe Playwright chahiye"*
- `package-lock.json` kehta hai: *"Exactly version 1.47.2 install hua tha"*

Team mein kaam karte waqt sabke paas same versions ho — isliye ye file hoti hai.

---

### 📄 `package.json`
**Kya hai:** Tere project ka **"ID card / resume"**

```json
{
  "name": "playwright-practice",
  "version": "1.0.0",
  "devDependencies": {
    "@playwright/test": "^1.47.0"
  }
}
```

---

### 📄 `playwright.config.js` ⭐ (Sabse Important)
**Kya hai:** Playwright ka **"master control room"**

Ismein define hota hai:
- Kaunse **browsers** mein test chalega
- Test files **kahan** hain
- **Timeout** kitna hoga
- **Screenshots/videos** kab capture ho
- **Base URL** kya hai

```js
// Example playwright.config.js
module.exports = {
  testDir: './tests',        // tests folder
  timeout: 30000,            // 30 seconds timeout
  use: {
    browserName: 'chromium', // Chrome use karo
    headless: false,         // Browser dikhao (true = hidden)
    screenshot: 'only-on-failure', // Fail hone par screenshot
  }
}
```

---

### 📄 `README.md`
**Kya hai:** Project ka **"instruction manual"**

- GitHub par jab koi tera repo dekhe — pehle ye file dikhti hai
- Ismein likhte hain: project kya hai, kaise setup karo, kaise run karo

---

## 🔁 Full Day 1 Summary — Ek Nazar Mein

| Step | Command | Kya Hua |
|------|---------|---------|
| 1 | `npm init -y` | Project ka ID card bana (package.json) |
| 2 | `npm install -D @playwright/test` | Playwright install hua |
| 3 | `npx playwright install` | Browsers download hue |
| 4 | `npm init playwright@latest` | Poora project configure hua |

---

## 💡 Key Concepts — Yaad Rakhna

| Concept | Matlab |
|---------|--------|
| `npm` | Node Package Manager — packages install karne ka tool |
| `npx` | Package ko install kiye bina directly run karna |
| `-D` flag | DevDependency — sirf development ke liye |
| `node_modules` | Kabhi manually edit mat karna |
| `.spec.js` | Test file ka naam hona chahiye aisa |
| `headless: false` | Browser screen par dikhega |
| `headless: true` | Browser background mein chalega (CI/CD mein) |

---

## 🎯 Day 2 Mein Kya Hoga

- `tests/` folder ke andar jayenge
- Pehli **Playwright script** likhenge
- Ek real website open karenge browser mein
- `page.goto()`, `page.title()`, aur pehla **assertion** seekhenge

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*