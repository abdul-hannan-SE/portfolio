/**
 * Portfolio interactions & rendering — expects js/data.js and vendor scripts loaded first.
 * Alpine calls window.skillTabs from x-data.
 */

function skillTabs() {
  return {
    active: 'all',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'frontend', label: 'Frontend' },
      { id: 'backend', label: 'Backend' },
      { id: 'database', label: 'Database' },
      { id: 'infra', label: 'Infrastructure' },
      { id: 'languages', label: 'Languages' },
    ],
    init() {
      window.__skillTabApi = this;
      renderSkillCards();
    },
    setTab(id) {
      this.active = id;
      const mount = document.getElementById('skillCardsMount');
      mount.classList.add('opacity-50', 'scale-[0.98]');
      setTimeout(() => {
        renderSkillCards();
        mount.classList.remove('opacity-50', 'scale-[0.98]');
        initTilt(document.querySelectorAll('#skillCardsMount .tilt-card'));
        if (window.AOS) AOS.refresh();
      }, 180);
    },
  };
}
window.skillTabs = skillTabs;

function projectCardInner(p) {
  const previewUrl = (p.links && p.links.github) || '#';
  const imgBlock = p.image
    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)} screenshot" class="h-48 w-full rounded-xl object-cover project-shot" loading="lazy" />`
    : `<div class="h-48 w-full rounded-xl bg-gradient-to-br from-accent-purple/15 via-slate-100 to-accent-cyan/15 flex items-center justify-center text-slate-500 text-sm border border-slate-200/90 relative overflow-hidden">
         <span class="relative z-10 px-4 text-center">Add screenshot<br/><span class="text-xs text-slate-500">${escapeHtml(p.imageHint || 'set image URL in PORTFOLIO_DATA')}</span></span>
       </div>`;
  const gh = p.links && p.links.github ? escapeHtml(p.links.github) : '#';
  const comment = `<!-- ADD PROJECT SCREENSHOT: ${p.imageHint || p.slug}.png -->`;
  return `
    ${comment}
    <article class="project-card tilt-card group relative h-full rounded-2xl glass border border-slate-200/90 overflow-hidden shadow-card transition-all duration-500 hover:border-accent-purple/40 hover:shadow-glow">
      <div class="relative overflow-hidden">
        ${imgBlock}
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent opacity-70 pointer-events-none"></div>
        <a href="${gh}" target="_blank" rel="noopener" class="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center border border-slate-200 text-slate-800 hover:shadow-glow shadow-sm" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="${escapeHtml(previewUrl)}" target="_blank" rel="noopener" class="overlay-cta absolute inset-0 z-10 flex items-center justify-center bg-slate-900/55 backdrop-blur-[2px] text-decoration-none">
          <span class="rounded-full px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold text-sm shadow-glow">View Project</span>
        </a>
      </div>
      <div class="p-6">
        <span class="text-xs font-semibold uppercase tracking-wider text-accent-pink">${escapeHtml(p.category)}</span>
        <h3 class="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-accent-cyan transition-colors">${escapeHtml(p.title)}</h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">${escapeHtml(p.description)}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${(p.tech || []).map((t) => `<span class="text-xs px-2 py-1 rounded-md bg-slate-100 border border-slate-200/90 text-slate-700">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="flex gap-3">
          <a href="${gh}" target="_blank" rel="noopener" class="ripple flex-1 text-center rounded-xl py-2.5 text-sm font-medium border border-slate-200 hover:border-accent-purple text-slate-800 bg-white/80 transition-all"><i class="fa-brands fa-github mr-2"></i>GitHub</a>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProjects() {
  const projects = window.PORTFOLIO_DATA.projects;
  const swiperWrap = document.getElementById('projectSwiperWrapper');
  const grid = document.getElementById('projectGrid');
  swiperWrap.innerHTML = projects.map((p) => `<div class="swiper-slide">${projectCardInner(p)}</div>`).join('');
  grid.innerHTML = projects.map((p) => projectCardInner(p)).join('');
}

function renderStats() {
  const row = document.getElementById('statsRow');
  row.innerHTML = window.PORTFOLIO_DATA.stats
    .map(
      (s) => `
    <div class="glass rounded-2xl px-6 py-5 min-w-[140px] border border-slate-200/90 shadow-card" data-aos="zoom-in">
      <p id="${s.id}" class="text-3xl font-extrabold gradient-text">0${s.suffix}</p>
      <p class="text-slate-500 text-sm mt-1">${escapeHtml(s.label)}</p>
    </div>
  `
    )
    .join('');
}

function renderSkillBars() {
  const c = document.getElementById('skillBarsContainer');
  c.innerHTML = window.PORTFOLIO_DATA.skillBars
    .map(
      (b) => `
    <div class="skill-bar-row" data-pct="${b.pct}">
      <div class="flex justify-between text-sm mb-2"><span class="text-slate-700">${escapeHtml(b.label)}</span><span class="text-accent-cyan font-medium">${b.pct}%</span></div>
      <div class="h-2 rounded-full bg-slate-200 overflow-hidden border border-slate-200/80">
        <div class="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink" style="width:${b.pct}%"></div>
      </div>
    </div>
  `
    )
    .join('');
}

function renderSkillCards() {
  const mount = document.getElementById('skillCardsMount');
  const active = window.__skillTabApi ? window.__skillTabApi.active : 'all';
  const skills = window.PORTFOLIO_DATA.skills.filter((sk) => {
    if (active === 'all') return true;
    return sk.category === active;
  });
  const seen = new Set();
  const list = skills.filter((sk) => {
    const k = sk.name + sk.category;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  mount.innerHTML = list
    .map(
      (sk) => `
    <div class="tilt-card rounded-2xl glass border border-slate-200/90 p-6 flex flex-col items-center text-center gap-3 hover:border-accent-purple/40 hover:shadow-[0_0_24px_rgba(79,70,229,0.12)] transition-all duration-300"
         data-tilt data-tilt-max="14" data-tilt-speed="600" data-tilt-glare="true" data-tilt-max-glare="0.25">
      <span class="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-cyan/15 flex items-center justify-center text-2xl text-slate-800 border border-slate-200/80">
        <i class="${sk.icon} text-accent-cyan"></i>
      </span>
      <p class="font-semibold text-slate-900">${escapeHtml(sk.name)}</p>
    </div>
  `
    )
    .join('');
}

function renderTimeline() {
  const el = document.getElementById('timelineMount');
  el.innerHTML = `
    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink opacity-80"></div>
    <div class="space-y-12">
      ${window.PORTFOLIO_DATA.experience
        .map((exp, i) => {
          const side = i % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%]';
          const aos = i % 2 === 0 ? 'fade-right' : 'fade-left';
          return `
        <div class="relative pl-12 md:pl-0 ${side}" data-aos="${aos}">
          <div class="timeline-node absolute left-[9px] md:left-1/2 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan border-2 border-white shadow-sm z-10"></div>
          <div class="glass rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-accent-cyan/35 transition-all">
            <p class="text-xs font-bold uppercase tracking-widest text-accent-pink mb-1">${escapeHtml(exp.period)}</p>
            <h3 class="text-xl font-bold text-slate-900">${escapeHtml(exp.role)}</h3>
            <p class="text-accent-cyan font-medium mt-1">${escapeHtml(exp.company)} · ${escapeHtml(exp.location)}</p>
            <ul class="mt-4 space-y-2 text-slate-600 text-sm ${i % 2 === 0 ? 'md:text-right' : ''}">
              ${exp.highlights.map((h) => `<li class="flex gap-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}"><span class="text-accent-purple">▹</span><span>${escapeHtml(h)}</span></li>`).join('')}
            </ul>
          </div>
        </div>`;
        })
        .join('')}
    </div>`;
}

function initTilt(elements) {
  if (!window.VanillaTilt) return;
  elements.forEach((el) => {
    if (el.vanillaTilt) {
      el.vanillaTilt.destroy?.();
    }
  });
  VanillaTilt.init(Array.from(elements), {
    max: 12,
    speed: 800,
    glare: true,
    'max-glare': 0.2,
    gyroscope: false,
  });
}

function initParticles() {
  if (!window.particlesJS) return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 52, density: { enable: true, value_area: 900 } },
      color: { value: ['#ec4899', '#06b6d4', '#a78bfa'] },
      shape: { type: 'circle' },
      opacity: { value: 0.32, random: true },
      size: { value: 2.2, random: true },
      line_linked: { enable: true, distance: 140, color: '#c084fc', opacity: 0.14, width: 1 },
      move: { enable: true, speed: 1.2, direction: 'none', random: true, out_mode: 'out' },
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 180, line_linked: { opacity: 0.25 } }, push: { particles_nb: 3 } },
    },
    retina_detect: true,
  });
}

function initTyped() {
  const el = document.getElementById('typed-out');
  if (!window.Typed || !el) return;
  new Typed(el, {
    strings: window.PORTFOLIO_DATA.heroTaglines,
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1800,
    loop: true,
    smartBackspace: true,
  });
}

function setupScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const scrolled = max <= 0 ? 0 : h.scrollTop / max;
    bar.style.width = (scrolled * 100).toFixed(2) + '%';
  });
}

let lastY = 0;
function setupNavScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 80) {
      header.classList.remove('-translate-y-[140%]');
    } else if (y > lastY) {
      header.classList.add('-translate-y-[140%]');
    } else {
      header.classList.remove('-translate-y-[140%]');
    }
    lastY = y;
  });
}

function setupNavActive() {
  const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = en.target.id;
          links.forEach((l) => l.classList.toggle('active', l.dataset.nav === id));
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}

function setupMobileNav() {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  let open = false;
  function setOpen(v) {
    open = v;
    btn.setAttribute('aria-expanded', open);
    btn.classList.toggle('open', open);
    menu.classList.toggle('opacity-0', !open);
    menu.classList.toggle('pointer-events-none', !open);
    menu.classList.toggle('translate-y-[-8px]', !open);
    menu.classList.toggle('translate-y-0', open);
  }
  btn.addEventListener('click', () => setOpen(!open));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

function setupMagnetic() {
  document.querySelectorAll('[data-magnetic]').forEach((wrap) => {
    const btn = wrap.querySelector('a, button') || wrap;
    wrap.addEventListener('mousemove', (e) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    wrap.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

function setupRipples() {
  document.querySelectorAll('.ripple').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const c = document.createElement('span');
      c.className = 'ripple-effect';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      c.style.width = c.style.height = size + 'px';
      c.style.left = e.clientX - rect.left - size / 2 + 'px';
      c.style.top = e.clientY - rect.top - size / 2 + 'px';
      btn.appendChild(c);
      setTimeout(() => c.remove(), 600);
    });
  });
}

function runCountUps() {
  const stats = window.PORTFOLIO_DATA.stats;
  const Ctor = window.countUp?.CountUp || window.CountUp;
  if (!Ctor) return;
  stats.forEach((s) => {
    const el = document.getElementById(s.id);
    if (!el) return;
    const opts = { duration: 2.2, suffix: s.suffix || '' };
    const cu = new Ctor(el, s.value, opts);
    if (!cu.error) cu.start();
  });
}

function setupStatsObserver() {
  const row = document.getElementById('statsRow');
  if (!row) return;
  let done = false;
  const io = new IntersectionObserver(
    (entries) => {
      if (done) return;
      if (entries.some((e) => e.isIntersecting)) {
        done = true;
        runCountUps();
        io.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  io.observe(row);
}

function setupSkillBarsObserver() {
  const rows = document.querySelectorAll('.skill-bar-fill');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    },
    { threshold: 0.2 }
  );
  rows.forEach((r) => io.observe(r));
}

function initSwiperInstance() {
  if (!window.Swiper) return;
  new Swiper('.project-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: { 480: { slidesPerView: 1.15 } },
  });
}

function whatsappHref() {
  const n = window.SITE_CONFIG.whatsappDigits.replace(/\D/g, '') || '923200071746';
  return 'https://wa.me/' + n;
}

function applySiteConfig() {
  document.getElementById('heroWhatsApp').href = whatsappHref();
  document.getElementById('contactWhatsApp').href = whatsappHref();
  document.getElementById('toEmailField').value = window.SITE_CONFIG.contactEmail;
}

function setupEmailForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  const btnLabel = document.getElementById('btnLabel');
  const cfg = window.SITE_CONFIG.emailJs;
  if (typeof emailjs !== 'undefined' && !cfg.publicKey.includes('YOUR_')) {
    emailjs.init({ publicKey: cfg.publicKey });
  }
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (cfg.publicKey.includes('YOUR_') || cfg.serviceId.includes('YOUR_') || cfg.templateId.includes('YOUR_')) {
      status.textContent =
        'Contact form needs EmailJS: set publicKey, serviceId, and templateId in js/data.js to send mail from this form.';
      status.className = 'text-sm text-amber-700';
      return;
    }
    btn.disabled = true;
    btnLabel.textContent = 'Sending...';
    try {
      await emailjs.sendForm(cfg.serviceId, cfg.templateId, form, cfg.publicKey);
      status.textContent = 'Message sent! I will get back to you soon.';
      status.className = 'text-sm text-emerald-700';
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = 'Failed to send. Check console / EmailJS template fields.';
      status.className = 'text-sm text-red-600';
    } finally {
      btn.disabled = false;
      btnLabel.textContent = 'Send Message';
    }
  });
}

function pageLoadAnimation() {
  const items = document.querySelectorAll('.hero-item');
  if (!window.gsap) {
    items.forEach((el) => el.classList.remove('opacity-0'));
    return;
  }
  gsap.timeline().from('.hero-item', { y: 40, opacity: 0, stagger: 0.12, duration: 0.85, ease: 'power3.out' }, 0.1);
}

function finishLoadingScreen() {
  const ls = document.getElementById('loadingScreen');
  const minDelay = new Promise((r) => setTimeout(r, 600));
  const loaded = new Promise((r) => window.addEventListener('load', r, { once: true }));
  Promise.all([loaded, minDelay]).then(() => {
    ls.classList.add('done');
    ls.setAttribute('aria-busy', 'false');
    pageLoadAnimation();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 80 });
  applySiteConfig();
  renderStats();
  renderSkillBars();
  renderProjects();
  renderTimeline();

  initParticles();
  initTyped();
  setupScrollProgress();
  setupNavScroll();
  setupNavActive();
  setupMobileNav();
  setupMagnetic();
  setupRipples();
  setupStatsObserver();
  setupSkillBarsObserver();
  setupEmailForm();
  initSwiperInstance();
  initTilt(document.querySelectorAll('.tilt-card'));

  finishLoadingScreen();

  if (window.gsap) {
    gsap.from('#siteHeader nav > *', { y: -24, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power2.out', delay: 0.05 });
  }
});
