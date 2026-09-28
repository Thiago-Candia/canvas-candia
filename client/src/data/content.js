export const PROFILE = {
  name: 'Thiago Candia',
  headline: 'Full Stack Developer Jr | Estudiante de Tecnicatura en Programación en UTN',
  tagline: 'Transformando ideas en soluciones tecnológicas que generen valor.',
  location: 'La Plata, Buenos Aires, Argentina',
  email: 'candiathiago123@gmail.com',
  phone: '+54 2920 601087',
  // Formato internacional sin "+" ni espacios, como lo pide wa.me
  whatsapp: '5492920601087',
  whatsappMessage: 'Hola Thiago, vi tu portfolio y me gustaría contactarte.',
  // Ruta a la foto de perfil (ej: '/assets/img/profile.jpg', dentro de client/public). null = placeholder.
  image: '/assets/img/profile.jpg',
};

export const LINKS = {
  github: 'https://github.com/Thiago-Candia',
  linkedin: 'https://www.linkedin.com/in/thiago-candia-23953b313/',
  cv: 'https://thiago-candia.github.io/curriculum-vitae-JS/',
};

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'contacto', label: 'Contacto' },
];

export const ABOUT = {
  text: 'Desarrollador Full Stack en formación, con experiencia en proyectos académicos, personales y freelance utilizando React, Django, Node.js y bases de datos SQL/NoSQL. Busco incorporarme a un equipo de desarrollo donde pueda aportar valor, aprender buenas prácticas y crecer profesionalmente.',
  education: [
    { title: 'Tecnicatura Universitaria en Programación', place: 'UTN', detail: 'En curso, 2º año' },
    { title: 'Diplomatura Full Stack MERN', place: 'UTN', detail: '7 meses' },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio (B1)' },
  ],
};

export const SKILLS = [
  { group: 'Frontend', items: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express'] },
  { group: 'Bases de datos', items: ['MongoDB', 'PostgreSQL', 'SQLite', 'SQL'] },
  { group: 'Herramientas', items: ['Git', 'GitHub', 'Linux/Ubuntu', 'WSL2', 'Postman'] },
];

// `repo` y `demo` son opcionales: si se completan, la tarjeta muestra los links.
// `video`: ruta a un archivo en client/public/videos (ver el README ahí
// dentro). `poster`: imagen de portada mientras no se reproduce. Ambos
// null = la card muestra un placeholder con las iniciales del proyecto.
export const PROJECTS = [
  {
    name: 'Yovistoasi',
    summary: 'E-commerce Full Stack con pasarela de pagos, gestión de productos e integración con API.',
    stack: ['React', 'Python', 'SQL'],
    features: ['Rutas protegidas', 'Carrito de compras', 'Checkout integrado', 'Optimización de imágenes'],
    video: null,
    poster: null,
    repo: null,
    demo: null,
  },
  {
    name: 'Slack Clone',
    summary: 'Aplicación de mensajería con autenticación, canales y persistencia de sesión.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Autenticación JWT', 'Workspaces y canales', 'Persistencia de sesión'],
    video: null,
    poster: null,
    repo: null,
    demo: null,
  },
  {
    name: 'Libertadepelota',
    summary: 'App deportiva que consume API-Football, con login mediante Google.',
    stack: ['React', 'Vite', 'Tailwind', 'Firebase'],
    features: ['Consumo de API-Football', 'Login con Google', 'Diseño responsivo PWA'],
    video: null,
    poster: null,
    repo: null,
    demo: null,
  },
  {
    name: 'TRIPPNYC',
    summary: 'E-commerce modular con checkout integrado a Mercado Pago.',
    stack: ['React', 'Django', 'SQL'],
    features: ['Optimización de imágenes WebP', 'Dashboard de administración', 'Checkout con Mercado Pago'],
    video: null,
    poster: null,
    repo: null,
    demo: null,
  },
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Jr',
    place: 'Proyectos freelance y personales',
    description: 'Desarrollo de aplicaciones web completas con React, Django y Node.js, desde el diseño de la base de datos hasta el despliegue.',
  }
];
