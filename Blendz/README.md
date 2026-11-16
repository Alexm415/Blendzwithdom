# Blendzwitdom

Single-page barber portfolio built with React + Vite (plain CSS).

## Edit the site content

All text, prices, hours, links and gallery photos live in **`src/siteConfig.js`**.
Anything marked `TODO` is placeholder content. Links left as `'#'` show as "Coming soon".

To add haircut photos, drop them in `src/assets/gallery/`, import them at the top of
`src/siteConfig.js`, and set `image:` on a gallery item (instructions are in the file).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build in dist/
npm run preview  # preview the build
```
