/* ── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  'hero.label':       { es: 'Frontend &amp; Fullstack Developer · CDMX', en: 'Frontend &amp; Fullstack Developer · CDMX' },
  'hero.quote':       { es: '"Innovar con lo actual, crear para el futuro<br>y aprender de cada voz."', en: '"Innovate with what exists, build for the future,<br>and learn from every voice."' },
  'hero.btn.projects':{ es: 'Ver proyectos', en: 'View projects' },
  'hero.btn.contact': { es: 'Contacto',      en: 'Contact' },

  'sobre.eyebrow': { es: 'Sobre mí',   en: 'About me' },
  'sobre.h2':      { es: 'Quién soy<br><em>y qué hago</em>', en: 'Who I am<br><em>and what I do</em>' },
  'sobre.p1': {
    es: 'Soy estudiante de último año de <strong>Ingeniería en Computación</strong> en IPN ESIME Culhuacán, una carrera donde el <strong>software</strong> y el <strong>hardware</strong> se construyen juntos. Eso me dio una base poco común: entiendo circuitos y microcontroladores tanto como bases de datos y arquitecturas web.',
    en: 'I am a final-year student of <strong>Computer Engineering</strong> at IPN ESIME Culhuacán, a degree where <strong>software</strong> and <strong>hardware</strong> are built together. That gave me an uncommon foundation: I understand circuits and microcontrollers as well as databases and web architectures.'
  },
  'sobre.p2': {
    es: 'Me especializo en desarrollo <strong>Frontend y Fullstack</strong>, pero llego a esos proyectos con una visión más completa: sé lo que pasa en las capas de abajo. He trabajado en compiladores, programación de bajo nivel, electrónica y sistemas embebidos, he liderado equipos en proyectos académicos de mayor escala con objetivos claros, alcanzando metas y aprendiendo de los retos que han aparecido.',
    en: 'I specialize in <strong>Frontend and Fullstack</strong> development, but I approach those projects with a fuller picture: I know what happens in the layers below. I have worked on compilers, low-level programming, electronics and embedded systems, and led teams on large-scale academic projects with clear goals.'
  },
  'sobre.p3': {
    es: '<strong>Hoy desarrollo aplicaciones propias y busco mi primer rol profesional</strong> donde pueda construir productos técnicamente sólidos, bien pensados y fáciles de usar.',
    en: '<strong>Today I build my own applications and am looking for my first professional role</strong> where I can ship technically solid, well-designed, and easy-to-use products.'
  },
  'sobre.fact.label.institucion': { es: 'Institución',  en: 'Institution' },
  'sobre.fact.label.carrera':     { es: 'Carrera',      en: 'Degree' },
  'sobre.fact.label.graduacion':  { es: 'Graduación',   en: 'Graduation' },
  'sobre.fact.label.ubicacion':   { es: 'Ubicación',    en: 'Location' },
  'sobre.fact.label.buscando':    { es: 'Buscando',     en: 'Looking for' },
  'sobre.fact.val.carrera':      { es: 'Ingeniería en Computación', en: 'Computer Engineering' },
  'sobre.fact.val.graduacion':   { es: 'Diciembre 2026',            en: 'December 2026' },
  'sobre.fact.val.ubicacion':    { es: 'Ciudad de México',          en: 'Mexico City' },
  'sobre.fact.val.buscando':     { es: 'Rol Frontend / Fullstack',  en: 'Frontend / Fullstack Role' },
  'hero.meta.carrera':           { es: '<strong>Ing. Computación</strong>', en: '<strong>Comp. Engineering</strong>' },
  'hero.meta.graduacion':        { es: '<strong>Dic. 2026</strong>',        en: '<strong>Dec. 2026</strong>' },

  'proyectos.eyebrow': { es: 'Trabajo',                      en: 'Work' },
  'proyectos.h2':      { es: 'Lo que<br><em>he construido</em>', en: 'What<br><em>I\'ve built</em>' },
  'proyectos.p1.name': { es: 'Compilador para Expresiones Aritméticas', en: 'Arithmetic Expression Compiler' },
  'proyectos.p2.name': { es: 'Sistema POS',                             en: 'POS System' },
  'proyectos.p3a.name':{ es: 'Sistema de Aprobación de Créditos',       en: 'Credit Approval System' },
  'proyectos.p3b.name':{ es: 'Vida Fitness',                            en: 'Vida Fitness' },
  'proyectos.p1.status': { es: 'Completado',    en: 'Completed' },
  'proyectos.p2.status': { es: 'Completado',    en: 'Completed' },
  'proyectos.p3a.status':{ es: 'En desarrollo', en: 'In development' },
  'proyectos.p3b.status':{ es: 'En desarrollo', en: 'In development' },
  'proyectos.p1.desc': {
    es: 'Compilador funcional en C++ con análisis léxico, parser recursivo descendente, construcción de AST y generación de código ejecutable. Soporta precedencia de operadores y paréntesis anidados.',
    en: 'Functional compiler in C++ with lexical analysis, recursive descent parser, AST construction, and executable code generation. Supports operator precedence and nested parentheses.'
  },
  'proyectos.p2.desc': {
    es: 'Coordinación de equipo multidisciplinario para diseño y documentación de un sistema de punto de venta. Gestión de requerimientos, modelado UML y comunicación entre perfiles técnicos y no técnicos.',
    en: 'Led a multidisciplinary team to design and document a point-of-sale system. Requirements management, UML modeling, and communication between technical and non-technical stakeholders.'
  },
  'proyectos.p3a.desc': {
    es: 'Automatización del flujo de revisión y aprobación de perfiles para préstamos, con niveles de acceso, modelos de riesgo y gestión de obligados.',
    en: 'Automation of the review and approval flow for loan profiles, with role-based access levels, risk models, and co-signer management.'
  },
  'proyectos.p3b.desc': {
    es: 'Plataforma para gimnasios con registro de rutinas, dietas, comunidad y coaches en tiempo real.',
    en: 'Gym platform with workout and diet tracking, community features, coaches, and real-time equipment availability.'
  },
  'chip.compiladores':  { es: 'Compiladores',  en: 'Compilers' },
  'chip.sistemas':      { es: 'Sistemas',      en: 'Systems' },
  'chip.liderazgo':     { es: 'Liderazgo',     en: 'Leadership' },
  'chip.gestion':       { es: 'Gestión',       en: 'Management' },
  'chip.automatizacion':{ es: 'Automatización',en: 'Automation' },

  'stack.eyebrow':        { es: 'Tecnologías',  en: 'Technologies' },
  'stack.h2':             { es: 'Stack<br><em>técnico</em>', en: 'Tech<br><em>stack</em>' },
  'stack.col.sistemas':   { es: 'Sistemas',     en: 'Systems' },
  'stack.col.metodologia':{ es: 'Metodología',  en: 'Methodology' },
  'stack.item.ensamblador':{ es: 'Ensamblador x86',    en: 'x86 Assembly' },
  'stack.item.embebidos':  { es: 'Arduino / Embebidos', en: 'Arduino / Embedded' },
  'stack.item.uml':        { es: 'UML &amp; Análisis',  en: 'UML &amp; Analysis' },
  'stack.item.algoritmos': { es: 'Algoritmos &amp; SO', en: 'Algorithms &amp; OS' },

  'ahora.eyebrow':        { es: 'Status',   en: 'Status' },
  'ahora.h2':             { es: 'Ahora<br><em>mismo</em>', en: 'Right<br><em>now</em>' },
  'ahora.terminal.title': { es: 'sergiouribe@dev ~ status --current', en: 'sergiouribe@dev ~ status --current' },
  'ahora.cmd.formacion':   { es: 'formacion',   en: 'education' },
  'ahora.cmd.aprendiendo': { es: 'aprendiendo', en: 'learning' },
  'ahora.cmd.desarrollando':{ es: 'desarrollando', en: 'building' },
  'ahora.cmd.buscando':    { es: 'buscando',    en: 'looking-for' },
  'ahora.out.ultimo-ano':  { es: 'Último año · IPN ESIME Culhuacán',    en: 'Final year · IPN ESIME Culhuacán' },
  'ahora.out.graduacion':  { es: 'Graduación estimada: Diciembre 2026', en: 'Estimated graduation: December 2026' },
  'ahora.out.org-proyectos':{ es: 'Organización de proyectos de software', en: 'Software project organization' },
  'ahora.out.docker':      { es: 'Docker &amp; containerización', en: 'Docker &amp; containerization' },
  'ahora.out.testing':     { es: 'Testing con Jest', en: 'Testing with Jest' },
  'ahora.out.sql':         { es: 'SQL avanzado &amp; diseño de BD', en: 'Advanced SQL &amp; DB design' },
  'ahora.out.sistema-creditos':{ es: 'Sistema de Aprobación de Créditos', en: 'Credit Approval System' },
  'ahora.out.rol':         { es: 'Rol como Frontend o Fullstack Developer', en: 'Frontend or Fullstack Developer role' },

  'contacto.eyebrow': { es: 'Contacto', en: 'Contact' },
  'contacto.h2':      { es: 'Hablemos<br><em>directamente</em>', en: 'Let\'s talk<br><em>directly</em>' },
  'contacto.text': {
    es: 'Si tienes un proyecto interesante, una oportunidad para alguien que aprende rápido, o simplemente quieres hablar de tecnología, con gusto te escucho. Estoy abierto a nuevas conversaciones.',
    en: 'If you have an interesting project, an opportunity for someone who learns fast, or simply want to talk tech, I\'d love to hear from you. Open to new conversations.'
  },
  'footer.built': { es: 'Ing. Computación · IPN · Dic 2026', en: 'Computer Eng. · IPN · Dec 2026' },
};

/* ── LANGUAGE SWITCHER ────────────────────────────────────── */
var currentLang = localStorage.getItem('portfolio-lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (T[key] && T[key][lang] !== undefined) {
      el.innerHTML = T[key][lang];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    applyLanguage(btn.dataset.lang);
  });
});

applyLanguage(currentLang);

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const io = new IntersectionObserver(function (entries) {
  var visible = entries.filter(function (e) { return e.isIntersecting; });
  visible.forEach(function (entry, i) {
    setTimeout(function () {
      entry.target.classList.add('visible');
    }, i * 60);
    io.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

/* ── SMOOTH SCROLL ────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
