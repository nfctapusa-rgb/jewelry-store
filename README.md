# Jewels by Chris website

Static site for Jewels by Chris (Harout Izmirlian), handmade fine rings in Los Angeles.
Every ring links to its listing in the Etsy shop: https://www.etsy.com/shop/jewelsbychriss

The site lives in `izmirlian-jewelry-github/` because that is the Root Directory set on the
Vercel project. To use a cleaner folder name, change Root Directory in Vercel's project
settings first, then rename the folder.

- `index.html` – the whole page. To add a ring, copy one `<li class="ring">` block and change
  the Etsy link, photo, name, price and the `data-kind` / `data-metal` / `data-price` values.
- `assets/rings/` – product photos, cropped and centered on white at 800×800.
