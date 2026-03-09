# 🛒 Bogo Buddy

Split BOGO grocery deals with a neighbor. Match by store and location, schedule store runs, and coordinate pickups — all in one app.

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Install & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

To test on your phone during dev, run:
```bash
npm run dev -- --host
```
Then open the network URL (e.g. `http://192.168.x.x:5173`) on your phone's browser.

---

## Deploy

### ▲ Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done. Auto-deploys on every git push.

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```
Or connect your GitHub repo at netlify.com for auto-deploy.

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # set public dir to: dist
npm run build
firebase deploy
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## Project Structure

```
bogo-buddy/
├── src/
│   ├── context/
│   │   └── AppContext.jsx     # Global state (stores, buddies, deals, chat)
│   ├── components/
│   │   ├── UI.jsx             # Reusable components (Button, Card, Input…)
│   │   ├── Toast.jsx          # Toast notification system
│   │   └── BottomNav.jsx      # Bottom tab navigation
│   ├── screens/
│   │   ├── Onboarding.jsx     # 3-step signup flow
│   │   ├── Dashboard.jsx      # Home: stores + deals overview
│   │   ├── PostDeal.jsx       # Post a new BOGO deal
│   │   ├── Schedule.jsx       # Schedule a store run with a buddy
│   │   ├── Meetup.jsx         # Live meetup + check-in screen
│   │   ├── Chat.jsx           # In-app messaging with buddies
│   │   └── Buddies.jsx        # Manage and replace buddies
│   ├── App.jsx                # Router + layout
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Next Steps (when you're ready to add a backend)

- **Auth**: Add Firebase Auth or Supabase Auth for real user accounts
- **Database**: Store deals, buddies, and messages in Firestore or Supabase
- **Push notifications**: Use Firebase Cloud Messaging for real-time alerts
- **Geolocation**: Use the browser Geolocation API + a radius query to match buddies
- **Payments**: Add Stripe or deep-link to Venmo/Zelle for splitting costs

---

## Tech Stack
- **React 18** + **React Router v6**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- Mobile-first, PWA-ready
