# Haboba 🌙

A bilingual platform preserving documented Sudanese folklore, mythology, and oral heritage — researched and sourced from real ethnographic and archival material.

**[Live Site →](https://haboba-blue.vercel.app)**

## Why This Exists

"Haboba" means grandmother in Sudanese Arabic — the traditional keeper of oral stories. Much of Sudan's folklore survives only in scattered academic archives and living memory. This project gathers real, sourced stories — from Nubian legends to desert tales — into one searchable, bilingual, accessible place.

Every story links to its original documented source. Nothing is fabricated.

## Features

- 🌍 **Bilingual** — full English/Arabic UI with RTL/LTR support (react-i18next)
- 🔍 Real-time search across stories, regions, and summaries
- 🏷️ Category filtering — Desert, River, Heritage, Legend
- 📄 Dynamic article routing with category/region badges and source citations
- 📤 Native share (Web Share API) with clipboard fallback
- ⏱️ Auto-computed reading time
- ♿ Accessible — semantic HTML, focus states, skip-to-content link
- 🔎 Per-page SEO via react-helmet-async (Open Graph, Twitter cards)
- 📱 Fully responsive, mobile-first navigation
- 🎨 Custom design system reflecting Nile and desert tones

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **React Router v6** — client-side routing
- **react-i18next** — internationalization
- **Tailwind CSS** — custom design system with logical properties for RTL
- **react-helmet-async** — per-page SEO meta tags

## Run Locally

```bash
git clone https://github.com/joesphantoine-coder/haboba.git
cd haboba
npm install
npm run dev
```

## Project Structure

```
haboba/
├── src/
│   ├── components/   # Navbar, Footer, StoryCard, Badge, ShareButton, SEO, etc.
│   ├── pages/        # Home, Stories, ArticlePage, About, Donate, SignIn
│   ├── data/         # Bilingual story data
│   ├── i18n/         # Translation config + locale files (en/ar)
│   ├── lib/          # Reading time, localization, document direction, share utils
│   └── types/        # Shared TypeScript types
├── public/
│   ├── logo/         # Brand icon assets
│   ├── favicon.ico, robots.txt, sitemap.xml
└── vercel.json       # SPA rewrite rule for client-side routing
```

## Sources

Stories are researched from documented folklore collections, including the Aarne-Thompson-Uther Folktale Index, Sudan Memory digital heritage archive, and published ethnographic work (Frobenius, Al-Shahi & Moore). Full citations appear on each article page.

## Roadmap

- [ ] Full Arabic translations for all story content (data structure already supports this)
- [ ] Backend authentication for Sign In
- [ ] Payment integration for Donate
- [ ] Community-contributed stories

## Author

Mahmoud Gafar Ahmed Mohamed — [GitHub](https://github.com/joesphantoine-coder)