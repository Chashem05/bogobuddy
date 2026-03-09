# 🛒 Bogo Buddy

Split BOGO grocery deals with a neighbor. Match by store and location, schedule store runs, and coordinate pickups — all in one app.

---

## Deploy to Sevalla (Step by Step)

### 1. Push this project to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bogo-buddy.git
git push -u origin main
```

### 2. Connect to Sevalla

1. Go to [app.sevalla.com](https://app.sevalla.com) and sign in
2. Click **Static Sites** → **Add site**
3. Click **Connect GitHub** and authorize Sevalla
4. Select your **bogo-buddy** repository → click **Continue**

### 3. Set Build Settings

| Setting | Value |
|---|---|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | `18` |

Click **Deploy**. That's it — live in ~60 seconds.

---

## Why the `_redirects` file matters

The `public/_redirects` file contains one line:

```
/* /index.html 200
```

This tells Sevalla's Cloudflare CDN to always serve `index.html` for any URL. Without it, refreshing on any route other than `/` returns a 404. **Do not delete it.**

---

## Run Locally

```bash
npm install
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview the production build
```

---

## Tech Stack
React 18 · React Router v6 · Vite 5 · Tailwind CSS 3 · Sevalla + Cloudflare Edge
