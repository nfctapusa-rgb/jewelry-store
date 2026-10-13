# Jewels by Chris

Website for Jewels by Chris, handmade rings, custom jewelry and repairs at 608 S Hill St #1012 in the Downtown Los Angeles Jewelry District.

It is a plain static site: HTML, CSS and a little JavaScript. There is no build step, nothing to install and no environment variables.

## What's inside

```
index.html            Homepage: hero, featured rings, custom work, services, reviews, visit
collection.html       Every ring, with filters, search, sorting and a ring detail view
404.html              Shown for missing pages
assets/
  site.css            Shared styles
  shop.js             The ring list (prices, photos, Etsy links) and shared page code
  jewels-by-chris-mark.svg   Logo mark and browser icon
  products/           Ring photos
vercel.json           Vercel settings (clean URLs)
.nojekyll             Tells GitHub Pages to serve files as-is
```

## Deploy

### 1. Put it on GitHub

**In the browser (no command line):**
1. Go to github.com/new, name the repository (for example `jewels-by-chris`) and create it.
2. On the empty repository page choose **uploading an existing file**.
3. Drag in everything inside this folder, including the `assets` folder, then **Commit changes**.

**Or with git:**
```bash
cd jewels-by-chris
git init
git add .
git commit -m "Jewels by Chris website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jewels-by-chris.git
git push -u origin main
```

### 2. Publish it (pick one)

**Vercel (recommended):** at vercel.com/new, import the repository. Framework preset **Other**, build command empty, output directory `.`. Deploy, then add the domain under Project Settings → Domains. Pages are served at `/` and `/collection`.

**GitHub Pages:** in the repository, open Settings → Pages, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save. The site appears at `https://YOUR-USERNAME.github.io/jewels-by-chris/` within a minute or two. Add a custom domain on the same page if you have one.

## Editing

- **Prices, names, photos, Etsy links:** edit the `PRODUCTS` list at the top of `assets/shop.js`. Both pages read from it.
- **Homepage rings:** add or remove `featured: true` on a ring's line in `assets/shop.js`.
- **New ring:** add its photo to `assets/products/`, then add a line to `PRODUCTS` with `type` (`gemstone`, `lab` or `diamond`), `metal` (`yellow`, `white` or `rose`), the price and its Etsy listing link.
- **Hours, address, phone:** search for `9 AM`, `608 S Hill` or `510-3734` in `index.html` and `collection.html`.
- **Reviews:** edit the `reviews` list near the bottom of `index.html`.

Filtered collection links work anywhere, for example `collection.html?type=lab`, `collection.html?metal=rose&sort=low` or `collection.html?price=0-600`.

## Notes

- Business details come from the Jewels By Chris Google profile. Ring details and prices match the `jewelsbychriss` Etsy shop as of October 2026; Etsy handles checkout, sizing and availability.
- The "Rose Gold Curved Band Diamond Ring" photo loads from Etsy's image server. To host it yourself, save it as `assets/products/25-rose-gold-curved-band-diamond-accent.jpg` and change that ring's `img` in `assets/shop.js` to `P + '25-rose-gold-curved-band-diamond-accent.jpg'`.
- The three review quotes were left for Harout on his earlier Izmirlian Jewelry Google listing. Replace them as reviews arrive on the new profile.

## Preview locally

Double-click `index.html`, or run a small server in this folder (for example `python3 -m http.server`) and open http://localhost:8000.
