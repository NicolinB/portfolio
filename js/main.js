/* =========================================================
   PORTOFOLIU BARBAROȘ NICOLIN — main.js
   ========================================================= */

/* ── Constante timing ── */
const CHAR_DELAY     = 58;   // ms per caracter tastat
const PRE_CMD_PAUSE  = 520;  // pauză înainte de fiecare comandă nouă
const POST_CMD_PAUSE = 260;  // pauză după tastare, înainte de output
const OUTPUT_PAUSE   = 110;  // pauză între liniile de output

/* =========================================================
   TRADUCERI (EN / RO)
   ========================================================= */
const TRANSLATIONS = {
  en: {
    /* Navbar */
    'nav.projects' : './projects',
    'nav.about'    : './about',
    'nav.contact'  : './contact',

    /* Stats */
    'stats.projects': 'Projects',
    'stats.study'   : 'Years of Study',
    'stats.tech'    : 'Technologies',
    'stats.enrolled': 'Enrolled',

    /* Section commands (doar partea de după prompt-path) */
    'cmd.projects': ' $ ls -la ./projects/',
    'cmd.about'   : ' $ cat ./README.md',
    'cmd.contact' : ' $ cat ./contact.json',

    /* Titluri secțiuni */
    'section.projects': 'projects',
    'section.about'   : 'about',
    'section.contact' : 'contact',

    /* Categorii */
    'cat.c.name'      : 'C / Systems',
    'cat.python.count': '3 files',
    'cat.web.count'   : '4 files',
    'cat.c.count'     : '3 files',
    'cat.fpga.count'  : '3 files',

    /* Proiecte — descrieri */
    'proj.auto_backup.desc'   : 'Organizes files in any folder into subdirectories by type (Images, Documents, Code…). Includes a dry-run preview mode.',
    'proj.serial_monitor.desc': 'Reads a text file and outputs word count, sentence count, top-10 word frequency and character statistics. Supports UTF-8 and Latin-1.',
    'proj.grade_calc.desc'    : 'CLI unit converter for temperature, length, mass, speed and area. Factor-based conversion table, clean menu interface.',
    'proj.portfolio.desc'     : 'This site — personal portfolio with a terminal theme, built with pure HTML, CSS and JavaScript, no frameworks.',
    'proj.lafaleza.desc'      : 'Restaurant terrace site in Soroca — sushi, pizza, grill and breakfast. Live menu fetched from Google Sheets via Vercel API. Google Maps integration.',
    'proj.coffeein.desc'      : 'Coffee shop site with hero, gallery, multiple locations with Moldova map and multilingual support. Next.js, Tailwind CSS and Framer Motion.',
    'proj.apetit.desc'        : 'Fast food restaurant site with menu, locations and contact pages. Includes a private /admin panel for content management. Built with React and Vite.',
    'proj.sorting.desc'       : 'CLI demo of Bubble, Selection, Insertion and Quick Sort. Step-by-step visualization for small arrays, benchmark with comparison/swap counters for large ones.',
    'proj.alloc.desc'         : 'CLI app to manage student grades: add/remove students, sort by average, search by name, class statistics, and save/load from file.',
    'proj.matrix.desc'        : 'Matrix calculator supporting addition, subtraction, multiplication, transpose, determinant (recursive Laplace) and scalar multiply.',
    'proj.alu.desc'           : '4-bit ALU in VHDL: ADD, SUB, AND, OR, XOR, NOT, shift left/right. Carry, zero, sign and overflow flags. Mapped to DE10-Lite switches and LEDs.',
    'proj.traffic.desc'       : 'Traffic light FSM in VHDL: RED→RED-YELLOW→GREEN→YELLOW cycle with configurable timing. 50 MHz clock divider to 1 Hz. Synthesized on DE10-Lite.',
    'proj.seg.desc'           : '4-digit BCD counter (0000–9999) with 7-segment display driver. Active-low encoding via lookup table, 1-second tick from 50 MHz clock divider.',

    /* Despre */
    'about.faculty'   : 'Automation and Applied Informatics',
    'about.status'    : 'Available for internships',
    'about.year'      : 'Year I · 2025–2026',
    'about.p1'        : "I'm finishing my first year studying Automation and Applied Informatics in Suceava. Most of my time goes into understanding how things work under the hood — digital logic on FPGAs, low-level programming in C, and automating whatever I can with Python.",
    'about.p2'        : "I also enjoy building for the web on the side. I'm drawn to projects where software and hardware overlap, so most things I build end up somewhere between the two.",
    'about.curr1'     : 'Operating Systems',
    'about.curr2'     : 'Networks',
    'about.curr3'     : 'Algorithms',
    'about.curr4'     : 'FPGA Design',
    'about.interests.label': 'interests',
    'about.currently.label': 'currently',
    'about.quote'     : '"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke',

    /* Contact */
    'contact.email.action'   : '→ Send an email',
    'contact.github.action'  : '→ See projects',
    'contact.linkedin.action': '→ Connect',

    /* Footer */
    'footer.built': 'HTML, CSS & JS',

    /* Secvența terminal */
    terminal: [
      { type: 'cmd',    text: 'whoami' },
      { type: 'output', cls: 'output-green', text: 'barbaros_nicolin' },
      { type: 'blank' },
      { type: 'cmd',    text: 'cat ./bio.txt' },
      { type: 'output', cls: 'output-amber', text: '# Barbaroș Nicolin — bio.txt' },
      { type: 'output', cls: '',             text: 'Student — Automation & Applied Informatics,' },
      { type: 'output', cls: '',             text: 'Year I · University of Suceava · from Moldova.' },
      { type: 'output', cls: 'output-muted', text: 'Passionate about digital systems, code and electronics.' },
      { type: 'blank' },
      { type: 'cmd',    text: 'ls ./skills/' },
      { type: 'output', cls: 'output-cyan',  text: 'C/            Python/       JavaScript/   HTML_CSS/' },
      { type: 'output', cls: 'output-cyan',  text: 'FPGA_Quartus/ Git/          Linux/        Web_Dev/' },
      { type: 'blank' },
    ],
  },

  ro: {
    /* Navbar */
    'nav.projects' : './proiecte',
    'nav.about'    : './despre',
    'nav.contact'  : './contact',

    /* Stats */
    'stats.projects': 'Proiecte',
    'stats.study'   : 'Ani de Studiu',
    'stats.tech'    : 'Tehnologii',
    'stats.enrolled': 'An Înmatriculare',

    /* Section commands */
    'cmd.projects': ' $ ls -la ./proiecte/',
    'cmd.about'   : ' $ cat ./README.md',
    'cmd.contact' : ' $ cat ./contact.json',

    /* Titluri secțiuni */
    'section.projects': 'proiecte',
    'section.about'   : 'despre',
    'section.contact' : 'contact',

    /* Categorii */
    'cat.c.name'      : 'C / Sisteme',
    'cat.python.count': '3 fișiere',
    'cat.web.count'   : '4 fișiere',
    'cat.c.count'     : '3 fișiere',
    'cat.fpga.count'  : '3 fișiere',

    /* Proiecte — descrieri */
    'proj.auto_backup.desc'   : 'Organizează fișierele dintr-un folder în subdirectoare după tip (Imagini, Documente, Cod…). Include mod preview fără modificări.',
    'proj.serial_monitor.desc': 'Citește un fișier text și afișează număr de cuvinte, propoziții, top-10 frecvență și statistici de caractere. Suportă UTF-8 și Latin-1.',
    'proj.grade_calc.desc'    : 'Convertor CLI de unități pentru temperatură, lungime, masă, viteză și suprafață. Tabel de factori de conversie, interfață cu meniu.',
    'proj.portfolio.desc'     : 'Acest site — portofoliu personal cu temă de terminal, construit cu HTML, CSS și JavaScript pur, fără framework-uri.',
    'proj.lafaleza.desc'      : 'Site de terasă restaurant în Soroca — sushi, pizza, grill și mic dejun. Meniu live din Google Sheets prin Vercel API. Integrare Google Maps.',
    'proj.coffeein.desc'      : 'Site de cafenea cu hero, galerie, mai multe locații cu hartă Moldova și suport multilingv. Next.js, Tailwind CSS și Framer Motion.',
    'proj.apetit.desc'        : 'Site restaurant fast food cu meniu, locații și contact. Include panel /admin privat pentru gestionarea conținutului. Construit cu React și Vite.',
    'proj.sorting.desc'       : 'Demo CLI pentru Bubble, Selection, Insertion și Quick Sort. Vizualizare pas-cu-pas pe array-uri mici, benchmark cu contoare comparații/swap-uri.',
    'proj.alloc.desc'         : 'Aplicație CLI pentru gestionarea notelor studenților: adăugare, ștergere, sortare după medie, căutare după nume, statistici, salvare în fișier.',
    'proj.matrix.desc'        : 'Calculator de matrice cu adunare, scădere, înmulțire, transpusă, determinant (Laplace recursiv) și înmulțire cu scalar.',
    'proj.alu.desc'           : 'UAL pe 4 biți în VHDL: ADD, SUB, AND, OR, XOR, NOT, shift stânga/dreapta. Flag-uri carry, zero, semn și overflow. Mapat pe switch-urile și LED-urile DE10-Lite.',
    'proj.traffic.desc'       : 'FSM pentru semafor în VHDL: ciclu ROȘU→ROȘU-GALBEN→VERDE→GALBEN cu timing configurabil. Divizor de ceas 50 MHz → 1 Hz. Sintetizat pe DE10-Lite.',
    'proj.seg.desc'           : 'Numărător BCD pe 4 cifre (0000–9999) cu driver pentru afișaj 7 segmente. Codificare active-low prin tabel de căutare, tick de 1 secundă din divizor 50 MHz.',

    /* Despre */
    'about.faculty'   : 'Automatică și Informatică Aplicată',
    'about.status'    : 'Disponibil pentru internship',
    'about.year'      : 'Anul I · 2025–2026',
    'about.p1'        : 'Termin primul an la Automatică și Informatică Aplicată la Suceava. Petrec mult timp înțelegând cum funcționează lucrurile la nivel de bază — logică digitală pe FPGA-uri, programare în C și automatizare cu Python.',
    'about.p2'        : 'Îmi place și să construiesc pentru web ca proiect secundar. Mă atrag proiectele în care software-ul se întâlnește cu hardware-ul, de obicei ajung cu ceva undeva la mijloc.',
    'about.curr1'     : 'Sisteme de Operare',
    'about.curr2'     : 'Rețele',
    'about.curr3'     : 'Algoritmi',
    'about.curr4'     : 'FPGA Design',
    'about.interests.label': 'interese',
    'about.currently.label': 'în prezent',
    'about.quote'     : '"Orice tehnologie suficient de avansată este de nedeosebit de magie." — Arthur C. Clarke',

    /* Contact */
    'contact.email.action'   : '→ Trimite un email',
    'contact.github.action'  : '→ Vezi proiectele',
    'contact.linkedin.action': '→ Conectează-te',

    /* Footer */
    'footer.built': 'HTML, CSS & JS',

    /* Secvența terminal */
    terminal: [
      { type: 'cmd',    text: 'whoami' },
      { type: 'output', cls: 'output-green', text: 'barbaros_nicolin' },
      { type: 'blank' },
      { type: 'cmd',    text: 'cat ./bio.txt' },
      { type: 'output', cls: 'output-amber', text: '# Barbaroș Nicolin — bio.txt' },
      { type: 'output', cls: '',             text: 'Student la Automatică și Informatică Aplicată,' },
      { type: 'output', cls: '',             text: 'anul I · Universitatea Suceava · originar din Moldova.' },
      { type: 'output', cls: 'output-muted', text: 'Pasionat de sisteme digitale, cod și electronică.' },
      { type: 'blank' },
      { type: 'cmd',    text: 'ls ./skills/' },
      { type: 'output', cls: 'output-cyan',  text: 'C/            Python/       JavaScript/   HTML_CSS/' },
      { type: 'output', cls: 'output-cyan',  text: 'FPGA_Quartus/ Git/          Linux/        Web_Dev/' },
      { type: 'blank' },
    ],
  },
};

/* =========================================================
   STARE GLOBALĂ
   ========================================================= */
let currentLang    = localStorage.getItem('portfolio-lang') || 'en';
let animGeneration = 0; // incrementat la fiecare restart — oprește animații vechi

/* =========================================================
   UTILS
   ========================================================= */
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* =========================================================
   ANIMAȚIE TERMINAL — TASTARE CARACTER CU CARACTER
   ========================================================= */

/* Tastează text caracter-cu-caracter în elementul dat.
   Verifică `gen` la fiecare pas — dacă s-a schimbat, iese silențios. */
async function typeText(el, text, gen) {
  for (const char of text) {
    if (gen !== animGeneration) return;
    el.textContent += char;
    await delay(CHAR_DELAY);
  }
}

/* Construiește nodul HTML al promptului (fără span-ul de comandă) */
function buildPromptNode() {
  const line = document.createElement('div');
  line.className = 'terminal-line visible';
  line.innerHTML =
    '<span class="prompt-user">nicolin</span>' +
    '<span class="prompt-at">@</span>' +
    '<span class="prompt-host">dev</span>' +
    '<span class="prompt-at">:</span>' +
    '<span class="prompt-path">~/portfolio</span>' +
    '<span class="prompt-dollar">$&nbsp;</span>';
  return line;
}

async function runTerminalAnimation() {
  const gen = ++animGeneration; // orice animație mai veche se va opri
  const body = document.getElementById('terminal-body');
  if (!body) return;

  /* Resetăm */
  body.innerHTML = '';
  const finalLine = document.getElementById('terminal-cursor-final');
  if (finalLine) finalLine.style.opacity = '0';

  const sequence = TRANSLATIONS[currentLang].terminal;

  for (const step of sequence) {
    if (gen !== animGeneration) return;

    if (step.type === 'blank') {
      await delay(150);
      if (gen !== animGeneration) return;
      const el = document.createElement('div');
      el.className = 'output-line visible';
      el.innerHTML = '&nbsp;';
      body.appendChild(el);

    } else if (step.type === 'cmd') {
      /* Pauză înainte de comandă nouă */
      await delay(PRE_CMD_PAUSE);
      if (gen !== animGeneration) return;

      /* Construim rândul cu prompt */
      const line    = buildPromptNode();
      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'prompt-cmd';

      /* Cursor de tastare care clipește în timp ce scriem */
      const typeCursor = document.createElement('span');
      typeCursor.className = 'type-cursor';
      typeCursor.setAttribute('aria-hidden', 'true');

      line.appendChild(cmdSpan);
      line.appendChild(typeCursor);
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;

      /* Tastăm comanda */
      await typeText(cmdSpan, step.text, gen);
      if (gen !== animGeneration) return;

      typeCursor.remove();
      await delay(POST_CMD_PAUSE);

    } else if (step.type === 'output') {
      await delay(OUTPUT_PAUSE);
      if (gen !== animGeneration) return;
      const el = document.createElement('div');
      el.className = `output-line ${step.cls || ''} visible`;
      el.textContent = step.text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }
  }

  if (gen !== animGeneration) return;
  if (finalLine) finalLine.style.opacity = '1';
}

/* =========================================================
   INTERNAȚIONALIZARE (i18n)
   ========================================================= */

function applyTranslations() {
  const t = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  /* Setăm atributul lang pe <html> pentru accesibilitate */
  document.documentElement.lang = currentLang;
}

function updateLangUI() {
  const enEl = document.getElementById('lang-en');
  const roEl = document.getElementById('lang-ro');
  if (!enEl || !roEl) return;
  enEl.classList.toggle('active', currentLang === 'en');
  roEl.classList.toggle('active', currentLang === 'ro');
}

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  updateLangUI();

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ro' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    updateLangUI();
    applyTranslations();
    /* Repornim animația în noua limbă */
    runTerminalAnimation();
  });
}

/* =========================================================
   NAVBAR MOBIL — HAMBURGER
   ========================================================= */
function initNavToggle() {
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* =========================================================
   SCROLL SPY — link activ în navbar
   ========================================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

/* =========================================================
   SCROLL REVEAL — fade-in-up pentru carduri
   ========================================================= */
function initScrollReveal() {
  const cards = document.querySelectorAll(
    '.project-card, .stat-card, .contact-card, .readme-block'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stagger = (entry.target.dataset.index || 0) * 60;
          setTimeout(() => {
            entry.target.style.animation = 'fadeInUp 0.45s ease forwards';
            entry.target.style.opacity   = '1';
          }, stagger);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  cards.forEach((card, i) => {
    card.style.opacity   = '0';
    card.dataset.index   = i % 3;
    observer.observe(card);
  });
}

/* =========================================================
   CONTOARE ANIMATE — stats
   ========================================================= */
function animateCounter(el, target, duration = 1200) {
  const start  = performance.now();
  const suffix = el.dataset.suffix || '';
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target, parseInt(entry.target.dataset.count, 10));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* =========================================================
   CARD LINKS — click pe tot cardul → GitHub
   ========================================================= */
function initCardLinks() {
  document.querySelectorAll('.project-card[data-href]').forEach((card) => {
    const url = card.dataset.href;
    if (!url || url === '#') return;
    card.addEventListener('click', () => {
      window.open(url, '_blank', 'noopener,noreferrer');
    });
    /* Accesibilitate: permite navigarea cu tastatură */
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initLangToggle();
  runTerminalAnimation();
  initNavToggle();
  initScrollSpy();
  initScrollReveal();
  initCounters();
  initCardLinks();
});
