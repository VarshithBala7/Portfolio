# Portfolio (React + Vite)

## Quick start
```bash
npm install
# If your repo is not username.github.io, set base in vite.config.js (e.g., /portfolio/)
npm run dev
```

## Build & Deploy to GitHub Pages
Option A (gh-pages):
```bash
npm run build
npm run deploy
```

This publishes `dist/` to the `gh-pages` branch.
Your site will be at: https://USERNAME.github.io/REPO/

Option B (GitHub Actions):
- Create `.github/workflows/deploy.yml` using the workflow from our chat.
- Push to `main` and enable Pages → GitHub Actions.
