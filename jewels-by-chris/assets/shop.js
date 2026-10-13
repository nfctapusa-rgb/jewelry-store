/* Jewels by Chris: product list and shared page behaviour.
   To update a ring, edit its line in PRODUCTS. "featured: true" puts it on the homepage. */
(function () {
  const E = 'https://www.etsy.com/listing/';
  const P = 'assets/products/';

  const PRODUCTS = [
    { name: 'Oval Teal Gemstone Halo Ring', price: 4372, type: 'gemstone', metal: 'yellow', img: P + '01-oval-teal-gemstone-halo-ring.avif', url: E + '4414365825', featured: true },
    { name: 'Blue Topaz Double Halo Diamond Ring', price: 3662, type: 'gemstone', metal: 'white', img: P + '07-blue-topaz-double-halo-diamond-ring.jpg', url: E + '4414364924', featured: true },
    { name: 'Rose Gold Amethyst & Diamond Halo Ring', price: 3360, type: 'gemstone', metal: 'rose', img: P + '06-rose-gold-amethyst-diamond-halo.webp', url: E + '4414349187', featured: true },
    { name: 'Green Tourmaline & Diamond Halo Ring', price: 3300, type: 'gemstone', metal: 'white', img: P + '03-green-tourmaline-diamond-halo-ring.avif', url: E + '4414379357' },
    { name: 'Emerald & Natural Diamond Ring', price: 2375, type: 'gemstone', metal: 'yellow', img: P + '02-green-emerald-natural-diamond-ring.avif', url: E + '4414375295' },
    { name: 'Twist of Brilliance Diamond Ring', price: 1005, type: 'diamond', metal: 'yellow', img: P + '16-twist-of-brilliance-yellow-gold.webp', url: E + '4373818923', featured: true },
    { name: 'Multi-Row Lab Diamond Ring', price: 1170, type: 'lab', metal: 'white', img: P + '14-multi-row-lab-diamond-white-gold.jpg', url: E + '4414405314', featured: true },
    { name: '35-Stone Sparkling Band', price: 1092, type: 'lab', metal: 'white', img: P + '12-35-stone-sparkling-band-white-gold.jpg', url: E + '4414393582' },
    { name: 'Two-Stone Diamond Twist Ring', price: 892, type: 'diamond', metal: 'white', img: P + '19-two-stone-diamond-twist-white-gold-892.webp', url: E + '4373842799' },
    { name: 'Lab Diamond Cluster Ring', price: 860, type: 'lab', metal: 'yellow', img: P + '09-lab-diamond-cluster-14k-gold.webp', url: E + '4414382780' },
    { name: 'Rose Gold Double-Band Diamond Ring', price: 787, type: 'diamond', metal: 'rose', img: P + '18-rose-gold-double-band-diamond-accent.webp', url: E + '4373830207', cover: true, featured: true },
    { name: 'Gold Open-Frame Ring', price: 775, type: 'diamond', metal: 'yellow', img: P + '24-elegant-gold-open-frame-ring-back.webp', url: E + '4374498883', featured: true },
    { name: 'Two-Stone Diamond Twist Band', price: 752, type: 'diamond', metal: 'white', img: P + '21-two-stone-diamond-twist-white-gold-752.webp', url: E + '4374451561', cover: true },
    { name: 'Gold Dual-Band Diamond Ring', price: 665, type: 'diamond', metal: 'yellow', img: P + '22-elegant-gold-dual-band-ring.webp', url: E + '4374471950' },
    { name: 'Rose Gold Intertwined Diamond Band', price: 592, type: 'diamond', metal: 'rose', img: P + '23-rose-gold-intertwined-diamond-band.webp', url: E + '4374483522' },
    { name: 'Lab-Grown Diamond Cluster Ring, Marquise', price: 572, type: 'lab', metal: 'white', img: P + '11-lab-grown-cluster-white-gold-572.webp', url: E + '4414394275' },
    { name: 'Yellow Gold Halo Open Circle Ring', price: 570, type: 'diamond', metal: 'yellow', img: P + '17-yellow-gold-halo-open-circle.webp', url: E + '4373821987' },
    { name: 'Lab-Grown Diamond Cluster Ring, Round', price: 557, type: 'lab', metal: 'white', img: P + '04-lab-grown-cluster-white-gold-557.avif', url: E + '4414396507' },
    { name: 'Luxe Halo Diamond Ring', price: 557, type: 'diamond', metal: 'rose', img: P + '15-luxe-halo-diamond-rose-gold.webp', url: E + '4373801930' },
    { name: 'Delicate Diamond Cluster Ring', price: 537, type: 'diamond', metal: 'white', img: P + '08-delicate-diamond-cluster-white-gold.webp', url: E + '4414379744' },
    { name: 'Rose Gold Infinity Knot Diamond Ring', price: 532, type: 'diamond', metal: 'rose', img: P + '20-rose-gold-infinity-knot-diamond-ring.webp', url: E + '4373851330', featured: true },
    { name: 'Rose Gold Curved Band Diamond Ring', price: 532, type: 'diamond', metal: 'rose', img: 'https://i.etsystatic.com/32170545/r/il/7fcbd0/7270660233/il_794xN.7270660233_hfr7.jpg', url: E + '4374449184' },
    { name: 'Trio Lab Diamond Gold Ring', price: 505, type: 'lab', metal: 'yellow', img: P + '13-trio-lab-diamond-gold-ring.jpg', url: E + '4414397286' },
    { name: 'Dainty Lab Diamond Band', price: 487, type: 'lab', metal: 'yellow', img: P + '10-dainty-lab-diamond-band.webp', url: E + '4414392025' },
    { name: 'Twin Lab Diamond Duo Ring', price: 435, type: 'lab', metal: 'yellow', img: P + '05-twin-lab-diamond-duo-ring.avif', url: E + '4414400298' }
  ];

  const TYPE = { gemstone: 'Gemstone and diamond', lab: 'Lab-grown diamond', diamond: 'Diamond' };
  const METAL = { yellow: 'Yellow gold', white: 'White gold', rose: 'Rose gold' };
  const money = n => '$' + n.toLocaleString('en-US') + '.00';
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  function cardHTML(p, i) {
    return `<button class="card" data-i="${i}" aria-label="${esc(p.name)}, ${money(p.price)}. View details">
      <span class="ph"><img src="${p.img}" alt="" loading="lazy" class="${p.cover ? 'cover' : ''}"><span class="tag">${METAL[p.metal]}</span></span>
      <span class="name">${esc(p.name)}</span>
      <span class="meta"><span>${TYPE[p.type]}</span><span>${money(p.price)}</span></span>
    </button>`;
  }

  /* Product detail dialog, injected once per page */
  let list = [], current = 0, dlg;
  function buildDialog() {
    document.body.insertAdjacentHTML('beforeend', `
      <dialog id="pd" aria-labelledby="pd-name">
        <button class="x" id="pd-close" aria-label="Close">×</button>
        <div class="pd">
          <div class="ph"><img id="pd-img" alt=""></div>
          <div class="info">
            <h2 id="pd-name"></h2>
            <p class="price" id="pd-price"></p>
            <dl>
              <dt>Type</dt><dd id="pd-type"></dd>
              <dt>Shown in</dt><dd id="pd-metal"></dd>
              <dt>Made</dt><dd>By hand in Los Angeles</dd>
            </dl>
            <p class="fine">Checkout, ring size options and shipping are handled on Etsy. For a different size, stone or metal, call the shop.</p>
            <div class="stack">
              <a class="btn" id="pd-buy" target="_blank" rel="noopener">Buy on Etsy</a>
              <a class="btn ghost" href="tel:+16265103734">Call about this ring</a>
            </div>
            <div class="pd-nav"><button id="pd-prev">Previous</button><button id="pd-next">Next</button></div>
          </div>
        </div>
      </dialog>`);
    dlg = document.getElementById('pd');
    document.getElementById('pd-close').onclick = () => dlg.close();
    document.getElementById('pd-prev').onclick = () => show(current - 1);
    document.getElementById('pd-next').onclick = () => show(current + 1);
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(current - 1); if (e.key === 'ArrowRight') show(current + 1); });
  }
  function show(i) {
    if (!list.length) return;
    current = (i + list.length) % list.length;
    const p = list[current];
    const img = document.getElementById('pd-img');
    img.src = p.img; img.alt = p.name; img.className = p.cover ? 'cover' : '';
    document.getElementById('pd-name').textContent = p.name;
    document.getElementById('pd-price').textContent = money(p.price);
    document.getElementById('pd-type').textContent = TYPE[p.type];
    document.getElementById('pd-metal').textContent = METAL[p.metal];
    document.getElementById('pd-buy').href = p.url;
    if (!dlg.open) dlg.showModal();
  }
  /* Wire a grid so clicking a card opens the dialog over the given list */
  function bindGrid(grid, getList) {
    grid.addEventListener('click', e => {
      const c = e.target.closest('.card');
      if (!c) return;
      list = getList();
      show(+c.dataset.i);
    });
  }

  /* Header menu, call link and footer year: shared by every page */
  function initChrome() {
    const menuBtn = document.querySelector('.menu-btn');
    const drawer = document.getElementById('drawer');
    const callLink = document.querySelector('.bar .call');
    const mq = matchMedia('(max-width: 860px)');
    const syncCall = () => { if (callLink) callLink.hidden = !mq.matches; };
    mq.addEventListener('change', syncCall); syncCall();
    const closeMenu = () => { drawer.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); menuBtn.textContent = 'Menu'; };
    menuBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    drawer.addEventListener('click', e => { if (e.target.tagName === 'A') closeMenu(); });
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  buildDialog();
  initChrome();
  window.JBC = { PRODUCTS, TYPE, METAL, money, cardHTML, bindGrid };
})();
