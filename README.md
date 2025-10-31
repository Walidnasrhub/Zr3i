
# Zr3i Frontend — Production-ready (Bilingual)

This repository is a production-ready **React + Vite + Tailwind** bilingual website scaffold for **Zr3i / زرعي**.
It includes full, non-placeholder textual content, SVG logos, SEO meta tags, JSON-LD, and Vercel configuration.

## What to replace before going live (CHECKLIST)
1. Replace `/public/zr3i-logo-en.svg` and `/public/zr3i-logo-ar.svg` with your final vector logos (same filenames).  
2. Replace `/public/public-og.svg` with a high-resolution PNG or JPG (1200x630) named `/public/public-og.png` for better social previews.  
3. Update `src/App.jsx` text if you want to expand pages — the current copy is comprehensive and SEO-optimized.  
4. Add analytics & tracking IDs (Google Analytics, Search Console verification meta tags) inside `public/index.html` or use `react-helmet` in `src/App.jsx`.  
5. Configure contact form backend / integrations (Mailgun, SendGrid, or serverless function).

## How to run locally
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Deploy to GitHub + Vercel (recommended flow)
1. Create a new GitHub repository (e.g., `zr3i-website`).  
2. Locally initialize git and push:
```bash
git init
git add .
git commit -m "Initial Zr3i production-ready frontend"
git branch -M main
git remote add origin https://github.com/<your-org-or-username>/zr3i-website.git
git push -u origin main
```
3. Sign in to Vercel and import project from GitHub. Choose the `main` branch. Vercel will auto-detect the build (Vite) and set the build command to `npm run build` and output directory to `dist`. If not, set it manually.  
4. Add environment variables (if any) and set up a domain (zr3i.com).

## SEO & Social previews
- Replace `/public/public-og.png` with your final OG image.  
- Add structured data and page-specific meta tags using `react-helmet` (already included).

## One-click deploy (optional)
- You can enable Vercel's GitHub integration. Each push to `main` will auto-deploy the static site.

## Support
If you'd like, I can:
- Push to GitHub for you and create the initial commit (you'll need to provide a repo name and grant access tokens), or
- Create GitHub Actions for CI or build-time optimization, or
- Create serverless functions for the contact form and analytics setup.
