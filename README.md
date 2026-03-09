# 🛒 Bogo Buddy

## Deploy to Sevalla

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bogo-buddy.git
git push -u origin main
```

### 2. Add Static Site on Sevalla
1. Go to app.sevalla.com → **Static Sites** → **Add site**
2. Connect your GitHub repo
3. Set these build settings:

| Setting | Value |
|---|---|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | `18` |

4. Click **Deploy** — live in ~30 seconds.

## How it works
Zero dependencies. The entire app is a single self-contained HTML file that loads React from a CDN. No Vite, no bundler, no MIME type issues. The build command just copies the HTML file into the `dist/` folder.

## Run locally
Just open `index-static.html` directly in your browser — no server needed.
