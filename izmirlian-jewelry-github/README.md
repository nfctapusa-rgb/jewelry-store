# Izmirlian Jewelry website

A standalone static website for Izmirlian Jewelry in the Downtown Los Angeles Jewelry District. Product photos are bundled in `assets/products`; the page needs no build step, package install, or environment variables.

## Put it on GitHub and Vercel

1. Create a new GitHub repository for Izmirlian Jewelry.
2. Upload the contents of this folder to the repository root. `index.html` and `assets/` should be at the top level.
3. In Vercel, import that repository. Choose **Other** as the framework preset, leave the build command blank, and set the output directory to `.`.
4. Deploy, then connect the customer’s domain in Vercel’s project settings.

## Content notes

- Calls go to `(626) 510-3734`; directions point to `608 S Hill St #1012, Los Angeles, CA 90014`.
- The Etsy buttons link to `jewelsbychriss` and its shop search. Etsy controls checkout and current availability.
- Product photos and names came from the files supplied for the site. Prices are displayed as supplied and may change. One supplied filename had the ambiguous amount `1,0005.00`; that item links to Etsy without displaying a price.
- The customer quotes are attributed to Google reviews and the page displays the supplied `5.0 · 7 reviews` rating.

## Local preview

Open `index.html` in a browser, or run a static file server from this folder.
