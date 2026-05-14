    // Alpine root for nav hide & micro-state (optional placeholders)
    function app() {
      return {
        hiLabel: "Hi, I'm",
        mobNavHidden: false,
        defaultName: "Abdul Hannan",
        defaultSubtitle: "Backend Engineer",
      };
    }
    window.app = app;
    /** Fill basic DOM from DATA */
    function injectPersonal() {
      const p = portfolioData.personal;

      /** Nav brand textual override */
      const brandSpans = document.querySelectorAll('[x-text*="Abdul"]');
      /** NOTE: alpine x-text binds at runtime */

      /** Title & meta SEO */
      const titleTxt = `${p.name} · ${p.title}`;
      document.title = titleTxt;
      /** SEO description */
      const metaDesc =
        document.querySelector('meta[name="description"]') ||
        Object.assign(document.createElement("meta"), { name: "description" });
      metaDesc.setAttribute("content", `${p.title} — ${p.subtitle}`);
      if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

      /** Nav brand labels */
      const navName = document.getElementById("navBrandName");
      const navTitle = document.getElementById("navBrandTitle");
      if (navName) navName.textContent = p.name;
      if (navTitle) navTitle.textContent = p.title;

      /** Hi label */
      document.getElementById("hiLabelSpan").textContent = "Hi, I'm";

      /** Name */
      const heroNameEl = document.getElementById("heroName");
      if (heroNameEl) heroNameEl.textContent = p.name;

      /** Bio */
      document.getElementById("heroBio").textContent = p.subtitle;
      document.getElementById("aboutBio").innerHTML =
        `<span class=\"text-slate-200 font-medium\">Hey, I'm ${p.name}.</span>&nbsp;<span>${p.bio}</span>`;

      document.getElementById("ejHelp").textContent =
        "Submit opens your default mail app with a pre-filled draft. No APIs or secrets in the page — recipient is portfolioData.personal.email. Very long messages may hit browser mailto limits.";

      /** Footer Built */
      document.getElementById("footerBuiltCopy").textContent = `Built using this template • ${p.name}`;
      /** Year */
      const ySpan = document.getElementById("footerYear");
      if (ySpan) ySpan.textContent = "" + new Date().getFullYear();

      injectSocialRails();
      renderStats();
      renderAboutSkillBars();
      renderSkillsSection();
      renderProjects();
      renderExperience();
      renderContactCardsAndValidate();
    }

    function injectSocialRails() {
      const rail = document.getElementById("heroSocialRail");
      const mobile = document.getElementById("heroSocialInline");

      portfolioData.social.forEach((s) => {
        const anchor = `
          <a href="${escapeHTML(s.url)}" target="${s.url.includes("mailto") ? "_self" : "_blank"}"
             rel="${s.url.startsWith("mailto") ? "" : "noopener noreferrer"}"
             aria-label="${escapeHTML(s.label)}"
             class="group neon-border tilt-hover flex h-[46px] w-[46px] items-center justify-center rounded-2xl border border-[#FFFFFF16] hover:border-[#fff3] backdrop-blur glass text-xl text-[#cdd6ea] hover:text-[#fff]"
          >
             <span class="${s.icon.startsWith("fab") ? s.icon.replace("fab", "fab") + " group-hover:text-neon-purple" : s.icon + " group-hover:text-neon-cyan"}">${""}</span>
          </a>`;

        rail && (rail.innerHTML += anchor.replace(/fab fab/g,'fab'));
      });

      // Fix inner icon — rebuild properly
      if (rail) {
        rail.innerHTML = '';
        portfolioData.social.forEach((s) => {
          const link = document.createElement("a");
          link.href = s.url;
          link.target = s.url.includes("mailto") ? "_self" : "_blank";
          if (!s.url.startsWith("mailto")) link.rel = "noopener noreferrer";
          link.className =
            'group neon-border flex h-[46px] w-[46px] items-center justify-center rounded-2xl border border-[#FFFFFF16] hover:border-[#fff3] backdrop-blur glass text-xl text-[#cdd6ea] hover:text-white transition';
          const iEl = document.createElement("i");
          iEl.className = s.icon + " group-hover:text-neon-purple";
          link.appendChild(iEl);
          link.setAttribute("aria-label", s.label);
          link.setAttribute("data-aos", "fade-down");
          link.setAttribute("data-aos-delay", "230");
          link.setAttribute("data-aos-once", "true");
          rail.appendChild(link);
        });
      }

      if (mobile) {
        mobile.innerHTML = "";
        portfolioData.social.forEach((_, idx) => {
          const link = rail?.children[idx]?.cloneNode(true);
          if (link) mobile.appendChild(link);
        });
      }
      // Footer social duplicates
      const foot = document.getElementById("footerSocialWrap");
      if (foot) {
        foot.innerHTML = '';
        portfolioData.social.forEach((s) => {
          const a = document.createElement("a");
          a.href = s.url;
          a.target = s.url.includes("mailto") ? "_self" : "_blank";
          if (!s.url.startsWith("mailto")) a.rel = "noopener noreferrer";
          a.innerHTML = `<i class="${s.icon + " "} text-xl text-white/90 hover:text-neon-purple"></i>`;
          a.setAttribute("aria-label", s.label);
          a.className = "particle-line bg-white/[0.04] neon-border hover:bg-white/[0.10] hover:-translate-y-0.5 transition flex h-[44px] w-[44px] items-center rounded-full hover:shadow-xl justify-center backdrop-blur";
          foot.appendChild(a);
        });
      }
    }

    function escapeHTML(str) {
      return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");
    }

    function renderStats() {
      const holder = document.getElementById("statsCards");
      holder.innerHTML = portfolioData.stats
        .map(
          (
            s,
            i,
          ) => `
        <article class="neon-border tilt-card glass-strong rounded-2xl sm:rounded-3xl pb-8 sm:pb-12 pt-5 sm:pt-[23px] px-5 sm:px-7 flex flex-col items-center text-center tilt-card-stats min-w-0"
          >
          <div class="timeline-pulse particle-line relative mx-auto mb-6 flex items-center justify-center h-13 w-[52px] rounded-2xl border border-[#ffffff16] neon-border backdrop-blur">
            <span class="${i===0?'text-neon-lime':'text-neon-purple'} animate-pulse text-[22px]"><i class="fa-solid ${s.icon} drop-shadow-xl"></i></span>
          </div>
          <div class='font-display mb-px text-[clamp(37px,4vw,40px)] font-bold bg-gradient-to-b from-[#fff] via-[#c6dafa] text-transparent bg-clip-text tracking-wide'>
             <span class="tabular-nums" id="counterStat${i}">0</span>${s.suffix ?? ""}</div>
          <div class="text-[13px] text-slate-400 tracking-normal mt-[7px]" style="opacity:.915">${escapeHTML(s.label)}</div>
        </article>
      `,
        )
        .join("");
    }

    function topSixSkillsCombined() {
      const arr = [];
      Object.keys(portfolioData.skills).forEach((k) => portfolioData.skills[k].forEach((sk) => arr.push(sk)));
      return arr.sort((a, b) => b.level - a.level).slice(0, 6);
    }

    function renderAboutSkillBars() {
      const holder = document.getElementById("aboutSkillBars");
      const picks = topSixSkillsCombined();

      holder.innerHTML = picks
        .map(
          (
            skill,
          ) => `
        <article class=\"mb-[18px] group\">
           <header class=\"mb-2 mt-px flex flex-wrap gap-x-3 gap-y-1 items-center sm:gap-7\">
             <span class=\"text-[23px]\"><i class=\"${skill.icon} text-transparent bg-gradient-to-tr from-[#a855f7] to-[#06b6d4] [-webkit-background-clip:text]\"></i></span>
             <span class=\"font-semibold text-[17px]\">${skill.name} <span class=\"tabular-nums text-[14px] text-slate-400/95\">${skill.level}%</span></span>
           </header>
           <div class=\"h-5 rounded-xl bg-black/43 dark:bg-black/[0.38] neon-border backdrop-blur border border-[#FFFFFF10]\">
             <div class=\"particle-line neon-border tilt-card-skill-progress h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-xl transition-all duration-[1.42s]\" style=\"width:0%\"
                  aria-valuemax="${skill.level}">
             </div>
           </div>
        </article>
      `,
        )
        .join("");

      // Animate widths
      requestAnimationFrame(() => {
        holder.querySelectorAll(".tilt-card-skill-progress").forEach((el, idx) => {
          const level = picks[idx].level || 78;
          setTimeout(() => (el.style.width = level + "%"), 155 + idx * 60);
        });
      });
    }

    function renderSkillsSection() {
      const tabs = document.getElementById("skillTabsWrap");
      const grid = document.getElementById("skillCardsGrid");
      /** categories */
      const categories = Object.keys(portfolioData.skills);
      const tabSlug = {};

      tabs.innerHTML = categories
        .map((catRaw, ti) => {
          const slug = catRaw.replace(/\s+/g, "").toLowerCase();
          tabSlug[slug] = catRaw;
          return `<button role="tab" type="button" data-skilltab="${slug}" class="rounded-full neo-tab px-3 py-2 sm:px-[17px] sm:py-[11px] text-[11px] sm:text-[12px] lg:text-[14px] capitalize border border-[#ffffff07] neon-border backdrop-blur font-semibold text-slate-300 opacity-93 tracking-wide transition max-w-full">${catRaw}</button>`;
        })
        .join("");

      const paintGrid = (cat) => {
        const key = catsMap(cat);
        const list = portfolioData.skills[key] || [];
        grid.innerHTML =
          "" +
          list
            .map(
              (
                sk,
              ) => `
        <article class="tilt-card glass neon-border neon-border-rounded rounded-[22px] p-10 flex flex-col items-center tilt-card-effect group/sk">
          <div class="particle-line relative flex h-[57px] w-[57px] items-center rounded-2xl border border-[#fff2] neon-border backdrop-blur justify-center mx-auto mb-7 group-hover/sk:shadow-xl">
           <span class="text-transparent bg-gradient-to-tr from-[#a855f7] to-[#06b6d4] [-webkit-background-clip:text]"
                 style="${sk.icon}">
              </span>
               <span class="" style="">
                ${""}
               </span>
          </div>
          <span class="mt-2 flex items-center mb-px font-semibold text-[17px]" style="">${sk.name}<span aria-hidden="" class="" style=""> </span></span>
          <!-- progress -->
          <div class="particle-line h-10 w-[90%] max-w-none rounded-full bg-transparent border border-transparent mt-auto flex items-center neon-border neon-border-soft">
               <span class="-mt-4 text-[17px]" style="">${""}</span>
          </div>
        </article>
      `,
            )
            .join("");
        /** Rewrite cards properly */
        grid.innerHTML = "";

        /** Clean render */
        list.forEach((sk) => {
          const art = document.createElement("article");
          art.className =
            "tilt-card glass neon-border rounded-[26px] p-11 flex flex-col items-center hover:shadow-xl transition neon-border-soft group/sk";
          const iconCircle = document.createElement("span");
          iconCircle.className =
            "particle-line neon-border backdrop-blur border border-[#fff2] h-[72px] w-[72px] mb-11 flex rounded-2xl items-center justify-center text-[33px]";
          iconCircle.innerHTML = `<span class="${sk.icon.replace("fas", "fas")} [-webkit-background-clip:text]"
          style=""> </span>`;
          /** icon color */
          const fa = iconCircle.firstElementChild;
          fa.innerHTML = "";
          fa.className = `${sk.icon} [-webkit-background-clip:text]`;

          iconCircle.children[0].className =
            sk.icon +
            ` text-transparent bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#06b6d4] bg-clip-text`;
          iconCircle.children[0].style.webkitBackgroundClip = "text";
          art.appendChild(iconCircle.cloneNode(false));
          iconCircle.childNodes.forEach(() => {});
        });
      };

      const catsMap = (slugOrKey) => {
        /** returns object key matching skills */
        if (portfolioData.skills[slugOrKey]) return slugOrKey;
        const lc = slugOrKey.toLowerCase().replace(/\s+/g, "");
        for (const k of Object.keys(portfolioData.skills)) {
          if (k.replace(/\s+/g, "").toLowerCase() === lc) return k;
        }
        return slugOrKey;
      };

      const paintSkills = (slug) => {
        const key = catsMap(slug);
        const list = portfolioData.skills[key] || [];
        grid.innerHTML = "";
        list.forEach((sk, idxSk) => {
          const wrap = document.createElement("article");
          wrap.dataset.aosDelay = `${idxSk * 50}`;
          wrap.dataset.aos = `fade-up`;
          wrap.dataset.aosDuration = ``;
          wrap.className =
            "tilt-card glass neon-border rounded-[22px] sm:rounded-[26px] p-5 sm:p-8 lg:p-[44px_28px_32px_28px] flex flex-col items-center transition-all duration-450 hover:border-neon-purple/60 neon-border-soft min-w-0";
          const badge = `<div class=\"flex h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] items-center mx-auto neon-border neon-border-strong mb-7 sm:mb-11 justify-center particle-line rounded-[18px] sm:rounded-[22px] border border-[#fff2]/20 backdrop-blur-[8px]\"><i class=\"${sk.icon} text-[34px] sm:text-[43px]\"></i></div>`;
          wrap.innerHTML = `
            ${badge}
            <h4 class=\"font-semibold text-[17px] sm:text-[21px] text-center leading-snug\">${escapeHTML(sk.name)}</h4>
            <div class=\"particle-line neon-border-soft !mt-13 h-[9px] w-full bg-[rgba(255,255,255,0.04)] neon-border-strong rounded-xl overflow-hidden\">
              <div class=\"skills-bar-particle h-[9px] bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan neon-border-strong rounded-xl\" style=\"width: ${sk.level}%\"></div>
            </div>
            <p class=\"text-[17px] text-slate-300 tracking-wide\"><span>${sk.level}</span><span>%</span></p>
          `;
          grid.appendChild(wrap);

          wrap.querySelector("i:first-of-type").classList.add(
            "text-transparent",
            "bg-gradient-to-br",
            "from-[#a855f7]",
            "to-[#06b6d4]",
          );
          wrap.querySelector("i:first-of-type").style.webkitBackgroundClip = "text";
          wrap.querySelector("i:first-of-type").style.backgroundClip = "text";
        });

        if (typeof VanillaTilt !== "undefined" && window.matchMedia("(min-width: 768px) and (hover: hover)").matches) {
          VanillaTilt.init(grid.querySelectorAll(".tilt-card"), { glare: true, scale: "1.04", gyroscope: false, max: 27 });
        }
      };

      const firstSlug = catsMap(categories[0]).replace(/\s+/g, "").toLowerCase();
      tabs.querySelectorAll('[data-skilltab]').forEach((btn, idn) => {
        btn.onclick = () => {
          tabs.querySelectorAll('[data-skilltab]').forEach((b) => {
            b.classList.remove("neo-tab-active", "bg-[linear-gradient(110deg,#a855f766,#06b6d455)]");
            b.classList.add("opacity-[0.71]", "scale-[0.99]", "hover:brightness-115");
          });
          btn.classList.add(
            "neo-tab-active",
            "!bg-[linear-gradient(117deg,#a855f799,#ec489964,#06b6d433)]",
            "scale-[1.08]",
            "font-bold",
            "text-white",
            "neon-border-strong",
          );
          btn.classList.remove("opacity-[0.71]", "scale-[0.99]", "opacity-71");
          paintSkills(btn.getAttribute('data-skilltab'));
          if (typeof AOS !== "undefined") AOS.refreshHard();
        };
        if (!idn) setTimeout(btn.onclick, 0);
      });

      tabs.querySelector('button:first-child')?.classList?.add(
        "!bg-[linear-gradient(117deg,#a855f755,#06b6d433)]",
        "neo-tab-active",
      );

      tabs.querySelector('button:last-child'); /** noop anchor */
    }
    function renderProjects() {
      const wrap = document.getElementById("projectSwipeWrapper");
      if (!wrap) return;
      wrap.innerHTML = "";

      portfolioData.projects.forEach((pj) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide !h-auto p-3 sm:p-4";
        slide.innerHTML = `
          <article data-tilt data-tilt-max="18" data-tilt-glare="true" data-tilt-scale="1.02"
            class="tilt-card project-card neon-border glass group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-purple-950/35 touch-manipulation">
            <div class="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950/55">
              <img src="${escapeHTML(pj.image)}" alt="${escapeHTML(pj.imageAlt)}"
                   class="h-full w-full object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.05]"
                   loading="lazy" draggable="false" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transition duration-[0.52s] group-hover:opacity-100"></div>
              <div class="pointer-events-none absolute inset-x-4 bottom-4 flex opacity-0 transition duration-[0.55s] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 translate-y-3">
                <button type="button" data-modal-open="${pj.id}"
                  class="neon-border pointer-events-auto flex flex-1 items-center justify-center rounded-2xl glass-strong px-6 py-[12px] font-display text-xs font-semibold uppercase tracking-[0.19em] text-white hover:bg-white/10">
                  View Details
                </button>
              </div>
            </div>
            <div class="flex flex-1 min-w-0 flex-col gap-4 sm:gap-[18px] p-4 sm:p-6 md:p-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="rounded-full px-5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-cyan neon-border bg-white/[4%]">
                  ${escapeHTML(pj.category)}
                </span>
                <span class="text-[12px] tracking-wide text-slate-400">${pj.year ?? ""}</span>
              </div>
              <h3 class="font-display text-xl font-semibold tracking-tight text-slate-100">${escapeHTML(pj.title)}</h3>
              <p class="text-[15px] leading-relaxed text-slate-300">${escapeHTML(pj.description)}</p>
              <div class="flex flex-wrap gap-2">
                ${pj.technologies
                  .slice(0, 12)
                  .map(
                    (t) =>
                      `<span class="rounded-xl border border-white/10 bg-white/[4%] px-3 py-1 text-[12px] text-slate-200">${escapeHTML(t)}</span>`,
                  )
                  .join("")}
              </div>
              <div class="mt-auto flex flex-wrap gap-3 pt-1">
                ${
                  pj.github
                    ? `<a href="${escapeHTML(pj.github)}" target="_blank" rel="noopener noreferrer"
                          class="neon-border inline-flex min-w-[118px] flex-1 items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"><i class="fa-brands fa-github text-lg"></i>GitHub</a>`
                    : ""
                }
                <button type="button" data-modal-open="${pj.id}"
                  class="neon-border inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">Details</button>
              </div>
            </div>
          </article>`;
        wrap.appendChild(slide);
      });

      bindProjectModal();

      if (window.__portfolioSwiper && typeof window.__portfolioSwiper.destroy === "function") {
        window.__portfolioSwiper.destroy(true, true);
      }

      if (typeof Swiper !== "undefined") {
        window.__portfolioSwiper = new Swiper(".project-swiper", {
          slidesPerView: 1,
          spaceBetween: 12,
          loop: portfolioData.projects.length > 2,
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          grabCursor: true,
          breakpoints: {
            480: { spaceBetween: 16 },
            768: { slidesPerView: 1.65, spaceBetween: 20, centeredSlides: false },
            1280: {
              slidesPerView: portfolioData.projects.length >= 3 ? 3 : portfolioData.projects.length,
              centeredSlides: false,
            },
          },
        });
      }

      typeof VanillaTilt !== "undefined" &&
        window.matchMedia("(min-width: 768px) and (hover: hover)").matches &&
        VanillaTilt.init(wrap.querySelectorAll(".project-card"), {
          glare: true,
          max: 22,
          scale: 1.02,
          gyroscope: false,
        });
    }

    function projectById(id) {
      return portfolioData.projects.find((x) => String(x.id) === String(id));
    }

    function bindProjectModal() {
      document.querySelectorAll("[data-modal-open]").forEach((btn) => {
        btn.addEventListener("click", () => openProjectModal(btn.getAttribute("data-modal-open")));
      });
    }

    function renderProjectGalleryHtml(pj) {
      const items = pj.gallery;
      if (!Array.isArray(items) || !items.length) return "";
      const cells = items
        .map((g, i) => {
          const src = typeof g === "string" ? g : g.src;
          const alt = `${pj.title} — screenshot ${i + 1}`;
          return `<figure class="overflow-hidden rounded-xl neon-border bg-slate-900/40">
            <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" title="Open carousel" class="w-full max-h-[min(320px,42vh)] cursor-pointer object-cover object-top transition hover:opacity-95" loading="lazy" draggable="false" />
          </figure>`;
        })
        .join("");
      const overview =
        pj.galleryOverview && String(pj.galleryOverview).trim()
          ? `<p class="mb-4 text-[14px] leading-relaxed text-slate-300">${escapeHTML(pj.galleryOverview.trim())}</p>`
          : "";
      return `<div class="mt-8">
        <h4 class="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-neon-purple/90">Screenshots</h4>
        ${overview}
        <p class="mb-4 text-[11px] leading-snug text-slate-500">Click any image for full size and slide through the gallery (arrows or swipe).</p>
        <div class="grid max-h-[min(62vh,720px)] gap-4 overflow-y-auto pr-1 sm:grid-cols-2">${cells}</div>
      </div>`;
    }

    function openProjectModal(id) {
      const pj = projectById(id);
      const backdrop = document.getElementById("projectModalBackdrop");
      const pane = document.getElementById("projectModal");
      const content = document.getElementById("modalContent");
      if (!pj || !backdrop || !pane || !content) return;

      window.__portfolioLightboxItems = buildPortfolioLightboxSlides(pj);
      window.__portfolioLightboxIndex = 0;

      document.body.style.overflow = "hidden";
      content.innerHTML = `
        <h3 id="modalTitleRef" class="font-display pr-14 text-2xl font-bold leading-tight">${escapeHTML(pj.title)}</h3>
        <div class="overflow-hidden rounded-2xl neon-border bg-slate-900/55">
          <img src="${escapeHTML(pj.image)}" alt="${escapeHTML(pj.imageAlt)}" title="Open carousel"
               class="aspect-video w-full cursor-pointer object-cover transition hover:opacity-95" draggable="false" />
        </div>
        <p class="leading-relaxed text-slate-300">${escapeHTML(pj.longDescription || pj.description)}</p>
        <div>
          <h4 class="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-neon-purple/90">Highlights</h4>
          <ul class="list-none space-y-2 text-[15px] text-slate-200">
            ${(pj.features || [])
              .map(
                (f) =>
                  `<li class="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br before:from-neon-lime before:to-neon-cyan">${escapeHTML(f)}</li>`,
              )
              .join("")}
          </ul>
        </div>
        ${renderProjectGalleryHtml(pj)}
        <div class="flex flex-wrap gap-2">
          ${pj.technologies
            .map((t) => `<span class="rounded-xl border border-white/12 px-[14px] py-[6px] text-[13px] text-slate-200">${escapeHTML(t)}</span>`)
            .join("")}
        </div>
        <div class="flex flex-wrap gap-3 pt-5">
          ${
            pj.github
              ? `<a href="${escapeHTML(pj.github)}" target="_blank" rel="noopener noreferrer"
                    class="neon-border inline-flex items-center gap-2 rounded-full bg-white/12 px-6 py-[10px] text-sm font-semibold hover:bg-white/18"><i class="fa-brands fa-github"></i> Repo</a>`
              : ""
          }
        </div>`;

      backdrop.classList.remove("opacity-0", "pointer-events-none");
      backdrop.classList.add("opacity-100", "pointer-events-auto");
      pane.classList.remove(
        "translate-y-6",
        "translate-x-0",
        "md:translate-y-0",
        "md:translate-x-24",
        "scale-[0.965]",
        "opacity-95",
      );
      pane.classList.add("translate-x-0", "translate-y-0", "scale-100", "opacity-100");
      backdrop.setAttribute("aria-hidden", "false");
      pane.setAttribute("aria-hidden", "false");
    }

    function closeProjectModal() {
      const backdrop = document.getElementById("projectModalBackdrop");
      const pane = document.getElementById("projectModal");
      if (!backdrop || !pane) return;
      /** Remove open-state utilities or Tailwind can keep e.g. opacity-100 winning over opacity-0 */
      backdrop.classList.remove("opacity-100", "pointer-events-auto");
      backdrop.classList.add("opacity-0", "pointer-events-none");
      pane.classList.remove("translate-x-0", "translate-y-0", "scale-100", "opacity-100");
      pane.classList.add(
        "translate-y-6",
        "translate-x-0",
        "md:translate-y-0",
        "md:translate-x-24",
        "scale-[0.965]",
        "opacity-95",
      );
      backdrop.setAttribute("aria-hidden", "true");
      pane.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      screenshotLightboxClose();
      setTimeout(() => {
        const c = document.getElementById("modalContent");
        if (c) c.innerHTML = "";
      }, 300);
    }

    function renderExperience() {
      const root = document.getElementById("timelineRoot");
      if (!root) return;

      root.innerHTML = portfolioData.experience
        .map(
          (job, idx) => `
        <article class="relative pb-14" ${idx % 2 === 0 ? `data-aos="fade-left"` : `data-aos="fade-right"`} data-aos-duration="740" data-aos-once="true">
          <span class="absolute left-[2px] top-10 z-[30] h-3 w-3 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-neon-cyan shadow-[0_0_26px_rgba(168,85,247,.72)] sm:left-[-76px] sm:top-[32px] sm:h-[15px] sm:w-[15px] sm:border sm:border-purple-400/55 sm:bg-[radial-gradient(circle,#a855f794_0,#06b6d499_139%)]"></span>
          <div class="neon-border glass-strong tilt-card-exp relative ml-0 max-w-none sm:max-w-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 sm:ml-[6px] sm:inline-block shadow-2xl shadow-black/60 ${idx % 2 ? "sm:ml-auto sm:mr-2 sm:-translate-x-[10%]" : ""}">
            <header class="space-y-[3px]">
              <p class="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent">${escapeHTML(job.role)}</p>
              <p class="text-lg font-semibold text-slate-100">${escapeHTML(job.company)}</p>
              <p class="text-[15px] text-slate-400">${escapeHTML(job.location)} · ${escapeHTML(job.duration)}</p>
              <p class="text-[14px] text-slate-500">${escapeHTML(job.startDate)} — ${escapeHTML(job.endDate)}</p>
            </header>
            <ul class="mt-8 space-y-2 text-[15px] leading-relaxed">
              ${(job.highlights || []).map((h) => `<li class="relative pl-5 text-slate-200"><span class="absolute left-0 top-[9px] h-[6px] w-[6px] rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan"></span>${escapeHTML(h)}</li>`).join("")}
            </ul>
          </div>
        </article>`,
        )
        .join("");

      typeof AOS !== "undefined" && AOS.refresh();

      typeof VanillaTilt !== "undefined" &&
        window.matchMedia("(min-width: 768px) and (hover: hover)").matches &&
        VanillaTilt.init(root.querySelectorAll(".tilt-card-exp"), {
          glare: true,
          max: 14,
          scale: 1.015,
          gyroscope: false,
        });
    }

    function renderContactCardsAndValidate() {
      const holder = document.getElementById("contactCards");
      const form = document.getElementById("contactForm");
      if (!holder || !form) return;

      const p = portfolioData.personal;
      const waNumber = String(p.whatsapp || "").replace(/\D+/g, "");
      const waLink =
        portfolioData.social.find((s) => s.label.toLowerCase() === "whatsapp")?.url || (waNumber ? `https://wa.me/${waNumber}` : "#");

      const rows = [
        {
          icon: "fa-regular fa-envelope text-neon-cyan text-xl",
          href: `mailto:${p.email}`,
          title: "Email",
          subtitle: p.email,
          tag: "Inbox",
          target: "_self",
        },
        {
          icon: "fa-brands fa-whatsapp text-emerald-400 text-xl",
          href: waLink,
          title: "WhatsApp",
          subtitle: p.whatsapp || "+92…",
          tag: "Chat",
          target: "_blank",
        },
        {
          icon: "fa-brands fa-linkedin text-[#93c5fd] text-xl",
          href: p.linkedin,
          title: "LinkedIn",
          subtitle: "Professional profile",
          tag: "Network",
          target: "_blank",
        },
        {
          icon: "fa-brands fa-github text-slate-200 text-xl",
          href: p.github,
          title: "GitHub",
          subtitle: "Code & repositories",
          tag: "Code",
          target: "_blank",
        },
      ];

      holder.innerHTML = rows
        .map(
          (r) => `
        <a href="${escapeHTML(r.href)}" target="${r.target}" ${r.target !== "_self" ? `rel="noopener noreferrer"` : ""}
           class="glass neon-border group flex items-start gap-3 sm:gap-[18px] rounded-2xl sm:rounded-3xl px-4 py-4 sm:px-8 sm:py-5 transition hover:bg-white/[0.05] min-w-0">
           <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFFFFF16] neon-border bg-white/[5%]">
             <i class="${r.icon}"></i>
           </span>
           <span class="flex min-w-0 flex-1 flex-col gap-[2px]">
             <span class="text-[11px] font-semibold uppercase tracking-[0.22em] text-neon-cyan">${escapeHTML(r.tag)}</span>
             <strong class="truncate font-display text-lg font-semibold tracking-tighter text-white">${escapeHTML(r.title)}</strong>
             <span class="truncate text-[14px] text-slate-400">${escapeHTML(r.subtitle)}</span>
           </span>
           <span class="shrink-0 text-slate-500">
             <i class="fa-solid fa-arrow-up-right-from-square mt-1 opacity-65 group-hover:opacity-100"></i>
           </span>
        </a>`,
        )
        .join("");

      form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const name = document.getElementById("fldName").value.trim();
        const mail = document.getElementById("fldMail").value.trim();
        const type = document.getElementById("fldType").value;
        const message = document.getElementById("fldMsg").value.trim();
        const btn = /** @type {HTMLButtonElement} */ (document.getElementById("senderBtn"));
        const recipient = (portfolioData.personal.email || "").trim();

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
        const recipientOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient);
        if (!name.length || !type.length || message.length < 10 || !emailOk) {
          setFormStatus("Please complete all fields and include a message (10+ characters).", "warn");
          return;
        }
        if (!recipientOk) {
          setFormStatus("Add a valid recipient address in portfolioData.personal.email.", "err");
          return;
        }

        const subject = encodeURIComponent(`[Portfolio] ${type} — ${name}`);
        const body = encodeURIComponent(
          ["Name: " + name, "Reply-To: " + mail, "Project type: " + type, "", message].join("\n"),
        );
        const mailtoHref = `mailto:${recipient}?subject=${subject}&body=${body}`;

        if (mailtoHref.length > 2048) {
          setFormStatus("That message is long for a mail link — shorten it or paste into a blank email.", "warn");
          return;
        }

        btn.setAttribute("aria-busy", "true");
        setFormStatus("Opening your mail app…", "muted");
        window.location.href = mailtoHref;

        btn.removeAttribute("aria-busy");
        setFormStatus("If nothing opened, send manually to " + recipient + ".", "ok");
      });
    }

    function setFormStatus(text, tier) {
      const el = document.getElementById("formStatus");
      if (!el) return;
      el.textContent = text;
      el.className =
        tier === "ok"
          ? "text-[14px] text-center text-emerald-400"
          : tier === "muted"
          ? "text-[14px] text-center text-slate-500 animate-pulse"
          : tier === "err"
          ? "text-[14px] text-center text-red-400"
          : "text-[14px] text-center text-amber-200";
    }

    function initParticlesHero() {
      if (typeof particlesJS === "undefined") return;
      const narrow = window.matchMedia("(max-width: 639px)").matches;
      particlesJS("particles-js", {
        particles: {
          number: { value: narrow ? 28 : 64, density: { enable: true, value_area: narrow ? 1100 : 720 } },
          color: { value: "#a855f7" },
          shape: { type: "circle" },
          opacity: { value: narrow ? 0.38 : 0.45, random: true },
          size: { value: narrow ? 2 : 2.2, random: true },
          line_linked: {
            enable: true,
            distance: narrow ? 110 : 150,
            color: "#06b6d4",
            opacity: narrow ? 0.16 : 0.22,
            width: 1,
          },
          move: {
            enable: true,
            speed: narrow ? 0.75 : 1.1,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: false },
            resize: true,
          },
          modes: { repulse: { distance: 90, duration: 0.4 } },
        },
        retina_detect: true,
      });
    }

    function initTypedSubtitle() {
      const el = document.getElementById("typedOutput");
      if (!el || typeof Typed === "undefined") return;
      window.__portfolioTyped?.destroy?.();
      window.__portfolioTyped = new Typed(el, {
        strings: portfolioData.typedTexts,
        typeSpeed: 46,
        backSpeed: 32,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
      });
    }

    function initCustomCursor() {
      const dot = document.getElementById("cursor-dot");
      const ring = document.getElementById("cursor-ring");
      if (!dot || !ring) return;
      if (window.matchMedia("(max-width: 768px), (pointer: coarse)").matches) {
        dot.classList.add("hidden");
        ring.classList.add("hidden");
        return;
      }
      window.addEventListener(
        "pointermove",
        (e) => {
          dot.style.left = `${e.clientX}px`;
          dot.style.top = `${e.clientY}px`;
          ring.style.left = `${e.clientX}px`;
          ring.style.top = `${e.clientY}px`;
        },
        { passive: true },
      );
    }

    function initScrollProgress() {
      const bar = document.getElementById("scrollProgress");
      if (!bar) return;
      const update = () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
        bar.style.width = `${pct}%`;
      };
      window.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
      update();
    }

    function initNavScrollHide() {
      const nav = document.getElementById("siteNav");
      if (!nav) return;
      let last = window.scrollY || 0;
      window.addEventListener(
        "scroll",
        () => {
          const y = window.scrollY;
          if (y < 88) {
            nav.style.transform = "translateY(0)";
            last = y;
            return;
          }
          if (y > last + 8) nav.style.transform = "translateY(-120%)";
          else if (y < last - 8) nav.style.transform = "translateY(0)";
          last = y;
        },
        { passive: true },
      );
    }

    function initActiveNavSections() {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const sec = visible.target.getAttribute("data-section-marker");
          if (!sec) return;

          document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("nav-link-active"));
          document.querySelectorAll(`.nav-link[data-section="${sec}"]`).forEach((l) => l.classList.add("nav-link-active"));
        },
        { threshold: [0.2, 0.45], rootMargin: "-18% 0px -58% 0px" },
      );

      document.querySelectorAll("[data-section-marker]").forEach((s) => observer.observe(s));
    }

    function bindSmoothScroll() {
      document.querySelectorAll("[data-smooth-scroll]").forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || href.charAt(0) !== "#") return;
        const id = href.slice(1);
        a.addEventListener("click", (e) => {
          const tgt = document.getElementById(id);
          if (!tgt) return;
          e.preventDefault();
          tgt.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
        });
      });
    }

    function portfolioLightboxUrlKey(u) {
      try {
        return decodeURIComponent(new URL(u, window.location.href).pathname);
      } catch {
        return String(u || "");
      }
    }

    function buildPortfolioLightboxSlides(pj) {
      const slides = [];
      const seen = new Set();
      const add = (src, alt) => {
        if (!src) return;
        const key = portfolioLightboxUrlKey(src);
        if (seen.has(key)) return;
        seen.add(key);
        slides.push({ src, alt: alt || "Screenshot" });
      };
      if (pj.image) add(pj.image, pj.imageAlt || pj.title);
      if (Array.isArray(pj.gallery)) {
        pj.gallery.forEach((g, i) => {
          const src = typeof g === "string" ? g : g.src;
          const alt =
            typeof g === "string"
              ? `${pj.title} — screenshot ${i + 1}`
              : (g.caption || pj.imageAlt || pj.title);
          add(src, alt);
        });
      }
      return slides;
    }

    function screenshotLightboxRender() {
      const items = window.__portfolioLightboxItems;
      const lb = document.getElementById("screenshotLightbox");
      const img = document.getElementById("screenshotLightboxImg");
      const counter = document.getElementById("screenshotLightboxCounter");
      const prev = document.getElementById("screenshotLightboxPrev");
      const next = document.getElementById("screenshotLightboxNext");
      if (!items || !items.length || !lb || !img) return;
      let idx = window.__portfolioLightboxIndex | 0;
      if (idx < 0) idx = 0;
      if (idx >= items.length) idx = items.length - 1;
      window.__portfolioLightboxIndex = idx;
      const cur = items[idx];
      img.src = cur.src;
      img.alt = cur.alt;
      if (counter) counter.textContent = items.length > 1 ? `${idx + 1} / ${items.length}` : "";
      const multi = items.length > 1;
      if (prev) {
        prev.classList.toggle("hidden", !multi);
        prev.classList.toggle("flex", multi);
      }
      if (next) {
        next.classList.toggle("hidden", !multi);
        next.classList.toggle("flex", multi);
      }
    }

    function screenshotLightboxShow() {
      const lb = document.getElementById("screenshotLightbox");
      if (!lb) return;
      lb.classList.remove("opacity-0", "pointer-events-none");
      lb.classList.add("opacity-100", "pointer-events-auto");
      lb.setAttribute("aria-hidden", "false");
    }

    function screenshotLightboxOpenAtSlide(clickedSrc) {
      const items = window.__portfolioLightboxItems;
      const lb = document.getElementById("screenshotLightbox");
      if (!lb || !items || !items.length) return;
      const key = portfolioLightboxUrlKey(clickedSrc);
      let idx = items.findIndex((s) => portfolioLightboxUrlKey(s.src) === key);
      if (idx < 0) idx = 0;
      window.__portfolioLightboxIndex = idx;
      screenshotLightboxRender();
      screenshotLightboxShow();
    }

    function screenshotLightboxStep(delta) {
      const items = window.__portfolioLightboxItems;
      if (!items || !items.length) return;
      const n = items.length;
      window.__portfolioLightboxIndex = ((window.__portfolioLightboxIndex + delta) % n + n) % n;
      screenshotLightboxRender();
    }

    function screenshotLightboxClose() {
      const lb = document.getElementById("screenshotLightbox");
      const img = document.getElementById("screenshotLightboxImg");
      const counter = document.getElementById("screenshotLightboxCounter");
      if (!lb) return;
      lb.classList.remove("opacity-100", "pointer-events-auto");
      lb.classList.add("opacity-0", "pointer-events-none");
      lb.setAttribute("aria-hidden", "true");
      window.__portfolioLightboxItems = [];
      window.__portfolioLightboxIndex = 0;
      if (img) {
        img.src = "";
        img.alt = "";
      }
      if (counter) counter.textContent = "";
    }

    function bindScreenshotLightbox() {
      const lb = document.getElementById("screenshotLightbox");
      const closeBtn = document.getElementById("screenshotLightboxClose");
      const prev = document.getElementById("screenshotLightboxPrev");
      const next = document.getElementById("screenshotLightboxNext");
      const big = document.getElementById("screenshotLightboxImg");
      if (!lb || !closeBtn || !big) return;

      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        screenshotLightboxClose();
      });

      prev?.addEventListener("click", (e) => {
        e.stopPropagation();
        screenshotLightboxStep(-1);
      });
      next?.addEventListener("click", (e) => {
        e.stopPropagation();
        screenshotLightboxStep(1);
      });

      lb.addEventListener("click", (e) => {
        if (!lb.classList.contains("opacity-100")) return;
        const t = e.target;
        if (t === big) return;
        if (t.closest && t.closest("#screenshotLightboxPrev, #screenshotLightboxNext, #screenshotLightboxClose")) return;
        screenshotLightboxClose();
      });

      let touchStartX = null;
      lb.addEventListener(
        "touchstart",
        (e) => {
          if (!lb.classList.contains("opacity-100")) return;
          const t = e.touches && e.touches[0];
          touchStartX = t ? t.clientX : null;
        },
        { passive: true },
      );
      lb.addEventListener(
        "touchend",
        (e) => {
          if (touchStartX == null || !lb.classList.contains("opacity-100")) return;
          const dx = e.changedTouches[0].clientX - touchStartX;
          touchStartX = null;
          if (Math.abs(dx) < 48) return;
          if (dx < 0) screenshotLightboxStep(1);
          else screenshotLightboxStep(-1);
        },
        { passive: true },
      );

      const modalContent = document.getElementById("modalContent");
      if (modalContent) {
        let tap = null;

        const projectModalIsOpen = () => {
          const bd = document.getElementById("projectModalBackdrop");
          return !!(bd && bd.classList.contains("pointer-events-auto"));
        };

        const imgFromEvent = (ev) => {
          const n = ev.target;
          if (!n || typeof n.closest !== "function") return null;
          const img = n.closest("img");
          return img && modalContent.contains(img) ? img : null;
        };

        modalContent.addEventListener("pointerdown", (e) => {
          if (!projectModalIsOpen()) {
            tap = null;
            return;
          }
          if (e.pointerType === "mouse" && e.button !== 0) return;
          const img = imgFromEvent(e);
          tap = img ? { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), img } : null;
        });

        modalContent.addEventListener("pointerup", (e) => {
          if (!tap || e.pointerId !== tap.id) return;
          if (!projectModalIsOpen()) {
            tap = null;
            return;
          }
          const img = imgFromEvent(e);
          if (img !== tap.img) {
            tap = null;
            return;
          }
          const dx = e.clientX - tap.x;
          const dy = e.clientY - tap.y;
          const dt = performance.now() - tap.t;
          tap = null;
          if (dt > 900 || Math.abs(dx) > 24 || Math.abs(dy) > 24) return;
          const src = img.currentSrc || img.src;
          if (src) screenshotLightboxOpenAtSlide(src);
        });

        modalContent.addEventListener("pointercancel", () => {
          tap = null;
        });
      }

      document.addEventListener("click", (e) => {
        if (!window.PointerEvent) {
          const t = e.target;
          if (!t || typeof t.closest !== "function") return;
          const img = t.closest("img");
          if (!img) return;
          const mc = document.getElementById("modalContent");
          if (!mc || !mc.contains(img)) return;
          const bd = document.getElementById("projectModalBackdrop");
          if (!bd || !bd.classList.contains("pointer-events-auto")) return;
          const src = img.currentSrc || img.src;
          if (src) screenshotLightboxOpenAtSlide(src);
        }
      });
    }

    function bindModalCloseAndBackdrop() {
      const backdrop = document.getElementById("projectModalBackdrop");
      document.getElementById("modalCloseBtn")?.addEventListener("click", closeProjectModal);
      backdrop?.addEventListener("click", (e) => {
        if (e.target === backdrop) closeProjectModal();
      });
      window.addEventListener("keydown", (e) => {
        const lb = document.getElementById("screenshotLightbox");
        const lbOpen = lb && lb.classList.contains("opacity-100");
        if (lbOpen && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
          e.preventDefault();
          screenshotLightboxStep(e.key === "ArrowLeft" ? -1 : 1);
          return;
        }
        if (e.key !== "Escape") return;
        if (lbOpen) {
          screenshotLightboxClose();
          return;
        }
        const b = document.getElementById("projectModalBackdrop");
        if (!b || !b.classList.contains("opacity-100")) return;
        closeProjectModal();
      });
    }

    function observeStatsCounters() {
      const statsBox = document.getElementById("statsCards");
      if (!statsBox) return;
      /** CountUp CDN UMD exports constructor on window.CountUp */
      const CU = typeof CountUp !== "undefined" ? (CountUp.CountUp || CountUp) : null;

      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;

            portfolioData.stats.forEach((s, i) => {
              const el = document.getElementById(`counterStat${i}`);
              if (!el) return;
              if (!CU || typeof CU !== "function") {
                el.textContent = String(s.number) + (s.suffix || "");

                /** */
              } else {
                try {
                  new CU(el, s.number, { duration: 2.25, suffix: s.suffix || "", useEasing: true }).start();
                } catch (_err) {
                  el.textContent = String(s.number) + (s.suffix || "");
                }
              }
            });
            obs.disconnect();
          });
        },
        { threshold: 0.35 },

      );


      io.observe(statsBox);



    }




    function initStatsTilt() {
      typeof VanillaTilt !== "undefined" &&
        window.matchMedia("(min-width: 768px) and (hover: hover)").matches &&
        VanillaTilt.init(document.querySelectorAll("#statsCards .tilt-card-stats"), {
          glare: true,
          max: 18,
          scale: 1.03,
          gyroscope: false,
        });
    }

    function initHeroGsap() {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      const hero = document.getElementById("home");
      if (!hero) return;
      gsap.from("#heroTitle, #heroBio, #heroKicker", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.to(".floating-blob", {
        y: "-=42",
        rotation: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    /** Alpine-root bootstrap */
    window.initApp = function initApp() {
      if (window.__portfolioInitialized) return;
      window.__portfolioInitialized = true;

      injectPersonal();

      bindSmoothScroll();
      bindModalCloseAndBackdrop();
      bindScreenshotLightbox();

      typeof AOS !== "undefined" &&
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          duration: 800,
          offset: 64,
          delay: 0,
        });

      initParticlesHero();
      initTypedSubtitle();

      /** After DOM paint */
      requestAnimationFrame(() => {
        initScrollProgress();

        /** */
      });

      initHeroGsap();


      observeStatsCounters();
      initStatsTilt();


      /** */
      initCustomCursor();


      /** */
      initNavScrollHide();
      initActiveNavSections();


    };

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => window.initApp(), 0);
    });
