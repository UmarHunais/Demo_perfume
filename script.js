/* ============================================================
   AROMA LUXURY PERFUME — SCRIPT.JS
   ============================================================ */

'use strict';

// ============================================================
// DATA
// ============================================================
// ---- Inline SVG bottle images (no network needed) ----
function bottleImg(hue, label, bg1, bg2) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='520' viewBox='0 0 400 520'>
    <defs>
      <linearGradient id='bg${hue}' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${bg1}'/>
        <stop offset='100%' stop-color='${bg2}'/>
      </linearGradient>
      <linearGradient id='bottle${hue}' x1='0' y1='0' x2='1' y2='0'>
        <stop offset='0%' stop-color='#1a1510'/>
        <stop offset='45%' stop-color='#2e2418'/>
        <stop offset='65%' stop-color='#c6a75e' stop-opacity='0.25'/>
        <stop offset='100%' stop-color='#111'/>
      </linearGradient>
      <linearGradient id='gold${hue}' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#d4b878'/>
        <stop offset='100%' stop-color='#a88a45'/>
      </linearGradient>
    </defs>
    <rect width='400' height='520' fill='url(#bg${hue})'/>
    <!-- stem -->
    <rect x='172' y='130' width='56' height='50' rx='3' fill='#1a1510'/>
    <!-- gold ring -->
    <rect x='165' y='177' width='70' height='7' rx='3' fill='url(#gold${hue})'/>
    <!-- body -->
    <rect x='100' y='183' width='200' height='270' rx='6' fill='url(#bottle${hue})'/>
    <!-- highlight -->
    <rect x='100' y='183' width='24' height='270' rx='6' fill='rgba(255,255,255,0.05)'/>
    <rect x='280' y='183' width='20' height='270' rx='4' fill='rgba(198,167,94,0.12)'/>
    <!-- label -->
    <rect x='128' y='238' width='144' height='158' rx='2' fill='rgba(198,167,94,0.1)' stroke='rgba(198,167,94,0.35)' stroke-width='1'/>
    <line x1='140' y1='252' x2='260' y2='252' stroke='rgba(198,167,94,0.5)' stroke-width='1'/>
    <line x1='140' y1='384' x2='260' y2='384' stroke='rgba(198,167,94,0.5)' stroke-width='1'/>
    <text x='200' y='300' text-anchor='middle' fill='rgba(198,167,94,0.9)' font-family='Georgia,serif' font-size='20' letter-spacing='5'>AROMA</text>
    <text x='200' y='322' text-anchor='middle' fill='rgba(198,167,94,0.55)' font-family='Georgia,serif' font-size='11' letter-spacing='3'>${label}</text>
    <text x='200' y='350' text-anchor='middle' fill='rgba(255,255,255,0.22)' font-family='Georgia,serif' font-size='9' letter-spacing='2'>EAU DE PARFUM</text>
    <text x='200' y='368' text-anchor='middle' fill='rgba(255,255,255,0.15)' font-family='Georgia,serif' font-size='8' letter-spacing='1'>100ml / 3.4 fl oz</text>
    <!-- cap -->
    <rect x='156' y='60' width='88' height='72' rx='5' fill='#111'/>
    <rect x='156' y='60' width='88' height='9' rx='5' fill='rgba(255,255,255,0.07)'/>
    <rect x='156' y='125' width='88' height='4' fill='url(#gold${hue})' opacity='0.7'/>
    <text x='200' y='104' text-anchor='middle' fill='rgba(198,167,94,0.35)' font-family='Georgia,serif' font-size='30'>A</text>
    <!-- bottom rim -->
    <rect x='100' y='447' width='200' height='6' rx='2' fill='url(#gold${hue})' opacity='0.4'/>
    <!-- shadow -->
    <ellipse cx='200' cy='468' rx='90' ry='9' fill='rgba(0,0,0,0.35)'/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function thumbImg(hue, bg1, bg2, angle) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <defs>
      <linearGradient id='t${hue}${angle}' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${bg1}'/>
        <stop offset='100%' stop-color='${bg2}'/>
      </linearGradient>
    </defs>
    <rect width='200' height='200' fill='url(#t${hue}${angle})'/>
    <rect x='70' y='50' width='60' height='105' rx='4' fill='rgba(26,21,16,0.85)'/>
    <rect x='70' y='25' width='60' height='28' rx='3' fill='rgba(15,12,8,0.9)'/>
    <rect x='68' y='52' width='64' height='5' rx='2' fill='rgba(198,167,94,0.8)'/>
    <rect x='82' y='80' width='36' height='55' rx='1' fill='rgba(198,167,94,0.08)' stroke='rgba(198,167,94,0.25)' stroke-width='0.8'/>
    <text x='100' y='113' text-anchor='middle' fill='rgba(198,167,94,0.8)' font-family='Georgia,serif' font-size='8' letter-spacing='2'>AROMA</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Pre-generate images
const imgs = {
  1: { main: bottleImg('1','VELOUR NOIR','#1a1208','#2e200c'),   thumbs: ['#1a1208','#2e200c','#3d2b10','#261a08'].map((c,i) => thumbImg('1',c,'#1a1208',i)) },
  2: { main: bottleImg('2','WHITE IRIS','#e8e0d0','#c8bfae'),    thumbs: ['#e8e0d0','#d4cab8','#c0b5a0','#ede6d8'].map((c,i) => thumbImg('2',c,'#e0d8c8',i)) },
  3: { main: bottleImg('3','OUD ROYALE','#1a0c06','#2e1508'),    thumbs: ['#1a0c06','#280e08','#3a1a0a','#150a04'].map((c,i) => thumbImg('3',c,'#1a0c06',i)) },
  4: { main: bottleImg('4','CITRUS SPRINT','#1a2808','#243a0c'), thumbs: ['#1a2808','#22340a','#1e3006','#283e10'].map((c,i) => thumbImg('4',c,'#1a2808',i)) },
  5: { main: bottleImg('5','ROSE ABSOLUE','#2e0a14','#3d1020'),  thumbs: ['#2e0a14','#38101a','#200810','#44141e'].map((c,i) => thumbImg('5',c,'#2e0a14',i)) },
  6: { main: bottleImg('6','NOIR FUMÉ','#0e0e0e','#1a1a18'),     thumbs: ['#0e0e0e','#141412','#1a1a18','#0a0a0a'].map((c,i) => thumbImg('6',c,'#0e0e0e',i)) },
  7: { main: bottleImg('7','AQUA MARINE','#081828','#0c2438'),   thumbs: ['#081828','#0a2030','#0e2840','#062030'].map((c,i) => thumbImg('7',c,'#081828',i)) },
  8: { main: bottleImg('8','BOIS SACRÉ','#1a1208','#2e200a'),    thumbs: ['#1a1208','#241808','#2e200c','#140e06'].map((c,i) => thumbImg('8',c,'#1a1208',i)) },
};

const products = [
  {
    id: 1,
    name: 'Velour Noir',
    category: 'Eau de Parfum',
    price: 240.99,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 127,
    badge: 'Bestseller',
    notes: ['Amber', 'Musk', 'Vanilla', 'Sandalwood', 'Tonka Bean'],
    noteType: 'Oriental',
    description: 'Velour Noir is an intoxicating Oriental fragrance that wraps the skin in a velvety embrace of amber and musk. Created by master perfumer François Demachy, this opulent scent unfolds like the finest silk — sensual, mysterious, and utterly unforgettable. The dry down reveals a warm Sandalwood and Tonka Bean accord that lingers beautifully for hours.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[1].main, thumbs: imgs[1].thumbs,
    reviews: [
      { name: 'Sophia R.', rating: 5, date: '2 weeks ago', text: 'Absolutely stunning fragrance. The longevity is remarkable — I still get compliments 12 hours after application. This is my signature scent now.', avatar: 'S' },
      { name: 'James O.', rating: 5, date: '1 month ago', text: 'Worth every penny. The amber and musk combination is perfectly balanced. It never feels overpowering, yet it commands a room.', avatar: 'J' }
    ]
  },
  {
    id: 2,
    name: 'White Iris',
    category: 'Eau de Toilette',
    price: 189.00,
    originalPrice: 220.00,
    rating: 4.6,
    reviewCount: 89,
    badge: 'Sale',
    notes: ['Iris', 'Bergamot', 'White Tea', 'Musk', 'Violet'],
    noteType: 'Floral',
    description: 'White Iris is a luminous floral composition that captures the pristine elegance of early morning dew. The crisp opening of Bergamot and White Tea gives way to an exquisite heart of Iris and Violet, setting on a subtle Musk base that leaves a trail of effortless sophistication.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[2].main, thumbs: imgs[2].thumbs,
    reviews: [
      { name: 'Elena K.', rating: 5, date: '3 weeks ago', text: 'The most beautiful iris fragrance I have ever encountered. It is clean, sophisticated, and genuinely unique.', avatar: 'E' }
    ]
  },
  {
    id: 3,
    name: 'Oud Royale',
    category: 'Extrait de Parfum',
    price: 380.00,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 54,
    badge: 'Exclusive',
    notes: ['Oud', 'Rose', 'Saffron', 'Leather', 'Amber'],
    noteType: 'Woody Oriental',
    description: 'Oud Royale is the pinnacle of our collection — a majestic interpretation of the precious Agarwood combined with Bulgarian Rose and Persian Saffron. Reserved for those who understand the language of true luxury, this Extrait de Parfum delivers an unparalleled concentration that transforms with your skin chemistry into something uniquely yours.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[3].main, thumbs: imgs[3].thumbs,
    reviews: [
      { name: 'Mohammed A.', rating: 5, date: '1 week ago', text: 'True liquid gold. The oud is authentic and the rose gives it a romantic depth I have not found anywhere else. Museum-worthy.', avatar: 'M' }
    ]
  },
  {
    id: 4,
    name: 'Citrus Sprint',
    category: 'Eau de Cologne',
    price: 120.00,
    originalPrice: null,
    rating: 4.4,
    reviewCount: 213,
    badge: null,
    notes: ['Lemon', 'Grapefruit', 'Neroli', 'Cedarwood', 'Vetiver'],
    noteType: 'Fresh Citrus',
    description: 'Citrus Sprint is a vibrant, energizing composition that captures the essence of Mediterranean freshness. The explosive citrus opening of Lemon and Grapefruit is lifted by delicate Neroli, anchored by Cedarwood and Vetiver for unexpected depth and substance.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[4].main, thumbs: imgs[4].thumbs,
    reviews: []
  },
  {
    id: 5,
    name: 'Rose Absolue',
    category: 'Eau de Parfum',
    price: 265.00,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 98,
    badge: 'New',
    notes: ['Bulgarian Rose', 'Peony', 'Lychee', 'Patchouli', 'Musk'],
    noteType: 'Floral Fruity',
    description: 'Rose Absolue is a declaration of romance — an opulent bouquet of Bulgarian Rose and Peony that opens with the playful sweetness of Lychee. This modern feminine fragrance strikes the perfect balance between classic elegance and contemporary vibrancy, leaving a soft Patchouli and Musk trail.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[5].main, thumbs: imgs[5].thumbs,
    reviews: []
  },
  {
    id: 6,
    name: 'Noir Fumé',
    category: 'Eau de Parfum',
    price: 310.00,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 61,
    badge: null,
    notes: ['Smoky Birch', 'Black Pepper', 'Leather', 'Amber', 'Iso E Super'],
    noteType: 'Woody Smoky',
    description: 'Noir Fumé is an avant-garde composition for those who refuse to blend into the crowd. The daring combination of Smoky Birch and Black Pepper creates a provocative opening that evolves into a rich Leather and Amber heart. Bold, unapologetic, and completely addictive.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[6].main, thumbs: imgs[6].thumbs,
    reviews: []
  },
  {
    id: 7,
    name: 'Aqua Marine',
    category: 'Eau de Toilette',
    price: 155.00,
    originalPrice: 175.00,
    rating: 4.3,
    reviewCount: 176,
    badge: 'Sale',
    notes: ['Sea Salt', 'Aquatic', 'Bergamot', 'Driftwood', 'Musk'],
    noteType: 'Aquatic Fresh',
    description: 'Aqua Marine evokes the freedom of open seas — a crisp, refreshing composition that blends Sea Salt and Aquatic notes with the warmth of Driftwood. Ideal for those who carry the spirit of adventure with them wherever they go.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[7].main, thumbs: imgs[7].thumbs,
    reviews: []
  },
  {
    id: 8,
    name: 'Bois Sacré',
    category: 'Extrait de Parfum',
    price: 420.00,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 32,
    badge: 'Limited',
    notes: ['Sacred Wood', 'Incense', 'Myrrh', 'Vetiver', 'Amber'],
    noteType: 'Woody Incense',
    description: 'Bois Sacré is a meditative, deeply spiritual fragrance inspired by ancient sacred rituals. The interplay of Sacred Wood, Incense, and Myrrh creates an aura of reverence and timelessness. This limited edition expression is produced in small quantities and numbered individually.',
    delivery: { discount: '15%', payment: 'Cash on Delivery', time: '3–4 Working Days', returns: '7 Days Easy Return' },
    image: imgs[8].main, thumbs: imgs[8].thumbs,
    reviews: []
  }
];

// ============================================================
// CART — localStorage
// ============================================================
function getCart() {
  try { return JSON.parse(localStorage.getItem('aroma_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('aroma_cart', JSON.stringify(cart));
}
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx > -1) { cart[idx].qty += qty; } else { cart.push({ id: productId, qty }); }
  saveCart(cart);
  updateCartUI();
  showToast('Added to cart');
}
function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartUI();
  renderCartDrawer();
}
function updateCartQty(productId, qty) {
  let cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx > -1) {
    if (qty <= 0) { cart = cart.filter(i => i.id !== productId); }
    else { cart[idx].qty = qty; }
  }
  saveCart(cart);
  updateCartUI();
  renderCartDrawer();
}
function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = products.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// ============================================================
// NAVIGATION
// ============================================================
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Active link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // Hamburger
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // Cart icon
  const cartIcon = document.getElementById('cartIcon');
  if (cartIcon) cartIcon.addEventListener('click', openCartDrawer);
}

// ============================================================
// CART UI
// ============================================================
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const totalEl = document.getElementById('cartTotal');
  if (!body) return;
  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty.<br>Discover our collection.</p></div>`;
  } else {
    body.innerHTML = cart.map(item => {
      const p = products.find(p => p.id === item.id);
      if (!p) return '';
      return `<div class="cart-item">
        <div class="cart-item-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-note">${p.category}</div>
          <div class="cart-item-ctrl">
            <div class="cart-item-qty">
              <button onclick="updateCartQty(${p.id}, ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${p.id}, ${item.qty + 1})">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Remove</button>
          </div>
        </div>
        <div class="cart-item-price">$${(p.price * item.qty).toFixed(2)}</div>
      </div>`;
    }).join('');
  }
  if (totalEl) totalEl.textContent = '$' + getCartTotal().toFixed(2);
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">✓</span><span class="toast-msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
let _scrollObserver = null;

function initScrollAnimations() {
  if (!_scrollObserver) {
    _scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          _scrollObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  }
  document.querySelectorAll('.fade-up:not(.visible), .fade-in:not(.visible)').forEach(el => _scrollObserver.observe(el));
}

// ============================================================
// STAR RENDERER
// ============================================================
function renderStars(rating) {
  return [1,2,3,4,5].map(i => `<span class="star${i <= Math.round(rating) ? '' : ' empty'}">★</span>`).join('');
}

// ============================================================
// INDEX PAGE
// ============================================================
function initIndex() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = products.slice(0, 4);
  grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
  initProductCardClicks(grid);
  // Re-observe newly added elements
  setTimeout(initScrollAnimations, 50);
}

// ============================================================
// SHOP PAGE
// ============================================================
function initShop() {
  const grid = document.getElementById('shopGrid');
  const countEl = document.getElementById('shopCount');
  const sortEl = document.getElementById('shopSort');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  let activeFilter = 'all';
  let activeSortVal = 'default';

  function getFiltered() {
    let list = [...products];
    if (activeFilter !== 'all') {
      list = list.filter(p =>
        p.noteType.toLowerCase().includes(activeFilter) ||
        p.notes.some(n => n.toLowerCase().includes(activeFilter)) ||
        p.category.toLowerCase().includes(activeFilter)
      );
    }
    if (activeSortVal === 'low') list.sort((a, b) => a.price - b.price);
    if (activeSortVal === 'high') list.sort((a, b) => b.price - a.price);
    if (activeSortVal === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }

  function render() {
    const filtered = getFiltered();
    if (countEl) countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${products.length}</strong> products`;
    grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
    initProductCardClicks(grid);
    setTimeout(initScrollAnimations, 50);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  if (sortEl) sortEl.addEventListener('change', () => { activeSortVal = sortEl.value; render(); });

  render();
}

// ============================================================
// PRODUCT CARD HTML
// ============================================================
function productCardHTML(p) {
  const orig = p.originalPrice ? `<span style="text-decoration:line-through;color:#aaa;font-size:1rem;margin-left:8px">$${p.originalPrice.toFixed(2)}</span>` : '';
  const badge = p.badge ? `<div class="product-card-badge">${p.badge}</div>` : '';
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-card-img">
      ${badge}
      <img src="${p.image}" alt="${p.name}">
      <div class="product-card-overlay">
        <div class="product-card-quick">Quick View</div>
      </div>
    </div>
    <div class="product-card-body">
      <div class="product-card-category">${p.category}</div>
      <div class="product-card-name">${p.name}</div>
      <div class="product-card-notes">${p.notes.slice(0,3).join(' · ')}</div>
      <div class="product-card-footer">
        <div>
          <span class="product-card-price">$${p.price.toFixed(2)}</span>${orig}
          <div class="product-card-stars" style="margin-top:4px">${renderStars(p.rating)}</div>
        </div>
        <button class="product-card-add" onclick="event.stopPropagation();addToCart(${p.id})" title="Add to cart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

function initProductCardClicks(container) {
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-card-add')) return;
      const id = card.dataset.id;
      window.location.href = `product.html?id=${id}`;
    });
  });
}

// ============================================================
// PRODUCT PAGE
// ============================================================
function initProduct() {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = products.find(p => p.id === id) || products[0];

  // Load reviews from localStorage
  const storedReviews = JSON.parse(localStorage.getItem(`reviews_${product.id}`) || '[]');
  const allReviews = [...product.reviews, ...storedReviews];

  // Main image
  const mainImg = document.getElementById('productMainImg');
  if (mainImg) mainImg.src = product.image;

  // Thumbnails
  const thumbsWrap = document.getElementById('productThumbs');
  if (thumbsWrap) {
    thumbsWrap.innerHTML = product.thumbs.map((src, i) =>
      `<div class="product-thumb${i===0?' active':''}" data-src="${src}">
        <img src="${src}" alt="View ${i+1}" loading="lazy">
      </div>`
    ).join('');
    thumbsWrap.querySelectorAll('.product-thumb').forEach(t => {
      t.addEventListener('click', () => {
        thumbsWrap.querySelectorAll('.product-thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        if (mainImg) { mainImg.style.opacity = '0'; mainImg.src = t.dataset.src; mainImg.onload = () => { mainImg.style.opacity='1'; }; }
      });
    });
  }

  // Product info
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  setText('productName', product.name);
  setText('productCategory', product.category);
  setText('productPrice', `$${product.price.toFixed(2)}`);
  if (product.originalPrice) setText('productOrigPrice', `$${product.originalPrice.toFixed(2)}`);
  setText('productDesc', product.description);
  setHTML('productRatingStars', renderStars(product.rating));
  setText('productRatingCount', `(${product.reviewCount} reviews)`);
  setHTML('productNotes', product.notes.map(n => `<span class="note-tag">${n}</span>`).join(''));
  setText('productNoteType', product.noteType);

  // Delivery
  const dv = product.delivery;
  setText('delivDiscount', dv.discount);
  setText('delivPayment', dv.payment);
  setText('delivTime', dv.time);
  setText('delivReturn', dv.returns);

  // Rating bars (simulated)
  const bars = document.querySelectorAll('.review-bar-fill');
  const percentages = [65, 25, 7, 2, 1];
  bars.forEach((bar, i) => {
    setTimeout(() => { bar.style.width = percentages[i] + '%'; }, 300 + i * 60);
  });

  // Reviews
  renderReviews(allReviews);
  setText('reviewsScore', product.rating.toFixed(1));
  const totalCount = document.getElementById('reviewsCount');
  if (totalCount) totalCount.textContent = `(${allReviews.length} reviews)`;

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('open');
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('open');
        h.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) { header.classList.add('open'); body?.classList.add('open'); }
    });
  });

  // Qty
  let qty = 1;
  const qtyEl = document.getElementById('qtyNum');
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    if (qty > 1) { qty--; if (qtyEl) qtyEl.textContent = qty; }
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    qty++;
    if (qtyEl) qtyEl.textContent = qty;
  });

  // Add to cart
  document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    addToCart(product.id, qty);
  });
  document.getElementById('buyNowBtn')?.addEventListener('click', () => {
    addToCart(product.id, qty);
    openCartDrawer();
  });

  // Star selection
  let selectedRating = 0;
  const stars = document.querySelectorAll('.star-select span');
  stars.forEach((star, i) => {
    star.addEventListener('mouseenter', () => stars.forEach((s, j) => s.classList.toggle('active', j <= i)));
    star.addEventListener('mouseleave', () => stars.forEach((s, j) => s.classList.toggle('active', j < selectedRating)));
    star.addEventListener('click', () => { selectedRating = i + 1; });
  });

  // Review form
  document.getElementById('reviewForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectedRating === 0) { showToast('Please select a star rating'); return; }
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text) { showToast('Please fill all fields'); return; }
    const newReview = { name, rating: selectedRating, date: 'Just now', text, avatar: name[0].toUpperCase() };
    const stored = JSON.parse(localStorage.getItem(`reviews_${product.id}`) || '[]');
    stored.unshift(newReview);
    localStorage.setItem(`reviews_${product.id}`, JSON.stringify(stored));
    allReviews.unshift(newReview);
    renderReviews(allReviews);
    e.target.reset();
    selectedRating = 0;
    stars.forEach(s => s.classList.remove('active'));
    showToast('Review submitted! Thank you.');
  });

  // Related
  const related = products.filter(p => p.id !== product.id).slice(0, 4);
  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) {
    relGrid.innerHTML = related.map(p => productCardHTML(p)).join('');
    initProductCardClicks(relGrid);
  }
}

function renderReviews(reviews) {
  const list = document.getElementById('reviewList');
  if (!list) return;
  if (reviews.length === 0) {
    list.innerHTML = `<p style="color:var(--text-light);font-size:0.92rem;">No reviews yet. Be the first to share your experience.</p>`;
    return;
  }
  list.innerHTML = reviews.map(r => `
    <div class="review-card fade-up">
      <div class="review-card-header">
        <div class="reviewer-info">
          <div class="reviewer-avatar">${r.avatar}</div>
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div class="reviewer-date">${r.date}</div>
          </div>
        </div>
        <div class="review-stars">${renderStars(r.rating)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');
}

// ============================================================
// CONTACT PAGE
// ============================================================
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const subject = document.getElementById('cSubject').value;
    const msg = document.getElementById('cMessage').value.trim();
    
    if (!name || !email || !msg) { showToast('Please fill all required fields'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { showToast('Please enter a valid email'); return; }
    
    const message = `*New Enquiry from Aroma Website*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Email:* ${email}\n` +
                    (phone ? `*Phone:* ${phone}\n` : '') +
                    (subject ? `*Subject:* ${subject}\n` : '') +
                    `\n*Message:*\n${msg}`;
    
    const whatsappUrl = `https://wa.me/94778502118?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Optionally show success state too
    form.style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
  });
}

// ============================================================
// CART DRAWER — HTML injection (call once per page)
// ============================================================
function injectCartDrawer() {
  if (document.getElementById('cartDrawer')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart-overlay" id="cartOverlay" onclick="closeCartDrawer()"></div>
    <div class="cart-drawer" id="cartDrawer">
      <div class="cart-drawer-header">
        <h3 class="cart-drawer-title">Your Cart</h3>
        <button class="cart-drawer-close" onclick="closeCartDrawer()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="cart-drawer-body" id="cartDrawerBody"></div>
      <div class="cart-drawer-footer">
        <div class="cart-total-row">
          <span class="cart-total-label">Total</span>
          <span class="cart-total-val" id="cartTotal">$0.00</span>
        </div>
        <button class="cart-checkout-btn" onclick="window.location.href='checkout.html'">Proceed to Checkout →</button>
      </div>
    </div>`);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  injectCartDrawer();
  updateCartUI();
  initScrollAnimations();
  initIndex();
  initShop();
  initProduct();
  initContact();
});
