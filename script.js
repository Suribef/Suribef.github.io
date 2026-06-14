/* ── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  'hero.label':       { es: 'Frontend &amp; Fullstack Developer · CDMX', en: 'Frontend &amp; Fullstack Developer · CDMX' },
  'hero.quote':       { es: '"Innovar con lo actual, crear para el futuro<br>y aprender de cada voz."', en: '"Innovate with what exists, build for the future,<br>and learn from every voice."' },
  'hero.btn.projects':{ es: 'Ver proyectos', en: 'View projects' },
  'hero.btn.contact': { es: 'Contacto',      en: 'Contact' },
  'hero.meta.carrera':    { es: '<strong>Ing. Computación</strong>',  en: '<strong>Comp. Engineering</strong>' },
  'hero.meta.graduacion': { es: '<strong>Dic. 2026</strong>',         en: '<strong>Dec. 2026</strong>' },

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
    es: '<strong>Hoy construyo y entrego aplicaciones fullstack para clientes reales</strong> — sistemas POS, sitios web con panel de administración y herramientas de análisis de datos. Busco unas prácticas SDE o un rol junior donde pueda contribuir técnicamente desde el primer día.',
    en: '<strong>Today I build and ship full-stack applications for real clients</strong> — POS systems, business websites with admin panels, and data analysis tools. I\'m looking for an SDE internship or junior role where I can contribute technically from day one.'
  },
  'sobre.fact.label.institucion': { es: 'Institución',  en: 'Institution' },
  'sobre.fact.label.carrera':     { es: 'Carrera',      en: 'Degree' },
  'sobre.fact.label.graduacion':  { es: 'Graduación',   en: 'Graduation' },
  'sobre.fact.label.ubicacion':   { es: 'Ubicación',    en: 'Location' },
  'sobre.fact.label.buscando':    { es: 'Buscando',     en: 'Looking for' },
  'sobre.fact.val.carrera':     { es: 'Ingeniería en Computación',              en: 'Computer Engineering' },
  'sobre.fact.val.graduacion':  { es: 'Diciembre 2026',                         en: 'December 2026' },
  'sobre.fact.val.ubicacion':   { es: 'Ciudad de México',                       en: 'Mexico City' },
  'sobre.fact.val.buscando':    { es: 'Prácticas SDE · Junior Full-Stack / Frontend', en: 'SDE Intern · Junior Full-Stack / Frontend' },

  'proyectos.eyebrow': { es: 'Trabajo', en: 'Work' },
  'proyectos.h2':      { es: 'Lo que<br><em>he construido</em>', en: 'What<br><em>I\'ve built</em>' },

  'proyectos.p1.status': { es: 'Completado', en: 'Completed' },
  'proyectos.p1.name':   { es: 'PetPoint — Sistema de Punto de Venta', en: 'PetPoint — Point of Sale System' },
  'proyectos.p1.desc': {
    es: 'Lideré un equipo de 5 personas a través del SDLC completo. Soporta 10+ usuarios simultáneos con sincronización en tiempo real vía Supabase. Incluye esquema relacional, diagramas UML y plan de pruebas completo.',
    en: 'Led a 5-person team through the full SDLC. Supports 10+ concurrent users with real-time sync via Supabase. Includes relational DB schema, UML diagrams, and a complete test plan.'
  },

  'proyectos.p2.status': { es: 'Completado', en: 'Completed' },
  'proyectos.p2.name':   { es: 'Don Shampoo — POS Multi-Sucursal', en: 'Don Shampoo — Multi-Branch POS' },
  'proyectos.p2.desc': {
    es: 'POS completo con arquitectura multi-sucursal para inventario centralizado y gestión de ventas entre ubicaciones. Soporta 10+ usuarios simultáneos con actualizaciones en tiempo real.',
    en: 'Full POS with multi-branch architecture for centralized inventory and sales management across locations. Supports 10+ concurrent users with real-time updates.'
  },

  'proyectos.p3.status': { es: 'Completado', en: 'Completed' },
  'proyectos.p3.name':   { es: 'Dashboard de Análisis de Métricas', en: 'Data Metrics Analysis Dashboard' },
  'proyectos.p3.desc': {
    es: 'Herramienta frontend que procesa ~40,000 registros por sesión. Incluye deduplicación, segmentación multi-perfil, filtros por fecha y un motor de esquema adaptativo que detecta columnas extra en archivos xlsx variables. Sin backend.',
    en: 'Frontend-only tool processing ~40,000 records per session. Features deduplication, multi-profile segmentation, date/parameter filtering, and an adaptive schema engine that detects extra columns in variable xlsx files — no backend required.'
  },

  'proyectos.p4.status': { es: 'Completado', en: 'Completed' },
  'proyectos.p4.name':   { es: 'Compilador para Expresiones Aritméticas', en: 'Arithmetic Expression Compiler' },
  'proyectos.p4.desc': {
    es: 'Pipeline completo: análisis léxico, parser recursivo descendente, construcción de AST y generación de instrucciones ejecutables. Aplica conceptos de bajo nivel: gestión de memoria, call stack, registros x86.',
    en: 'Complete compiler pipeline: lexical analysis, recursive descent parser, AST construction, and executable instruction generation. Applies low-level concepts: memory management, call stack, x86 registers.'
  },

  'proyectos.p5.status': { es: 'Completado', en: 'Completed' },
  'proyectos.p5.name':   { es: 'Dolce y Chile &amp; Argos CMVet — Sitios Web', en: 'Dolce y Chile &amp; Argos CMVet — Client Websites' },
  'proyectos.p5.desc': {
    es: 'Dos proyectos freelance entregados para clientes reales. Cada uno incluye un panel de administración y base de datos en Supabase para que los dueños gestionen contenido de forma independiente. Ciclo completo: requerimientos, entrega y soporte post-lanzamiento.',
    en: 'Two freelance projects delivered for real clients. Each includes a custom admin panel and Supabase-backed database so owners can manage content independently. Full client engagement: requirements, delivery, post-launch support.'
  },

  'proyectos.p6.status': { es: 'En desarrollo', en: 'In development' },
  'proyectos.p6.name':   { es: 'ArmyForce — Rutinas de Gimnasio', en: 'ArmyForce — Gym Routine Tracker' },
  'proyectos.p6.desc': {
    es: 'Aplicación web y móvil para un gimnasio: gestión de rutinas de entrenamiento, historial de sesiones y seguimiento de progreso por usuario. Administración multi-cuenta.',
    en: 'Web and mobile application for a gym to manage member training routines, session logs, and progress tracking. Multi-user account management.'
  },

  'chip.compiladores':   { es: 'Compiladores',       en: 'Compilers' },
  'chip.sistemas':       { es: 'Sistemas',            en: 'Systems' },
  'chip.liderazgo':      { es: 'Liderazgo',           en: 'Leadership' },
  'chip.gestion':        { es: 'Gestión',             en: 'Management' },
  'chip.automatizacion': { es: 'Automatización',      en: 'Automation' },
  'chip.visualizacion':  { es: 'Visualización de Datos', en: 'Data Visualization' },

  'stack.eyebrow':        { es: 'Tecnologías',    en: 'Technologies' },
  'stack.h2':             { es: 'Stack<br><em>técnico</em>', en: 'Tech<br><em>stack</em>' },
  'stack.col.sistemas':   { es: 'Sistemas &amp; Datos', en: 'Systems &amp; Data' },
  'stack.col.metodologia':{ es: 'Herramientas',    en: 'Tools &amp; Methods' },
  'stack.item.ensamblador':{ es: 'Ensamblador x86',     en: 'x86 Assembly' },
  'stack.item.uml':        { es: 'UML &amp; Documentación', en: 'UML &amp; Documentation' },

  'ahora.eyebrow':          { es: 'Status',   en: 'Status' },
  'ahora.h2':               { es: 'Ahora<br><em>mismo</em>', en: 'Right<br><em>now</em>' },
  'ahora.terminal.title':   { es: 'sergiouribe@dev ~ status --current', en: 'sergiouribe@dev ~ status --current' },
  'ahora.cmd.formacion':    { es: 'formacion',    en: 'education' },
  'ahora.cmd.aprendiendo':  { es: 'aprendiendo',  en: 'learning' },
  'ahora.cmd.desarrollando':{ es: 'desarrollando',en: 'building' },
  'ahora.cmd.certificando': { es: 'certificando', en: 'certifying' },
  'ahora.cmd.buscando':     { es: 'buscando',     en: 'looking-for' },
  'ahora.out.ultimo-ano':   { es: 'Último año · IPN ESIME Culhuacán',    en: 'Final year · IPN ESIME Culhuacán' },
  'ahora.out.graduacion':   { es: 'Graduación estimada: Diciembre 2026', en: 'Estimated graduation: December 2026' },
  'ahora.out.aws':          { es: 'AWS Cloud (Cloud Practitioner)',       en: 'AWS Cloud (Cloud Practitioner)' },
  'ahora.out.docker':       { es: 'Docker &amp; containerización',        en: 'Docker &amp; containerization' },
  'ahora.out.testing':      { es: 'Testing &amp; CI/CD',                  en: 'Testing &amp; CI/CD' },
  'ahora.out.armyforce':    { es: 'ArmyForce (rutinas de gimnasio)',      en: 'ArmyForce (gym routine tracker)' },
  'ahora.out.portafolio':   { es: 'Documentación de proyectos del portafolio', en: 'Portfolio project documentation' },
  'ahora.out.cert-aws':     { es: 'AWS Cloud Practitioner — En Progreso',        en: 'AWS Cloud Practitioner — In Progress' },
  'ahora.out.cert-gpm':     { es: 'Google Project Management — En Progreso',     en: 'Google Project Management — In Progress' },
  'ahora.out.cert-swe':     { es: 'Software Engineering Certificate — En Progreso', en: 'Software Engineering Certificate — In Progress' },
  'ahora.out.rol':          { es: 'Prácticas SDE o Junior Full-Stack / Frontend', en: 'SDE Intern or Junior Full-Stack / Frontend role' },

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
