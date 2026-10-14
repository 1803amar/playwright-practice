# 🎭 Playwright — Day 13 Notes
### API Testing in Playwright
### Amar Mishra | Playwright Practice Journey

---

## 📌 Aaj Kya Kiya (Day 13 Summary)

Aaj humne **API Testing in Playwright** seekha — browser khole bina server se seedha baat karna!

---

## 🎯 API Testing Kya Hai?

> *"Browser khole bina — directly server se baat karo — request bhejo, response check karo!"*

**Real life analogy:**
- **UI Testing** = Restaurant mein jaake order karo 🍽️
- **API Testing** = Kitchen mein seedha jaake khana check karo! 👨‍🍳

---

## 🆚 UI Testing vs API Testing

| | UI Testing | API Testing |
|--|-----------|------------|
| **Browser** | Chahiye | Nahi chahiye |
| **Speed** | Slow | Fast ⚡ |
| **Kya check karo** | UI elements | Data/Response |
| **Playwright mein** | `page` object | `request` object |
| **Browsers** | 3 browsers | 1 worker |
| **Kab break hota** | UI change hone par | API change hone par |

---

## 💡 API Testing Ke 3 Main Fayde

> 1. **Fast** ⚡ — Browser nahi chahiye — 2-3x faster than UI
> 2. **Early testing** — UI banne se pehle bhi kar sakte hain
> 3. **Reliable** — UI change hone par bhi API tests break nahi hote

**Real life analogy:**
> UI test = Poori car chalake check karo 🚗
> API test = Seedha engine check karo 🔧

---

## 🌐 HTTP Methods — Yaad Karo!

```
GET    → Data lao (Read)     — Kuch change nahi hota
POST   → Data bhejo (Create) — Naya data banana
PUT    → Data update karo    — Existing data update
DELETE → Data hatao          — Data delete karna
```

---

## 📊 Status Codes — Important!

```
200 → OK           ✅ — GET success
201 → Created      ✅ — POST success — naya data bana
400 → Bad Request  ❌ — Galat data bheja
401 → Unauthorized ❌ — Login nahi hai
404 → Not Found    ❌ — URL galat hai
500 → Server Error ❌ — Server ki problem
```

> 💡 **Interview Tip:** 200 vs 201 ka fark yaad rakhna —
> - `200` = Request successful — data mila
> - `201` = Request successful — naya data **create** hua

---

## 📝 Practice Site — JSONPlaceholder

> **`https://jsonplaceholder.typicode.com`**
> Free fake REST API — practice ke liye perfect!

Available endpoints:
```
/posts      → Posts ka data
/posts/1    → Post ID 1 ka data
/users      → Users ka data
/comments   → Comments ka data
```

---

## 📝 Aaj Ki Complete Script

```javascript
import { test, expect } from '@playwright/test';

// GET Request — Data lao
test('GET request - fetch a post', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  // Status code check karo
  expect(response.status()).toBe(200);

  // Response body check karo
  const body = await response.json();
  console.log(body);
  expect(body.id).toBe(1);
});

// POST Request — Naya data banao
test('POST request - create a post', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Amar ka post',
        body: 'Ye mera pehla API test hai',
        userId: 1,
      },
    }
  );

  // Status code check karo — 201 Created
  expect(response.status()).toBe(201);

  // Response body check karo
  const body = await response.json();
  console.log(body);
  expect(body.title).toBe('Amar ka post');
});
```

---

## 🔍 Har Part Ka Kaam

### `request` object

```javascript
async ({ request }) => { ... }
```

> API Testing mein `page` ki jagah `request` use karte hain — browser nahi chahiye!

---

### `request.get(url)`

```javascript
const response = await request.get('url');
```

> Server ko GET request bhejo — response lo!

---

### `request.post(url, { data: {} })`

```javascript
const response = await request.post('url', {
  data: { title: 'test', body: 'content' }
});
```

> Server ko POST request bhejo — naya data ke saath!

---

### `response.status()`

```javascript
expect(response.status()).toBe(200);
```

> Response ka status code check karo!

---

### `response.json()`

```javascript
const body = await response.json();
```

> Response body ko JSON format mein lo — object ban jaata hai!

---

## ❓ API Test mein 1 Worker Kyun?

```
UI Test:  1 test × 3 browsers = 3 workers
API Test: 1 test × 1 worker   = 1 worker
```

> **API request browser se independent hai** — Chrome, Firefox, Safari sab same response denge! Isliye sirf ek baar run karna kaafi hai!

---

## 💡 GET vs POST — Code Difference

| | GET | POST |
|--|-----|------|
| **Method** | `request.get(url)` | `request.post(url, { data })` |
| **Data bhejte hain?** | ❌ Nahi | ✅ Haan — `data` object mein |
| **Status code** | `200` | `201` |
| **Kaam** | Data padhna | Naya data banana |

---

## 🏆 Interview Questions — Prepared!

**Q1: "UI Testing aur API Testing mein kya fark hai?"**
> *"UI Testing mein browser chahiye — elements check karte hain. API Testing mein browser nahi chahiye — directly server ko request bhejte hain aur response check karte hain. API Testing fast hoti hai, reliable hoti hai aur UI banne se pehle bhi kar sakte hain!"*

**Q2: "GET aur POST mein kya fark hai?"**
> *"GET sirf data read karta hai — kuch change nahi hota — status 200 milta hai. POST naya data create karta hai — server par data bhejte hain — status 201 milta hai!"*

**Q3: "Status codes 200 aur 201 mein kya fark hai?"**
> *"200 = Request successful, data mila. 201 = Request successful, naya data create hua!"*

---

## 🎯 Day 14 Mein Kya Hoga

- **CI/CD — GitHub Actions**
- Playwright tests automatically run karna on every push
- **Interview Question** — "CI/CD kya hai aur Playwright mein kaise use karte hain?"

---

*Notes by: Amar Mishra | Playwright Practice Journey 🚀*