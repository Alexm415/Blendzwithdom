# Blendzwitdom

Single-page barber portfolio built with React + Vite (plain CSS).

## Edit the site content

All text, prices, hours, links and gallery photos live in **`src/siteConfig.js`**.
Anything marked `TODO` is placeholder content. Links left as `'#'` show as "Coming soon".

Gallery photos live in `src/assets/gallery/` (750×1000 JPG + WebP). To add or swap one,
import it at the top of `src/siteConfig.js` and add it to `gallery` (instructions are in the file).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build in dist/
npm run preview  # preview the build
```
