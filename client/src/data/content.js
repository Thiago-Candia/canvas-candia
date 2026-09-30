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
  cvFile: '/cv/Thiago-Candia-CV.pdf',
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
  text: 'Soy estudiante avanzado de la Tecnicatura en Programación en la UTN, cuento con experiencia entregando proyectos freelance reales a clientes. Hoy busco mi primer trabajo formal, en un equipo donde pueda trabajar con personas más experimentadas, ordenar los hábitos que armé trabajando solo y crecer con feedback real.',
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
  { group: 'Backend', items: ['Python', 'Django', 'Node.js', 'Express'] },
  { group: 'Bases de datos', items: ['MongoDB', 'PostgreSQL', 'SQLite', 'SQL'] },
  { group: 'Herramientas', items: ['Git', 'GitHub', 'Linux/Ubuntu', 'WSL2', 'Postman'] },
];

export const PROJECTS = [
  {
    name: 'Yovistoasi',
    summary: 'E-commerce Full Stack con pasarela de pagos, gestión de productos e integración con API.',
    stack: ['React', 'Python', 'SQL'],
    features: ['Rutas protegidas', 'Carrito de compras', 'Checkout integrado', 'Optimización de imágenes'],
    video: '/videos/yovistoasi.mp4',
    videoWebm: '/videos/yovistoasi.webm',
    poster: '/videos/yovistoasi-poster.webp',
    repo: null,
    demo: null,
  },
  {
    name: 'Coach David',
    summary: 'Plataforma web para un coach fitness: landing, portal de alumnos y panel administrativo.',
    stack: ['React', 'Vite', 'Tailwind', 'FastAPI', 'Firebase'],
    features: [
      'Autenticación y roles con Firebase Auth',
      'Rutinas y calendario de entrenamiento por alumno',
      'Checkout con Mercado Pago e idempotencia',
    ],
    video: '/videos/coach-david.mp4',
    videoWebm: '/videos/coach-david.webm',
    poster: '/videos/coach-david-poster.webp',
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
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Jr',
    place: 'Proyectos freelance',
    description: 'Desarrollo de aplicaciones web completas con React y Django, desde el diseño de la base de datos hasta el despliegue.',
  }
];
